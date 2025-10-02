const db = require("../models");
const Sequelize = require("sequelize");
const Pnastat = db.pnastat;
const Op = db.Sequelize.Op;

// Retrieve all runs from the database.
exports.findAll = (req, res) => {
    //const title = req.query.title;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  console.log("findAll()");
    //Pnastat.findAll({ where: condition }) -upravit select
    //Pnastat.findAll({attributes: [[Sequelize.fn('COUNT', Sequelize.col('*')), 'id_count']]})
    Pnastat.findAll()
      .then(data => {
        res.send(data);
        //res.send({message: "funkce findAll()"});
        console.log('All data:', JSON.stringify(data, null, 2));
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single run with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
console.log("findOne() id= " + id);
    Pnastat.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};



/*
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
*/