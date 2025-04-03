const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  exportTaskReports,
  exportUsersReports,
} = require("../controllers/reportController");

const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTaskReports);
router.get("/export/users", protect, adminOnly, exportUsersReports);

module.exports = router;
