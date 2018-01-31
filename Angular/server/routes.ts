import * as express from 'express';
const router = express.Router();

router.get('/data', (req, res, next) => {
    res.send('Logic for getting data from Solr');
});

module.exports = router;