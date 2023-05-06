const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./views/postList")
const postDetails = require("./views/postDetails")
const app = express();

app.use(express.static('public'))
app.use(morgan('dev'));

app.get("/", (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts))
})

app.get(`/posts/:id`, (req, res)=> {
  const post = postBank.find(req.params.id);
  res.send(postDetails(post))
}); 

app.use((err, req, res, next)=>{
  const id = req.params.id
  const post = postBank.find(id)
  console.error(err)
  res.send(404).send('Page Not Found')
})


const {PORT = 1337} = process.env 

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});