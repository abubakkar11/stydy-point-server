const express = require('express')
const app = express()
const port = 5000;
const  cors = require('cors')

app.use(cors())
const courses = require('./data/courses/courses.json');
const courseDetails = require('./data/course-details/course-details.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/catagories', (req, res) => {
  res.send(courses)
})
app.get('/All-courses', (req, res) => {
  res.send(courseDetails)
})
app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const courseId = courseDetails.find(c => c.category_id === id)
  res.send(courseId)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseId = courseDetails.find(c => c._id === id)
   res.send(courseId)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})