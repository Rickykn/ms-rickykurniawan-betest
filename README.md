# ms-rickykurniawan-betest

# Setup project local

1. npm install
2. create .env for database mongodb local
3. npm start

# domain server

this app deploy with vercel
domain:
choose 1 of 3:
ms-rickykurniawan-betest-git-main-rickykn.vercel.app
ms-rickykurniawan-betest-rickykn.vercel.app
ms-rickykurniawan-betest.vercel.app

# Documentation api

endpoint:
/users (GET) (get all user)
Authorization: can get in endpoint get token

/user (POST)
Body Json:
{
"username":"Adit222",
"accountnumber":3723,
"emailaddress":"adit222@gmail.com",
"identitynumber":1231
}
Authorization: can get in endpoint get token

users/accountnumber/:accountnumber (GET) (get user by accountnumber)
Authorization: can get in endpoint get token

users/identitynumber/:identitynumber (GET) (get user by identitynumber)
Authorization: can get in endpoint get token

users/:id (DELETE) (Delete one user)
Authorization: can get in endpoint get token

users/token (GET) (GET TOKEN FOR AUTHORIZATION)

users/:id (PUT) (Update username user)
{
"username":"Deva"
}
Authorization: can get in endpoint get token
