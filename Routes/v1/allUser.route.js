const express = require('express');
const userController = require('../../controllers/allUser.controllers');
const viewCount = require('../../middleware/viewCount');
const limiter = require('../../middleware/limiter');
const router = express.Router()


// router.get('/', async (req, res) => {
//     res.send("all User")
// })

// router.post('/', async (req, res) => {
//     console.log("User added")
// })


router.route('/')
    /**
       * @api {get} /tools All tools
       * @apiDescription Get all the user info
       * @apiPermission admin
       *
       * @apiHeader {String} Authorization   User's access token
       *
       * @apiParam  {Number{1-}}         [page=1]     List page
       * @apiParam  {Number{1-100}}      [limit=10]  Users per page
       *
       * @apiSuccess {Object[]} all the tools.
       *
       * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
       * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
       */
    .get(userController.getAllUsers)
    /**
   * @api {post} /post a user info
   * @apiDescription Post a user Info
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .post(userController.addUser)

    // router.route('/:id').get(viewCount, userController.userDetails)
    router.route('/:id').patch(userController.updateUser).delete(userController.deleteUser)

module.exports = router;

