const mongoose = require("mongoose");

const connect = async () => {
  try {
    const URL_Connect = await mongoose.connect(process.env.CONNECTION);
    console.log(
      "Databse connected",
      URL_Connect.connection.host,
      URL_Connect.connection.name
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
