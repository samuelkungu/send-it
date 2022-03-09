const mssql = require('mssql')
const config = require('../Configuration/dbconfig')
const { v4: uuidv4 } = require('uuid');

//------------ CREATING A NEW PARCEL -----------------
async function createParcel (req,res){
    const{  id, description ,sender_number , receiver_number, 
            start_location, end_location, current_location, sender_id } = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id',uuidv4())
        .input('description', mssql.VarChar, description)
        .input('sender_number', mssql.VarChar, sender_number)
        .input('receiver_number', mssql.VarChar, receiver_number)
        .input('start_location', mssql.VarChar, start_location)
        .input('end_location', mssql.VarChar, end_location)
        .input('current_location', mssql.VarChar, current_location)
        .input('sender_id', mssql.VarChar, sender_id)
        .execute(`createParcel `)
        res.json("Parcel Added Successfully")

    } catch (err){
        console.log(err);
    }
}


//------------ DELETING ( A SPECIFIC ) PARCEL'S DETAILS -----------------
async function deleteParcel (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
         await pool.request()
        .input('id',mssql.VarChar, id)
        .execute('deleteParcel')
        res.json("Parcel Deleted Successfully")

    } catch (err){
        console.log(err);
    }
}


//------------ GETTING ( A SPECIFIC ) PARCEL'S DETAILS-----------------
async function getAParcel (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        let result = await pool.request()
        .input('id',mssql.VarChar, id)
        .execute('getAParcel')
        res.json(result.recordset)

    } catch (err){
        console.log(err);
    }
}


//------------ GETTING ALL PARCELS' DETAILS-----------------
async function getParcels (req,res){
    try{
        let pool = await mssql.connect(config)
        let result = await pool.request().execute('getParcels')
        res.json(result.recordset)
    
    } catch (err){
        console.log(err);
    }
}


//------------ UPDATING ( A SPECIFIC ) PARCEL'S DETAILS-----------------
async function updateParcel (req,res){
    const{  description ,sender_number , receiver_number, 
            start_location, end_location, current_location ,sender_id } = req.body 
   const id = req.params.id

    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', mssql.VarChar, id)
        .input('description', mssql.VarChar, description)
        .input('sender_number', mssql.VarChar, sender_number)
        .input('receiver_number', mssql.VarChar, receiver_number)
        .input('start_location', mssql.VarChar, start_location)
        .input('end_location', mssql.VarChar, end_location)
        .input('current_location', mssql.VarChar, current_location)
        .input('sender_id', mssql.VarChar, sender_id)
        .execute('updateParcel')
        res.json("Parcel Updated Successfully")

    } catch (err){
        console.log(err);
    }
}
//------------ EXPORTING THE FUNCTIONS-----------------
module.exports = {
    getParcels,
    getAParcel,
    createParcel,
    updateParcel,
    deleteParcel
}