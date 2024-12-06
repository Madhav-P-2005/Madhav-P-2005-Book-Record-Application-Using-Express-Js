const express = require("express");
const {users} = require("../data/users.json")


// Creating a Router 
const router = express.Router();



// /users two time getting appended so http://localhost:8081/users/users so remove users 

router.get("/",(req ,res) =>{
    res.status(200).json({
       success : true,
       data : users
    })
})



/**  -> API  Plan Structure  examples :- postman or Insomania 
 
 * Route : /users
 * Method : GET
 * Description : Get all users 
 * Access : Public
 * Parameters : none  ex :- /users/para
 */


/**
 
 * Route : /users/:id
 * Method : GET
 * Description : Get user by their id 
 * Access : Public
 * Parameters : id
 
 */

router.get("/:id",(req,res) =>
{
  const {id} = req.params;   //parameters :- params 
  const user = users.find((each) => each.id == id)
  if(!user){
    return res.status(404).json({
      success : false,
      message : "User not found"
    })

  }
  return res.status(200).json({
    success : true,
    data : user
  })

})

/**
 
 * Route : /users
 * Method : Post
 * Description : Create a new user 
 * Access : Public
 * Parameters : None
 
 */


router.post('/', (req, res) =>{

  const {id , name ,surname, email, subscriptionType , subscriptionDate} = req.body;

  const user = users.find((each) => each.id == id);

  if(user){
    return res.status(404).json({
      success : false,
      message : "User exists with the given id"
    })
  }


  users.push({ id, name, surname, email, subscriptionType, subscriptionDate })
  return res.status(201).json({
    success : true,
    data : users 
  })

})



/**  -> PUT is used to update 
 
 * Route : /users
 * Method : GET
 * Description : Update a user by their Id 
 * Access : Public
 * Parameters : None
 
 */

router.put("/:id" , (req, res) =>{
  const {id} = req.params;
  const {data} = req.body;
  const user = users.find((each) => each.id == id)
  if(!user)
  {
    return res.status(404).json({
      success : false,
      message : "User not found for the given id "
    })
  }


  const updatedUser = users.map((each) =>{
    if(each.id==id)
    {
      // Spread Operator 
      return {
        ...each,
        ...data,
      }
    }

    return each;    // return the instance 
  })


  return res.status(200).json({
    success : true,
    data : updatedUser
  })
})


/**  -> How to work with Delete 
 
 * Route : /users/:id
 * Method : DELETE
 * Description : Deleting a user by their id 
 * Access : Public
 * Parameters : id
 
 */
router.delete("/:id" , (req, res) =>{
  const {id} = req.params;

  const user = users.find((each) => each.id == id);

  if(!user)
  {
    return res.status(404).json({
      success : false,
      message : "User not found for the given id to delete here"
    })
  }
 

  const index = users.indexOf(user);
  users.slice(index, 1);

  return res.status(200).json({
    success: true,
    data: user,
  })

})


module.exports = router