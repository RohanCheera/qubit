const express = require('express');
const { createProject, getAllProjects }=require("../controllers/projectController.js");

const router = express.Router();

// Define routes
router.post("/", createProject);
router.get("/", getAllProjects);

module.exports=router;
