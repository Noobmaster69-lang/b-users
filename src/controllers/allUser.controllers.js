const catchError = require('../utils/catchError');
const AllUsers = require('../models/AllUsers');

const getAll = catchError(async(req, res) => {
    const allUsers = await AllUsers.findAll();
    return res.json(allUsers);
});
 
const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday} = req.body; 
    const allUser = await AllUsers.create({ 
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
     });
     return res.status(201).json(allUser);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params; 
    const user = await AllUsers.findByPk(id);
    return res.json(user);
});

const remove = catchError (async(req, res) => {
    const { id } = req.params;
    await AllUsers.destroy({where : { id: id }});
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } =req.body;
    const allUser = await AllUsers.update(
        { first_name, last_name, email, password, birthday },
        { where: { id }, returning: true }
    );
      return res.json(allUser[1][0]);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}