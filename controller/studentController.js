const Student = require('../models/student');

exports.create = (req, res) => {
    console.log((req.body));
    if(!req.body.name){
        return res.status(400).send({
            message: "Name Can't be empty."
        });
    }

    const student = new Student({
        name: req.body.name,
        contact: req.body.contact,
        class: req.body.class
    });

    student.save().then( data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Some error occurred while creating the Student record."
        });
    });

}

exports.findAll = (req, res) => {
    Student.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Internal server error"
        });
    });
}

exports.findstudent = (req, res) => {
    Student.find({name : req.params.name})
    .then(data => {
        if(!data.length) {
            return res.status(404).send({
                message: " No student with name" + req.params.name + " found"
            });            
        }
        res.send(data);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving student "
        });
    });
};

exports.updateStudent = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Name can't be emplty."
        });
    }
    if(!req.body.newname) {
        return res.status(400).send({
            message: "Please provide newname to update."
        });
    }

    Student.findOneAndUpdate({name: req.body.name}, {name: req.body.newname}, {new: true}).then( data => {
        if(!data) {
            return res.status(404).send({
                message: "No data to update found"
            });
        }
        res.send(data);
    });
}

exports.deleteByName = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Name can't be emplty."
        });
    }
    Student.findOneAndDelete({name: req.body.name})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "No student found"
            });
        }
        res.send({message: "Student deleted successfully!"});
    }).catch(err => {
        return res.status(500).send({
            message: "Could not delete student "
        });
    });
};
