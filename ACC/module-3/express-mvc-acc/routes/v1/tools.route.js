const express = require('express');
const toolsControllers = require('../../controllers/tools.controllers.js');
const limiter = require('../../middleware/limiter.js');
const viewCount = require('../../middleware/viewCount.js');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Tools found');
// });

// router.post('/tools', (req, res) => {
//     res.send('Tools added');
// });

router
    .route('/')
    /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
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
    .get(toolsControllers.getAllTools)
    /**
   * @api {post} /tools save a tool
   * @apiDescription Get all the tools
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
    .post(toolsControllers.saveATool);

    /**
 * Router level middleware 
 * when we want to count specific url thamn we will use this
 * */
router.route("/:id").get(viewCount, limiter, toolsControllers.getToolDetails);

module.exports = router;