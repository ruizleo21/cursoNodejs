const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
    const { name, lastname } = req.query;
    res.json({
        msg: 'get API - controller',
        name,
        lastname
    });
};

const postUsers = (req, res = response) => {
    const { name, age } = req.body;
    res.json({
        msg: 'post API - controller',
        name,
        age
    });
};

const putUsers = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
    });
};

const patchUsers = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
};

const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
};

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
};