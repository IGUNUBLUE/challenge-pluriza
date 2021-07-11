const { Router } = require('express');
const router = Router();

// search GET /search
router.use('/search', require('./search/post'));
// clear-cache GET /clear-cache
router.use('/clear-cache', require('./clear-cache/get'));

module.exports = router;
