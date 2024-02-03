const express = require('express')
// const crypto = require('crypto')
// const config = require('config')
// const mongoose = require('mongoose')
// const { Storage } = require('@google-cloud/storage');
// const ActivityModel = require('../Models/ActivityModel')
// const ProfileModel = require('../Models/ProfileModel')
// const ChatModel = require('../Models/ChatModel');
// const { handleActivityImages } = require('../middlewares/handleImages')
// const { auth } = require('../middlewares/auth');
const route = express.Router()

/**
 * This route is used in create new activity screen and helps to publish a new activity
 */
route.post('/', auth, handleActivityImages.single('image'), (request, response) => {

  // const _id = new mongoose.Types.ObjectId()
  // const storage = new Storage({ projectId: config.get('gcpProjectId'), keyFilename: 'googleServiceAccountKey.json' });
  // const bucket = storage.bucket(config.get('gcpActivityImagesBucket'));
  // const blob = bucket.file(_id + '/' + crypto.randomUUID().toString() + '.' + request.file.originalname.split('.').pop().toLowerCase());
  // const blobStream = blob.createWriteStream();

  // blobStream.on('error', error => {
  //   console.log('Error while blobstream @ Create new activity route', error);
  //   next(error);
  // });

  // blobStream.on('finish', async () => {
  //   request.body._id = _id
  //   request.body.image = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
  //   request.body.host = request.profileId

  //   try {
  //     const activity = await new ActivityModel(request.body).save()
  //     const chat = await new ChatModel({ activityId: activity._id, participants: request.profileId }).save()
  //     await ProfileModel.updateOne({ _id: request.profileId }, { $push: { hostings: activity._id, chats: chat._id } })
  //     handlePastActivity(activity)                            // async function without await

  //     await activity.populate('host', 'name age profilePic description')   // Remove this line after implimenting caching of logedin user's profile in the app so that u can get all this data from the cache.

  //     console.log('Published Activity Successfully');
  //     response.send(activity)
  //   } catch (error) {
  //     console.log('Error while publishing activity', error);
  //     response.status(500).send(error)
  //   }
  // });

  // blobStream.end(request.file.buffer);
})

/**
 * This route is used in the explore screen of the app where it gets all the available activities for the user
 */
route.get('/all', auth, async (request, response) => {
  // const { profileId } = request
  // const { page, search } = request.query

  // try {
  //   const profile = await ProfileModel.findById(profileId).select('confirmed requested wishlist hostings')
  //   const activities = await ActivityModel
  //     .find({ title: new RegExp(search, 'i') })
  //     .select('image title address date time host')
  //     .populate('host', 'name age profilePic description')
  //     .sort({ _id: -1 })
  //     .skip((page - 1) * numberOfActivityCards)
  //     .limit(numberOfActivityCards)
  //   const updatedActivities = updateActivityOptions(activities, profile, { isRequestedWishlisted: true, isConfirmedWishlisted: true, isRequested: true, isConfirmed: true, isWishlisted: true, isHosted: true })
  //   response.send(updatedActivities)
  // } catch (error) {
  //   console.log('Error @ get all activities route', error)
  //   response.status(500).send(error)
  // }
})



/**
 * This route is used in activity details screen and gets all the details about an activity
 */
route.get('/:activityId', (request, response) => {

})


module.exports = route