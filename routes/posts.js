import express from "express";
import {readUserPost, readFeedPost, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, readFeedPost);
router.get("/:userId/posts", verifyToken, readUserPost);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;