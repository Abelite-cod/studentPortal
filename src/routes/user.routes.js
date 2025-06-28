const express = require('express');
const {newStudent, getAllStudents, getStudentByID, updateStudent, deleteStudent, getStudentCount} = require('../controller/user.controller');
const router = express.Router();

router.post('/register', newStudent);
router.get('/students/all', getAllStudents);
router.get('/student/:id', getStudentByID);
router.put('/students/update/:id', updateStudent);
router.delete('/students/delete/:id', deleteStudent);
router.get('/students/count', getStudentCount);

module.exports = router;


