const express = require('express')
const router = express.Router();

const {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudents,loginStudent , getProfile }
 = require('../controllers/studentController');
 const {protect} = require(`../middleware/auth`);

router.post('/', createStudent)
router.post('/login', loginStudent)
router.get('/profile', protect, getProfile)
router.get('/', getAllStudents)
router.get('/:id', getStudentById)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudents)



module.exports = router;