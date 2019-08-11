module.exports = (app) => {
    const student = require('.././controller/studentController');

    app.post('/create', student.create);
    app.get('/allStudents', student.findAll);
    app.get('/findstudent/:name', student.findstudent);
    app.post('/updatebyname', student.updateStudent);
    app.post('/deleteByName', student.deleteByName)
    app.get('/', (req, res) => {
        res.json({'message' : 'Welcome to qdesk assignment'});
    });

}