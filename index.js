const express = require('express')
const cors = require('cors');
const dbConncet = require('./Utils/dbConnect');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

const userRoutes = require('./Routes/v1/allUser.route.js');
const viewCount = require('./middleware/viewCount');


// middlewhare
app.use(cors())
app.use(express.json())

// app.use(viewCount)
// app.use(limiter)

app.use('user/all', userRoutes)


dbConncet()


async function run() {
    try {
        
    }

    finally {
    
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello From Assignment1  !')
})

app.all('*', (req, res) => {
    res.send('Response not ')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
