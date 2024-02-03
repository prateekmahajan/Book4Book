const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const ProfileModel = require('../Models/ProfileModel')
const route = express.Router()


/**
 * Helps user to Signup
 */
route.post('/signup', async (request, response) => {
  const { email, password } = request.body

  try {
    const profile = await new ProfileModel({
      email,
      password,
    }).save()
    response.send(signAuthToken(profile._id))
  } catch (error) {
    error.code === 11000
      ? response.status(409).send('An account with the provided email or phone already exists.')
      : response.status(500).send('Internal error')
      console.log(error);
  }
})

/**
 * Helps user to login with password
 */
route.post('/login', async (request, response) => {
  const { email, password } = request.body

  try {
    const profile = await ProfileModel.findOne({ email, password })
    if (profile) {
      response.send(signAuthToken(profile._id))
    }
    else {
      response.status(404).send('Invalid email or passowrd')
    }
  } catch (error) {
    console.log('Error @ login route', error);
    response.status(500).send('Internal error')
  }
})


module.exports = route


// Utility functions
function signAuthToken(profileId) {
  return jwt.sign({ profileId }, config.get('jwtSecretKey'))
}