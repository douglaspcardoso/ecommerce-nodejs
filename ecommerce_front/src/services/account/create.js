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

    Customer.register(data, req.body.password, (error, account) => {
        if (error) {
            console.log(error)
            return res.redirect('/')
        }


        console.log('Successfully created. Customer: ' + data.name)
        return res.redirect('/account')
    })
}