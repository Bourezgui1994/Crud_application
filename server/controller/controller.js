
const User = require('../models/model');

// create and save user 

exports.create= (req,res)=>{

    // validate request 

    if(!req.body){
        return res.status(400).send({message:'body cannot be empty'})
    }

    // create new user 

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status,
    })

    // save user 

    user.save(user).then(data=>{
        res.send(data)
    }).catch(err =>{
        res.status(500).send({message:err.message||'error while saving user'})
    })

}

// Find all users or single user 

exports.find= (req,res)=>{

    // find single user with id 
    if (req.query.id ){
        const id = req.query.id 

    User.findById(id).then(data=>{
        if(!data){
            res.status(404).send({message:`cannot find user with ${id}`})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:'there is an error while find user'})
    })
    } else {
       // find all user

    User.find().then(User=>{
        res.send(User)
    }).catch(err=>{
        res.status(500).send({message:'error while find user'})
    })
    
}
    }
   

    

// update user with id  

exports.update= (req,res)=>{

    // validate request 
    if(!req.body){
        return res.status(400).send({message:'body cannot be empty'})
    }

    // update user information width id 
    
    // get id in request url 
    const id = req.params.id

    User.findByIdAndUpdate(id,req.body).then(data=>{
     
        if(!data){
            return res.status(404).send({message:`cannot update user information with ${id}`})
        }
        else{
            res.send(data)
        }
    }
        
    ).catch(err=>{
        res.status(500).send({message:'there is an error '})
    })

}

// delete user width id 

exports.delete= (req,res)=>{
    
    // get id in request url
   
    const id = req.params.id

    User.findByIdAndDelete(id).then(data=>{
        if(!data){
            return res.status(404).send({message:`cannot delete user with ${id}`})
        }else {
            res.send({message:'user was succesfully deleted'})
        }
    }).catch(err=>{
        res.status(500).send({message:'error while delete user'})
    })
}