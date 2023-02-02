const exp = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const bcrypt = require("bcryptjs");
const app = exp();
const port = 5000;
const PRIVATE_KEY = fs.readFileSync("private-key.txt");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { async } = require("rxjs");
const { json } = require("stream/consumers");

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>Đây là trang home</h1>");
});
app.post("/login", async (req, res) => {
  const un = req.body.un;
  const pw = req.body.pw;
  const check = await checkUserPass(un, pw);
  if (check) {
    const userInfo = await getUserInfo(un);
    const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn: 120,
      subject: JSON.stringify({
        id: userInfo.id,
        admin: userInfo.admin,
      }),
    });
    // res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
    res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
  } else res.sendStatus(401); // send status 401 Unauthorized
});
app.post("/dangky", (req, res) => {
  const un = req.body.un;
  const pw = req.body.pw;
  if (checkUserPass(un, pw)) {
    const userInfo = getUserInfo(un);
    const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn: 120,
      subject: JSON.stringify({
        id: userInfo.id,
        admin: userInfo.admin,
      }),
    });
    //res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
    res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
  } else res.sendStatus(401); // send status 401 Unauthorized
});
checkUserPass = async (un, pw) => {
  const response = await fetch("http://localhost:3000/user");
  const body = await response.json();
  const user = body.find((u) => {
    if (u.un == un) {
      bcrypt.genSaltSync(10);
      var res = bcrypt.compareSync(pw, u.pw);
      return res;
    }
  });
  return user;
};
getUserInfo = async (username) => {
  const response = await fetch("http://localhost:3000/user");
  const body = await response.json();
  const user = body.find((u) => u.un == username);
  return user;
  // if (username == "aa") return { id: "1", hoten: "Nguyễn Văn Tèo" };
  // if (username == "bb") return { id: "2", hoten: "Nguyễn Thị Lượm" };
  // return { id: "-1", hoten: "" };
};

app.listen(port, () => {
  console.log(`Ung dung dang chay voi port ${port}`);
});
