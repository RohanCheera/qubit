const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    tech: {
      type: [String],
      required: false,
    },
    cover: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false, // Change this to true if link is required
    }
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = ProjectModel;
