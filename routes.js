const router = require('express').Router();
const goodsController = require('./controllers/goodsController');
const nftController = require('./controllers/nftController');
const collectionsController = require('./controllers/collectionsController');

router.get('/', (req, res) => {
    res.send('Server is running')
})

router.use('/goods', goodsController);
router.use('/nft', nftController);
router.use('/collections', collectionsController);

module.exports = router;