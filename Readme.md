## Routes & Endpoints 
Server >> Storing certain book data 
       >> User Register 
       >> Subscriber 

# This is a book record management API Server / Backend for the library system or management of records or manuals or books 

# With Put and Patch you can do minimum Updations 

Fine System :-
User :-  06/03/2023  -  06/06/2023
07/06/2023 => 1 day fine - rs 50 * 3  = 150 /-

## /books/issued/withFine
GET : Get all issued books with their fine 

# / users 
POST : create a new User 
GET : Get all list of users 


# / users / {id}
GET : Get a user by their ID 
PUT : Update a user by their ID 
DELETE : Delete a user by ID { ( Check if he/she still has an issued book) && (Check if there is any fine to be collected) }


## /Books 
GET : Get all books 
POST : Create/Add a new book 


## /books/{id} 
GET : GET a book by its ID
PUT : Update a book by Id 

## /books / issued 
GET : Get all issued Books 


# Subscription Types :
Basic (3 months)
Standard (6 months)
Premium (12 months)

If the subscription type is standard && if the subscription date is 06/03/2023 => then subscription valid till 06/09/2023

Within subscription date >> if we miss the renewal >> 50/- day 
subscription date is also been missded >> and also missed the renewal >> 100 + 50/- day

>> book1
>> basic 
>> 06/03/2023 => subscription date 
>> 07/03/2023 => borrowed a book from library
>> book1 renewal date is a 21/03/2023
>> 23/03/2023 => we need to pay a fine of 50 * 2 = 100/-


>> book2
>> basic 
>> 06/03/2023 => subscription date 
>> 07/03/2023 => borrowed a book from library
>> book1 renewal date is a 21/03/2023
>> 23/06/2023 => we need to pay a fine of 100 + (no of day * 50)

missed by renewal date >> 50/-
missed by subscription date >> 100/-
missed by renewal && subscription date >> 150/-



## /users/subscription-details/ {id}
GET : Get user subscription details 
      >> Data of Subscription
      >> Valid till 
      >> Is there any fine 




## npm init 
## npm i nodemon --save-dev   :- It saves in Developers 

# npm run dev



npm i nodemon :- It will auto referesh and auto reload when you do any changes in the code you need to kill the server and all so use nodemon it will referesh the code automatically .



# Mongodb is a non relational database or nosql database 
# Mongodb data is saved internally in json . 
sequel  :- simple english query language .  father :- e f cord 
sql  :- structured query language . 
database :- collection of meaning data . 