import * as mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
    _id: String,
    stock: String,
    price: String,
    change: String,
    high: String,
    low: String,
    bidVolume: String,
    bidPrice: String,
    offerPrice: String,
    offerVolume: String,
    tradedVolume: String,
    modified_time: String,
}, {collection: 'stock'});

const stock = mongoose.model('stock', StockSchema);

export default stock;