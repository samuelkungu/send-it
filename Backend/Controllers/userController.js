const mssql = require('mssql')
const config = require('../Configuration/dbconfig')
const { v4: uuidv4 } = require('uuid');
const { validation } = require ("../Helpers/validation.js")
const bcrypt = require('bcrypt');

//-------------------- CREATING A NEW USER -------------------------------
            async function createUser (req,res){
                const{ user_name ,full_name , phone_number, email, password } = req.body;

            //------------ HASHING PASSWORDS WITH BCRYPT ------------------
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);


            //------------ VALIDATING THE USER ENTRIES --------------------
                const { error } = validation(req.body)
                if (error) {
                    return res
                                .status(400)
                                .send({ success: false, message: error.details[0].message })
                }

                try{
                    let pool = await mssql.connect(config)
                    await pool.request()
                    .input('id',uuidv4())
                    .input('user_name', mssql.VarChar, user_name)
                    .input('full_name', mssql.VarChar, full_name)
                    .input('phone_number', mssql.VarChar, phone_number)
                    .input('email', mssql.VarChar, email)
                    .input('password', mssql.VarChar, hashedPassword)
                    .execute(`createUser `)
                    res.json("User Added Successfully")

                } catch (err){
                    console.log(err);
                }
            }

//------------------------------- LOGIN USER ----------------------------
                async function createUser (req,res){
                    const{ user_name , password } = req.body;


                //--------------- VALIDATING THE USER ENTRIES ------------
                const { error } = validation(req.body)

                if (error) {
                    return res
                                .status(400)
                                .send({ success: false, message: error.details[0].message })
                }

                try{
                    let pool = await mssql.connect(config)
                    let { recordset } = await pool.request()
                    .input('user_name', mssql.VarChar, user_name)
                    .input('password', mssql.VarChar, password)
                    const user = recordset[0]

                    if (!user) res
                                    .status(400)
                                    .send({ Message: 'User Does Not Exist!' })

                    const validPassword = await bcrypt.compare(hashedPassword, password)
                    if(!validPassword) return res.send('Invalid Credentials')
                    

                } catch (err){
                    console.log(err);
                }
            }



//------------------- DELETING ( A SPECIFIC ) USER'S DETAILS -----------------

                    async function deleteUser (req,res){
                        const id = req.params.id
                        try{
                            let pool = await mssql.connect(config)
                            await pool.request()
                            .input('id',mssql.VarChar, id)
                            .execute('deleteUser')
                            res.json("User Deleted Successfully")

                        } catch (err){
                            console.log(err);
                        }
                    }


//--------------------- GETTING ( A SPECIFIC ) USER'S DETAILS ---------------------

                        async function getAUser (req,res){
                            const id = req.params.id
                            try{
                                let pool = await mssql.connect(config)
                                let result = await pool.request()
                                .input('id',mssql.VarChar,id)
                                .execute('getAUser')
                                res.json(result.recordset)

                            } catch (err){
                                console.log(err);
                            }
                        }


//------------------------- GETTING ALL USERS' DETAILS ---------------------

                    async function getUsers (req,res){
                        try{
                            let pool = await mssql.connect(config)
                            let result = await pool.request().execute('getUsers')
                            res.json(result.recordset)
                        
                        } catch (err){
                            console.log(err);
                        }
                    }


//------------------ UPDATING ( A SPECIFIC ) USER'S DETAILS --------------------

                async function updateUser (req,res){
                    const{ user_name ,full_name , phone_number, email, password } = req.body
                    const id = req.params.id
                    try{
                        let pool = await mssql.connect(config)
                        await pool.request()
                        .input('id', mssql.VarChar, id)
                        .input('user_name', mssql.VarChar, user_name)
                        .input('full_name', mssql.VarChar, full_name)
                        .input('phone_number', mssql.VarChar, phone_number)
                        .input('email', mssql.VarChar, email)
                        .input('password', mssql.VarChar, password)
                        .execute('updateUser')
                        res.json("User Updated Successfully")

                    } catch (err){
                        console.log(err);
                    }
                }
//---------------------- EXPORTING THE FUNCTIONS -----------------

                module.exports = {
                    getUsers,
                    getAUser,
                    createUser,
                    updateUser,
                    deleteUser
                }