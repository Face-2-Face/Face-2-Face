const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Matches.fetchAll()
    .then(matches => {
      console.log('hey', matches)
      res.status(200).send(matches);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

module.exports.getUserMatches = (req, res) => {
  models.Matches.where({ user_id: req.params.id }).fetchAll()
    .then(matches => {
      console.log('hello from match fetch', matches)
      res.status(200).send(matches);
    })
    .catch(err => {
      res.status(503).send(err);
    });
}