const router = require('express').Router();
const axios = require('axios').default;
const cache = require('../../redis');

router.post('/', async (req, res) => {
   let { typeOfSearch, textToSearch } = req.body;

   if (typeOfSearch && typeOfSearch) {
      try {
         cache.get('results', async (error, data) => {
            if (error) throw error;
            const type = JSON.parse(data)?.type;
            const text = JSON.parse(data)?.text;
            if (data && type === typeOfSearch && text === textToSearch) {
               res.status(200).json({
                  message: 'Data from redis cache',
                  result: JSON.parse(data),
               });
            } else {
               const { data } = await axios.get(
                  `https://api.github.com/search/${typeOfSearch}?q=${textToSearch}`
               );
               const fullResult = {
                  type: typeOfSearch,
                  text: textToSearch,
                  github_results: data,
               };
               cache.setex('results', 7200, JSON.stringify(fullResult));
               res.status(200).json({
                  message: 'Data from external API',
                  result: fullResult,
               });
            }
         });
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   } else {
      res.status(400).json({
         message: 'Unable to create results, required fields are not complete.',
      });
   }
});

module.exports = router;
