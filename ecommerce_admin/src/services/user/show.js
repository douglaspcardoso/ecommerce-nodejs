const User = require('./../../schemas/user')

module.exports = (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.redirect('/user')
            }

            return res.render('user/show', {
                title: 'User',
                layout: 'layouts/main',
                user: req.user || undefined,
                data: user
            })
        })
}