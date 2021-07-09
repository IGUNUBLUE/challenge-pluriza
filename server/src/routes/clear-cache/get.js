const router = require('express').Router();
const cache = require('../../redis');

router.get('/', function (req, res) {
   cache.flushdb(function (error, succeeded) {
      try {
         if (error) throw error;
         res.status(200).json({
            message: `${succeeded}, the information in the cache was deleted`,
         });
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   });
});

module.exports = router;
