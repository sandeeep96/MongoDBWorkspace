import * as express from 'express';

import stock from './models/stocks';

const router = express.Router();

let numRowsLatest, numRowsPrev;

router.get('/records', (req, res, next) => {
    stock.find({}, (err, stockItem) => {
        if (err) {
            console.log('An error occurred while fetching data: ' + err);
        } else {
            res.json(stockItem);
        }
    });
    // console.log(count(req, res));
});

router.get('/recordsTop100', (req, res, next) => {
    stock.find({})
        .where
        .exec((err, stockItem) => {
            if (err) {
                console.log('An error occurred while fetching data: ' + err);
            } else {
                res.json(stockItem);
            }
        });
});

function count(req, res) {
    // let countValue;
    stock.count((err, countVal) => {
        if (err) {
            console.log('An error occurred while fetching data: ' + err);
        } else {
            // countValue = parseInt(countVal, 10);
            res.json(countVal);
        }
    });
    // return countValue;
}

module.exports = router;