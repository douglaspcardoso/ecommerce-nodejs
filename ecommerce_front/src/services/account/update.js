const Customer = require('./../../schemas/customer')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
    let birthday =req.body.birthday.toString().split('/')
    let slug = slugfy(req.body.name)

    let data = {
        name: req.body.name,
        slug: slug,
        birthday: {
            day: birthday[0],
            month: birthday[1],
            year: birthday[2]
        },
        cpf: req.body.cpf,
        phone: req.body.phone,
        email: req.body.email,
        address: {
            street: req.body.street,
            number: req.body.number,
            complement: req.body.complement,
            city: req.body.city
        }
    }

    Customer
        .findById(req.params.id)
        .then((customer) => {
            if (!customer) {
                return res.redirect('/')
            }

            customer.password = req.body.password

            customer.setPassword(customer.password, (error, updated, passErr) => {
                if (error || passErr) {
                    return res.redirect('/')
                }

                updated.save()

                Customer
                    .findByIdAndUpdate(req.params.id, data)
                    .then((updated) => {
                        return res.redirect('/account/' + req.user.slug)
                    })
            })
        })
        .catch((error) => {
            return res.redirect('/account/' + req.user.slug)
        })
}