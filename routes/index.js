const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');


/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);
router.put('/:id', todosCtrl.update);

module.exports = router;