const Project=require( "../models/Project.js");

// Controller function to handle creating a new project
exports.createProject = async (req, res) => {
  try {
    const { title, desc, tech, cover,link } = req.body;
    const project = new Project({ title, desc, tech, cover,link });
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to handle fetching all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
