require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./schema/schema')
const port = process.env.PORT || 5000;



//want to set graphiql to true when in development mode
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  }));




  const start = async () => {
    try {
   
     await connectDB(process.env.MONGO_URI)
     app.listen(port, () => {
       console.log(`Example app listening at http://localhost:${port}`)
     })
      
    } catch (error) {
      console.log(error)
      
    }
   }
   
   
   start() 


