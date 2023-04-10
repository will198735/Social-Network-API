const router = require('express').Router();
const {
  getSinglethought,
  getThought,
  createThought,
} = require('../../controllers/thooghtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSinglethought);

module.exports = router;