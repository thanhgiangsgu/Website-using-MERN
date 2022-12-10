const account = require('../models/Account')

class Account {
    index(req, res) {
        account.find({}, function (err, account) {
            res.json(account)
            // res.status(400).json({ error: 'ERROR'})
        })
    }

    getAccount(req, res) {

        let a = req.params.id
        account.findOne({ username: a }, function (err, accountt) {
            // xu li 
            res.json(accountt)
            // return check 
        })
    }

    checkLogin(req, res) {
        account.findOne({ username: req.body.email }, function (err, accountRelative) {
            try {
                if (accountRelative.password == req.body.password) {
                    return res.json({
                        accountRelative
                    })

                }
                res.json({
                    check: "false"
                })
            } catch (err) {

                res.json({
                    check: "false"
                })
            }



        })
    }


    async deleteAccount(req, res) {
        await account.findOneAndDelete({ username: req.params.id })
        try {
            res.status(204).json({
                status: 'Success',
                data: {},
            })
        } catch (err) {
            res.status(500).json({
                status: 'Failed',
                message: err
            })
        }
    }

    checkUsername(req, res) {
        console.log(req.params.id);
        account.findOne({ username: req.params.id }, function (err, accountRelative) {
            if (accountRelative == null) {
                return res.json(
                    { check: 'false' }
                )
            } else
                res.json(
                    { check: 'true' }
                )
        })
    }


    addAccount(req, res) {
        const dataAccount = new account(req.body)
        console.log(req.body);
        try {
            dataAccount.save()
            res.status(201).json({
                check: "Success",
                data: {
                    dataAccount
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }

    }

    async updateAccount(req, res) {
        const updateAcc = await account.findOneAndUpdate(
            { username: req.body.username }, req.body, {
            new: true
        }
        )
        try {
            res.status(200).json({
                status: 'Success',
                data: {
                    updateAcc
                }
            })
        } catch (error) {
            console.log(error)
        }
        console.log(req.body);
    }


    test(req, res) {
        console.log(req.params.id);
        account.find({ password: req.params.id }, function (err, accountRelative) {
            res.json(accountRelative)
        })
    }

    getDataAccount(req, res) {
        console.log(req.params.id);
        account.find({username: req.params.id }, function (err, accountRelative) {
            res.json(accountRelative)
        })
    }
}




module.exports = new Account