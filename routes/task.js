const express = require('express')
const router = express.Router()
const {getAllTasks} = require('../controllers/task')


//  router.get('/',(req,res)=>{
//      res.send('all items');
//     }) 
 
//esta forma permite anidar
 router.route('/').get(getAllTasks)

module.exports = router