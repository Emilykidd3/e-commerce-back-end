const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// WORKS
router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    indlue: [Product],
  })
    .then((dbCategory) => {
      res.json(dbCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// WORKS
router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((dbCategory) => res.json(dbCategory))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// WORKS
router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body).then((dbCategory) => res.json(dbCategory));
});

// WORKS
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      where: {
        id: req.params.id,
      }
    }
  ).then(dbCategory => {
    if (!dbProduct) {
      res.status(400).json({ message: 'no product found with this id' })
      return;
    }
    res.json(dbCategory)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// WORKS
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    if (!dbProduct) {
      res.status(400).json({ message: 'no product found with this id' })
      return;
    }
    res.json(dbCategory)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
