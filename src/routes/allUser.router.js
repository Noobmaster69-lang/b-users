const { getAll, create, getOne, remove, update } = require('../controllers/allUser.controllers');
const express = require('express');

const allUserRouter = express.Router();

allUserRouter.route("/")
	.get(getAll)
        .post(create);

allUserRouter.route("/:id")
        .get(getOne)
        .delete(remove)
        .put(update);

module.exports = allUserRouter; 