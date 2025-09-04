import express from "express"
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controller/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin)
adminRouter.post("/comments",auth, getAllComments)
adminRouter.post("/blogs",auth, getAllBlogsAdmin)
adminRouter.post("/delete-comment",auth, deleteCommentById)
adminRouter.post("/approve-comment",auth, approveCommentById)
adminRouter.post("/dashboard",auth, getDashboard)


export default adminRouter