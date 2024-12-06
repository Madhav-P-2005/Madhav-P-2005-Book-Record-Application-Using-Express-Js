const express = require("express");
const {users} = require("./data/users.json");

// importing routes 
const usersRouter = require("./routes/users")
const booksRouter = require("./routes/books")

const app = express();

const PORT = 8081;

app.use(express.json());

//Api 
app.use("/users" , usersRouter)
app.use("/users" , booksRouter)









// Route :- 

// If this in top then it will be taken superior . so We need to have generic conditions at the bottom where you need to have specific routes  at the top 
app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route doesn't  exist",
  });
});

// 500 :- Internal Server Error
 

app.get("/",(req, res) =>
{
    res.status(200).json({
  
        message : "Server is up and running :-) ",
        data : "hey",
    });
});



app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route doesn't  exist",
  });
});





app.listen(PORT , ()=>{
    console.log(`Server is running at port ${PORT}`)
})
