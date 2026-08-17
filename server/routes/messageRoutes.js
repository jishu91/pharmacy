import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ message: "Hello World from the MERN backend!" });
});

export default router;