import express from "express";
import {getPost, getUserPost, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, createPost);
router.get("/:userId/posts", verifyToken, getUserPost);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;