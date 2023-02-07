const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('userFound',{
        title: 'Верное имя пользователя',
        username: decodeURI(req.baseUrl.split('/')[2])
    });
});


module.exports = router; 