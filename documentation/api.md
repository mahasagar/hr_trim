### API Document

## Add user
API : http://localhost:3000/api/user
METHOD : POST
```
{
  "name" : "sagar",
  "email" : "sagar2@gmail.com",
  "role" : "HR"
}
```
response :
```
{
"status": true,
"message": "Employee Added Successfully"
}
```
---

## Get Short URL Data
API : http://localhost:3000/api/shortUrl?shortId=SAGAR120673275426
METHOD : GET
```
{
  "shortId" : "SAGAR120673275426"
}
```
response :
```
{
    "status": true,
    "response": {
        "_id": "5d5baba4595acbac4048e560",
        "userId": "5d5baba4595acbac4048e55f",
        "shortId": "SAGAR120673275426",
        "viewName": "REGISTRATION",
        "email": "sagar2@gmail.com",
        "__v": 0,
        "createdDate": "2019-08-20T08:13:24.546Z"
    }
}
```
-------------------------------------------------------------------------------------

## Change Password
API : http://localhost:3000/api/changePassword
METHOD : PUT
```
{
  "userId" :"5d5baba4595acbac4048e55f",
  "password" : "welcome"
}
```
Response:
```
{
"status": true,
"message": "Password Changed Successfully"
}
```
-------------------------------------------------------------------------------------

## Login

API : http://localhost:3000/api/login
METHOD : POST
Response:
```
{
  "username" :"sagar2@gmail.com",
  "password" : "welcome"
}
```

```
{
    "status": true,
    "response": {
        "_id": "5d5bc7dd15e9c94e6ccd6e00",
        "name": "sagar",
        "email": "sagar2@gmail.com",
        "username": "sagar2@gmail.com",
        "createdDate": "2019-08-20T10:13:49.731Z",
        "socialPortal": [],
        "status": "ACTIVE",
        "roles": [
          "HR"
        ],
        "mobileNumber": [],
    }
}
```
---
