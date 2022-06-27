const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log("Sucessfullly Connect with MongoDB");
});

module.exports = client;
