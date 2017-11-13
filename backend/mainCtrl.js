const app = require('.././index.js')
    , db = app.get('db');

  module.exports = {
    getRiders: (req, res) => {
      var db = app.get('db');
      db.getRiders((err, riders) => {
        if(!err) {
          return res.status(200).send(riders);
        } else {
          return err;
        }
      })
    },

    getCrew: (req, res) => {
      var db = app.get('db');
      db.getCrew((err, crew) => {
        if(!err) {
          return res.status(200).send(crew);
        } else {
          return err;
        }
      })
    }
  }
