const Cart = require('./../../schemas/cart')
const Product = require('./../../schemas/product')

module.exports = (req, res) => {
    Cart
        .findById(req.params.id)
        .populate('products.product')
        .then((cart) => {
            cart.products.pull({
                _id: req.query.product_id
            })
            cart.save()

            if (!cart.products.length) {
                return res.redirect('/')
            }

            return res.redirect('/cart/'.concat(req.params.id))
        })

}