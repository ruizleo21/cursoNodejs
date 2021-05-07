const { Router } = require('express');
const {
    getUsers,
    putUsers,
    postUsers,
    patchUsers,
    deleteUsers
} = require('../controllers/user.controller');

const router = new Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.post('/', postUsers);

router.delete('/', deleteUsers);

router.patch('/', patchUsers);


module.exports = router;