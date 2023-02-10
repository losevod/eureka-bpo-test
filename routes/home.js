const {Router} = require('express');
const router = Router();
const os = require('os'); 
const EurekaBpoTest = require("../lib/binding.js");

router.get('/', (req, res) => {
    EurekaBpoTest();
    res.render('index',{
        title: 'Проверить пользователя',
    });
});


router.post('/', (req, res) => {
    let formData = req.body.visitor;
    if (os.userInfo().username === formData) {
        res.redirect(`/userFound/${formData}`)
    } else {
        res.redirect(`/userNotFound/${formData}`);
    }
    res.redirect('/userFound');
})


module.exports = router;