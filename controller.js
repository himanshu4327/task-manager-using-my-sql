const db = require('./db')
const Createtask = (req, res) => {
    // if (!req.body.taskDetails) { return res.status(400).send({ message: "please enter task details" }); }
    var requestbody = req.body;
    db.query("INSERT INTO tasks SET ? ", requestbody,
        function (error, results, fields) {
            if (error) throw error; return res.send({
                data: results,
                message: 'task is created successfully'
            });
        });
};

const findAlltask = (req, res) => {
    db.query('select * from tasks',
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};


const findSingletask = (req, res) => {

    db.query('select * from tasks where Id=?',
        [req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};


const updateTask = (req, res) => {

    if (!req.body.taskDetails) {
        return res.status(400).send({
            message: "Please Enter data to update"
        });
    }
    console.log(req.params.id);
    console.log(req.body.taskDetails);
    db.query('UPDATE `tasks` SET `name`=?,`taskDetails`=? where `id`=?',
        [req.body.name,req.body.taskDetails,req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};


const deleteTask = (req, res) => {
    console.log(req.body);
    db.query('DELETE FROM `tasks` WHERE `Id`=?',
        [req.body.id], function (error, results, fields) {
            if (error) throw error;
            res.end('task has deleted!');
        });
};


module.exports = { Createtask, findAlltask, findSingletask, updateTask, deleteTask }