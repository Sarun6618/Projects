const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbURI = 'mongodb://127.0.0.1:27017/PurchaseOrder';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // console.log('Database is connected');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
};

module.exports = connectToDatabase;
