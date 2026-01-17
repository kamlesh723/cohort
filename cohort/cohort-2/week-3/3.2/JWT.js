const jwt = require("jsonwebtoken")

//decode, verify, geneerate

const value= {
    name:"kamlesh",
    accountnumber:1234123
}

//jwt
const token = jwt.sign(value,"secret");
console.log(token);

//this token is generated using this secret key, , and hence this token can only be verifed using this secret
//this is your checkbook
const verifyValue= jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2FtbGVzaCIsImFjY291bnRudW1iZXIiOjEyMzQxMjMsImlhdCI6MTc2NTY0NzAyNn0.NvJaLcVzv7y02xMphESsMCm71pcfuwZgyGhqs2XjK3I","secret")
console.log(verifyValue);