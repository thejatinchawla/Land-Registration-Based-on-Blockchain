const express = require('express')
const User = require('../models/User')

const router = new express.Router()


router.get('/',(req,res)=>{
    User.find()
    .exec()
    .then(result=>{
        res.status(200).send(result)
    }).catch(e=>{
        console.log(e);
    })
})


router.post('/register', async (req, res) => {
    const { email, name, contact, address, city, postalCode } = req.body
    try {
      let user = await User.findOne({
        email,
      })
      if (user) {
        return res.status(400).json({
          message: 'User Already Exists',
        })
      }
  
      user = new User({
        email,
        name,
        contact,
        address,
        city,
        postalCode,
      })
  
      await user.save()
      res.status(200).send('Thanks for registering!')
      console.log(user)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Error in Saving : ',err.message)
    }
  })

router.post('/register_govt', async (req, res) => {
    const { username, password, address, contact, city } = req.body
    try {
      let govt = await Govt.findOne({
        username,
      })
      if (govt) {
        return res.status(400).json({
          message: 'User Already Exists',
        })
      }
  
      govt = new Govt({ username, password, address, contact, city })
      await govt.save()
      res.status(200).send('Thanks for registering!')
      console.log(govt)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Error in Saving : ',err.message)
    }
  })
router.post('/login',async(req,res)=>{
    try {
        const address = req.body.address
        const userDetail = await User.findOne({address:address})
        console.log(userDetail)
        if (userDetail) {
            res.json({msg:"login successfull"})
        } else {
            res.status(401).json({msg:"invalid Details"})
        }
    } catch (error) {
        console.log(error);
    }
})

 router.get('/fetchuserdetails/:address',async(req,res)=>{
  try {
      const address = req.params.address
      const fetch = await User.findOne({address:address})
      res.send(fetch)
  } catch (error) {
      console.log(error);
  }
})



module.exports = router

