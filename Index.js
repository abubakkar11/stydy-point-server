const express = require('express')
const app = express()
const port = 5000

const courses = require('./data/courses/courses.json');
const courseDetails = require('./data/course-details/course-details.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
  res.send(courses)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})