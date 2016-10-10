var jwt = require('jsonwebtoken');

module.exports = function(app, route){
    var users = [{name: 'n', email: 'e', password: 'p', phone: '1', DOB: 'd'}];

    app.post('/signup', function (req, res) {
        console.log(req.body);
        var profile = req.body;
        if (!profile.password || !profile.email) {
            console.log("You must send the password and the email");
            return res.send({
                auth: false,
                message: "You must send the password and the email"
            });
        }

        for(var i=0; i< users.length; i++){
            if (users[i].email == profile.email) {
                console.log("A user with that email already exists");
                return res.send({
                    auth: false,
                    message: "A user with that email already exists"
                });
            }
        }

        users.push(profile);
        var token = jwt.sign(profile, 'ODSecret');
        console.log('signup success');

        res.send({
            auth: true,
            id_token: token,
            message: 'success'
        });
    })

    app.post('/login', function (req, res) {
        console.log(req.body);
        var profile = req.body;
        if (!profile.password || !profile.email) {
            console.log("You must send the password and the email");
            return res.send({
                auth: false,
                message: "You must send the password and the email"
            });
        }

        for(var i=0; i< users.length; i++){
            if (users[i].email == profile.email && users[i].password == profile.password) {
                var token = jwt.sign(profile, 'ODSecret');
                return res.send({
                    auth: true,
                    users: users,
                    id_token: token,
                    message: 'success'
                });
            }
        }

        console.log("A user with that email does\'nt exists!");
        res.send({
            auth: false,
            message: 'A user with that email does\'nt exists!'
        })
    })

    app.post('/updateUser', function(req, res){
        console.log(req.body);
        var profile = req.body;
        if (!profile.email) {
            console.log("You must send the email");
            return res.send({
                auth: false,
                message: "You must send the email"
            });
        }

        for(var i=0; i< users.length; i++){
            if (users[i].email == profile.email) {
                var old = users[i];
                // users[i].name = profile.name;
                users.splice(i, 1);
                users.push(profile);
                console.log("A user with email "+profile.email+" is updated");
                return res.send({
                    auth: true,
                    users: users,
                    old: old,
                    message: "A user with email "+profile.email+" is updated"
                });
            }
        }

        res.send({
            auth: false,
            message: 'email '+ profile.email+ ' doesn\'t exist!!'
        });
    })

    app.post('/deleteUser', function(req, res){
        console.log(req.body);
        var profile = req.body;
        if (!profile.email) {
            console.log("You must send the email");
            return res.send({
                auth: false,
                message: "You must send the email"
            });
        }

        for(var i=0; i< users.length; i++){
            if (users[i].email == profile.email) {
                users.splice(i, 1);
                console.log("A user with email "+profile.email+" is deleted");
                return res.send({
                    auth: true,
                    users: users,
                    oldname: oldname,
                    message: "A user with email "+profile.email+" is deleted"
                });
            }
        }

        res.send({
            auth: false,
            message: 'email '+ profile.email+ ' doesn\'t exist!!'
        });
    })

    app.get('/getUserlist', function(req, res){
        console.log(req.body);
        res.send({
            auth: true,
            users: users
        });
    })
};