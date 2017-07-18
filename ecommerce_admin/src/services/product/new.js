const Product = require('./../../schemas/product')
const Category = require('./../../schemas/category')

module.exports = (req, res) => {
    let product = new Product()

    Category
        .find({
            enable: true
        })
        .then((categories) => {
            return res.render('product/new', {
                title: 'Admin Ecommerce',
                layout: 'layouts/main',
                user: req.user || undefined,
                product: product,
                categories: categories,
            })
        })
        .catch((error) => {

        })
}