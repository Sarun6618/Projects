const express = require('express');
const app = express();
const connectToDatabase = require('./controllers/DatabaseController');
const PORT = 4000; // Specify the desired port number
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectToDatabase()
  .then(() => {
    // Database connection is successful
    console.log('Database is connected');
    // You can start your server or perform other operations here
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Handle the error if the database connection fails
    console.error('Failed to connect to the database:', err);
  });

// Use the userRouter as middleware
const userRouter = require('./routers/newSignUp');
app.use('', userRouter);
const SelleraddRouter=require('./routers/newSellerDetails');
app.use('',SelleraddRouter);
