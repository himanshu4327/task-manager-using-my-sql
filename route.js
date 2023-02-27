const express  = require("express")
const router = express.Router()
const controller = require('./controller.js');


router.post('/task', controller.Createtask);
router.get('/tasks', controller.findAlltask); 
router.get('/task/:id', controller.findSingletask);
router.put('/task/:id', controller.updateTask);
router.delete('/task/:id', controller.deleteTask);

module.exports = router;