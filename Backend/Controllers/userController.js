const mssql = require('mssql')
const config = require('../Configuration/dbconfig')


//------------ CREATING A USER -----------------
async function createUser (req,res){
    const{user_id, user_name ,full_name , phone_number, email, password , isAdmin , isDeleted , isSent} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('user_id', mssql.Int, user_id)
        .input('user_name', mssql.VarChar, user_name)
        .input('full_name', mssql.VarChar, full_name)
        .input('phone_number', mssql.VarChar, phone_number)
        .input('email', mssql.VarChar, email)
        .input('password', mssql.VarChar, password)
        .input('isAdmin', mssql.Bit, isAdmin)
        .input('isDeleted', mssql.Bit, isDeleted)
        .input('isSent', mssql.Bit, isSent)
        .execute(`createUser `)
        res.json("User added successfully")

    } catch (err){
        console.log(err);
    }
}


//------------ DELETING A USER -----------------
async function deleteUser (req,res){
    const user_id = req.params.id
    try{
        let pool = await mssql.connect(config)
         await pool.request()
        .input('user_id',mssql.Int,user_id)
        .execute('deleteUser')
        res.json("User deleted successfully")

    } catch (err){
        console.log(err);
    }
}


//------------ GETTING A SPECIFIC USER -----------------
async function getAUser (req,res){
    const user_id = req.params.id
    try{
        let pool = await mssql.connect(config)
        let result = await pool.request()
        .input('user_id',mssql.Int,user_id)
        .execute('getAUser')
        res.json(result.recordset)
        // res.json("User found successfully")

    } catch (err){
        console.log(err);
    }
}


//------------ GETTING ALL USERS -----------------
async function getUsers (req,res){
    try{
        let pool = await mssql.connect(config)
        let result = await pool.request().execute('getUsers')
        res.json(result.recordset)
    
    } catch (err){
        console.log(err);
    }
}


//------------ UPDATING A SPECIFIC USER -----------------
async function updateUser (req,res){
    const{ user_name ,full_name , phone_number, email, password , isAdmin , isDeleted , isSent} = req.body
    const user_id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('user_id', mssql.Int, user_id)
        .input('user_name', mssql.VarChar, user_name)
        .input('full_name', mssql.VarChar, full_name)
        .input('phone_number', mssql.VarChar, phone_number)
        .input('email', mssql.VarChar, email)
        .input('password', mssql.VarChar, password)
        .input('isAdmin', mssql.Bit, isAdmin)
        .input('isDeleted', mssql.Bit, isDeleted)
        .input('isSent', mssql.Bit, isSent)
        .execute('updateUser')
        res.json("User updated successfully")

    } catch (err){
        console.log(err);
    }
}
//------------ EXPORTING THE FUNCTIONS-----------------
module.exports = {
    getUsers,
    getAUser,
    createUser,
    updateUser,
    deleteUser
}