const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
    
            response.send('')
       
})
app.post('/', (request, response) => {
    response.send('data Added')
})
app.put('/:id', (request, response) => {
    response.send('data Updated')
})



app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})