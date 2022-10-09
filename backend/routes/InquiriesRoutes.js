const express = require("express");
const InquiriesRouter = express.Router();
const InquiriesController = require("../controllers/inquiriesController");

// Save Inquiries
InquiriesRouter.post("/inquiries/add", InquiriesController.save_Inquiries);

// GetAll Inquiries
InquiriesRouter.get("/inquiries/getAll", InquiriesController.getAll_Inquiries);

// Get Inquiries By ID
InquiriesRouter.get(
  "/inquiries/get/:id",
  InquiriesController.get_Inquiries_By_ID
);

// get Inquiries by name
InquiriesRouter.get(
  "/inquiries/get/name/:name",
  InquiriesController.getInquiryByName
);

// Update Inquiries
InquiriesRouter.put(
  "/inquiries/update/:id",
  InquiriesController.update_Inquiries
);

// Delete Inquiries
InquiriesRouter.delete(
  "/inquiries/delete/:id",
  InquiriesController.delete_Inquiries
);

module.exports = InquiriesRouter;
