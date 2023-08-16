const express = require('express');
const { addTTransection, getAllTransection, editTransection, deleteTransection } = require('../controllers/transectionCtrl');



//router object
const router = express.Router();



//router
//add transection POST method
router.post('/add-transection', addTTransection)

//Edit transection POST method
router.post('/edit-transection', editTransection)

//delete transection POST method
router.post('/delete-transection', deleteTransection)


//get transection
router.post('/get-transection', getAllTransection)


module.exports = router;