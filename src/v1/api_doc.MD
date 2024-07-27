1. Verify user by mobile number

API : http://localhost:3000/auth/v1/login/9866021291
Request Type : POST
Results : User_id if success, USER_NOT_FOUND if invalid user, DB_ERROR or Internal error if error

2. Verify user's password

API : http://localhost:3000/auth/v1/verify
Request type : POST
Content-Type: application/json
body 

{
    "mobileNumber" : number,
    "password" : password
}

3. 