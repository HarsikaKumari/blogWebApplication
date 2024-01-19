import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/post", (req, res) => {
  const postTitle = req.body.title;

  app.writeFile("tittle.txt", postTitle, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});
