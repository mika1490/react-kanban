const express = require(`express`);

const Card = require(`../db/models/Card`);

const router = express.Router();

router.route(`/`)
.post((req, res) => {
  let {title, priority, status, created_by, assigned_to} = req.body;

  return new Card({title, priority, status, created_by, assigned_to})
  .save()
  .then(cards => {
    cards = cards.toJSON()
    return res.json(cards)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
.get((req, res) => {
  return new Card()
  .fetchAll()
  .then(cards => {
    cards = cards.toJSON()
    console.log('CARDDSSS', cards)
    return res.json(cards);
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})

router.route(`/:id`)
.get((req, res) => {
  return new Card()
  .where({id: req.params.id})
  .fetch()
  .then(card => {
    card = card.toJSON();
    return res.json(card)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
.put((req, res) => {
  return new Card({id: req.params.id})
  .save(req.body, {patch: true})
  .then(card => {
    card = card.toJSON()
    return res.json(card)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
.delete((req, res) => {
  return new Card({id: req.params.id})
  .destroy()
  .then(card => {
    return res.json({message: 'Success'})
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})







module.exports = router;