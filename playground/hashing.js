const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const password = "123abc!";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

const hashedPassword = "$2a$10$g8q3Ctx3Wc/3E/S9tHuTE.cOTkM.hed8LsWZkx9a8oSwmo6Rywry2";

bcrypt.compare("123!", hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: oner1234
// };

// var token = jwt.sign(data, "123abc");
// console.log(token);

// var decoded = jwt.verify(token, "123abc");
// console.log("decoded", decoded);