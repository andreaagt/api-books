import Sequelize from 'sequelize'
import Model from '../../database/models/index.js'

const addBook = async (req, res) => {
  try {
    //const book = req.params.CategoryID;
    
    const createBook = await models.books.create({
      Title: req.body.Title,
      Author: req.body.Author,
      ReleaseDate: req.body.name,
      Editorial: req.body.description,
      Category: req.body.Category,
      Campus: req.body.Campus,
    })

    return res.status(201).send(createBook);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export {
    addBook
};
