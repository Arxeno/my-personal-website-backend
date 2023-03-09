const CONFIG = {
  MONGODB_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
  MONGODB_DATABASE: process.env.MONGO_DATABASE || 'RaisyamDB',
  PORT: Number(process.env.PORT) || 6001,
};

export default CONFIG;
