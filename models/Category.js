const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CategorySchema = new Schema(
  {
    categoryTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Category", CategorySchema);
