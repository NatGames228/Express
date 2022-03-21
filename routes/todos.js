const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

let middle;
let text;
let library = [];

router.get('/', async (req, res) => {
  res.render('index', {
    title: 'middle list',
    isIndex: true,
    middle
  })
})

router.get('/1', (req, res) => {
  res.render('1', {
    title: 'Найти среднее число',
    isOne: true,
    middle
  })
})

router.post('/1', async (req, res) => {
  let a = +req.body.first;
  let b  = +req.body.second;
  let c  = +req.body.third;
  
  let mn, mx;
  if (a < b) mn = a; else mn = b;
  if (c < mn) mn = c;
  if (a > b) mx = a; else mx = b;
  if (c > mx) mx = c;

  middle = a + b + c - mn - mx;
  middle = middle.toString()
  res.redirect('/1')
})

router.get('/2', (req, res) => {
  res.render('2', {
    title: '2nd task',
    isTwo: true,
    text
  })
})

router.post('/2', async (req, res) => {
  text = req.body.text;
  text = text.replace(/ /g, '_');
  res.redirect('/2')
})

router.get('/3', (req, res) => {
  res.render('3', {
    title: '3rd task',
    isThree: true,
    library
  })
})

router.post('/3/create', async (req, res) => {
  let a = req.body.first;

  library.push({
    title: a
  })
  res.redirect('/3')
})

router.post('/3/del', async (req, res) => {
  let a = req.body.first;
  console.log(library.length)
})

module.exports = router
