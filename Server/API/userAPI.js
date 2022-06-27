const { ObjectId } = require("mongodb");
const mongoClient = require("../dal/mongoDB");
const userCollection = mongoClient.db("FInalExamTry").collection("User");

const create = async (data) => {
  const user = { name: data.name, email: data.email, age: data.age };
  const result = await userCollection.insertOne(user);
  return result.insertedId;
};

const get = async () => {
  const result = await userCollection.find({}).toArray();
  return result;
};

const getById = async (id) => {
  const result = await userCollection.findOne({ _id: ObjectId(id) });
  return result;
};

const update = async (id, data) => {
  const newValue = {
    $set: { name: data.name, email: data.email, age: data.age },
  };
  const result = await userCollection.updateOne(
    { _id: ObjectId(id) },
    newValue
  );
  return result;
};
const deleteUser = async (id) => {
  const result = await userCollection.deleteOne({ _id: ObjectId(id) });
  return result;
};

module.exports = { create, get, getById, update, deleteUser };
