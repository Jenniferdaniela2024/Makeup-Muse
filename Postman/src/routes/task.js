const express = require('express')
const router = express.Router()

const Task = require('../models/Task.js');

router.get('/', async (req, res) =>{
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', async (req, res) =>{
    let task = new Task(req.body);
    await task.save();
    console.log(task)
    res.json({
        status: 'Task Saved'
    })
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    res.json({
        status: 'Task Updated'
    })
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({
        status: 'Task Deleted'
    })
});




module.exports = router;