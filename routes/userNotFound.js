const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('userNotFound',{
        title: 'Неверное имя пользователя',
    });
    console.log(req.body)
});

module.exports = router;