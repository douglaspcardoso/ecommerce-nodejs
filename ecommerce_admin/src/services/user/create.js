const User = require('./../../schemas/user')

module.exports = (req, res) => {
    let data = {
        email: req.body.email
    }

    User
        .register(data, req.body.password, (error, user) => {
            if (error) {
                return
            }

            user.password = req.body.password

            user.setPassword(user.password, (err, updated, passError) => {
                if (err || passError) {
                    return res.redirect('/')
                }

                updated.save()
    
                return res.redirect('/user')
            })
        })
}