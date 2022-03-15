



<!-- ### Log In  <br/> -->
<!--  ![alt text](https://github.com/samuelkungu/send-it/blob/main/Frontend/public/images/login.png?raw=true) -->
<!-- ### Sign In  <br/> -->
<!--  ![alt text](https://github.com/samuelkungu/send-it/blob/main/Frontend/public/images/register.png?raw=true) -->
 
### SendIT is a courier service that helps users deliver parcels to different destinations. <br/>
SendIT provides courier quotes based on weight categories. <br/>
### Features of the application <br/>
1. Allow users to create an account and log in.  <br/>
2. Allow users to create a parcel delivery order.  <br/>
3. Allow users to change the destination of a parcel delivery order. <br/>
4. Allow users to cancel a parcel delivery order. <br/>
5. Allow users to see the details of a delivery order.  <br/>
6. Allow the admin to change the status and present location of a parcel delivery order.  <br/>
### Endpoints
1. GET /parcels - Fetch all parcel delivery orders <br/>  
2. GET /parcels/<parcelId> - Fetch a specific parcel delivery order<br/>
3. GET /users/<userId>/parcels - Fetch all parcel delivery orders by a
specific user <br/>
4. PUT /parcels/<parcelId>/cancel - Cancel the specific parcel delivery order <br/>
5. POST /parcels - Create a parcel delivery order<br/>
6. POST/user - Register user <br/>
7. POST/id - Login user <br/>
8. DELETE/id - Delete a specific user or parcel  <br/>
