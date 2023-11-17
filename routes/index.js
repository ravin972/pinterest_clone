var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/allusersposts", async function (req, res, next) {
  let user = await userModel
    .findOne({ _id: "6557b50cd3e6e5a8b559be88" })
    .populate("posts");
  res.send(user);
});

router.get("/createuser", async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "Ravin",
    password: "1234",
    posts: [],
    email: "user@example.com",
    fullName: "Ravinder Pandey",
  });
  res.send(createdUser);
});

router.get("/createpost", async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: "Hello from post",
    user: "6557b50cd3e6e5a8b559be88",
  });
  let user = await userModel.findOne({ _id: "6557b50cd3e6e5a8b559be88" });
  user.posts.push(createdPost._id);
  await user.save();
  res.send("Done!");
});

module.exports = router;
