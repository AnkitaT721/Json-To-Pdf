const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  major: {
    type: String,
    required: true,
  },

  address: [
    {
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: Number,
        required: true,
      },
      address_1: {
        type: String,
        required: true,
      },
      address_2: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);