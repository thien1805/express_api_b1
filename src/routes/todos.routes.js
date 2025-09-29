const express = require("express")
const router = express.Router()
const db = require("../data/todos.memory")


// GET /api/v1/todos
router.get("/", (req, res) => res.json(db.list()) );

//GET /api/v1/todos/:id
router.get("/:id", (req, res) => {
    const todo = db.get(Number(req.params.id));
    if (!todo) return res.status(404).end();
    res.json(todo);
});

// POST /api/v1/todos  { "title": "..." }
router.post("/", (req, res) => {
    const {title} = req.body || {};
    if (!title) return res.status(400).json({error: "Title is required"}).end();
    const created = db.create(title);
    res.status(201).json(created);
});

// PATCH /api/v1/todos/:id  { "title": "...", "done": true/false }
router.patch("/:id", (req, res) => {
    const updated = db.update(Number(req.params.id), req.body || {});
    if (!updated) return res.status(404).json({error: "Todo not found"});
    res.json(updated);
})

router.delete("/:id", (req, res) => {
    const ok = db.remove(Number(req.params.id));
    if (!ok) return res.status(404).json({error: "Todo not found"});
    res.status(204).end();
})

module.exports = router;