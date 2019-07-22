const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/b', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/index.html'));
});
router.get('/b/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/signup.html'));
});
router.get('/b/notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/notice.html'));
});
router.get('/b/submit', function (req, res) {
    res.send('<br>first name : ' + req.query.firstname + '<br>surname : ' + req.query.surname + '<br>e-mail : ' + req.query.email + '<br>password : ' + req.query.pwd
       +'<br>password confirm : ' + req.query.pwdcf + '<br>phone : ' + req.query.tel + '<br>month : ' + req.query.month + '<br>date : ' + req.query.date + '<br>year : ' + req.query.year + '<br>gender : ' + req.query.gender + '<br>agree send mail : ' + req.query.agree)
});

/////////////////////park///////////////////////////
router.get('/p/intro', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/01_intro.html'));
});
router.get('/p/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/index.html'));
});
router.get('/p/sign_up', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/sign_up.html'));
});
router.get('/p/notice', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/notice.html'));
});
router.get('/p/write', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/write.html'));
});
//////////////////////////////////////////////////
// Byeolchan -->
router.get('/Byeolchan', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/main.html'));
});

router.get('/Byeolchan/logout', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/logout.html'));
});

router.get('/Byeolchan/notice_detail', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/notice_detail.html'));
});

router.get('/Byeolchan/sign_up', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/sign_up.html'));
});

router.get('/Byeolchan/notice', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/notice.html'));
});

router.get('/Byeolchan/sign_in', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/sign_in.html'));
});
// <--Byeolchan

router.get('/park/sign_up', function(req, res) {
  res.send(
      '<br>이름 : ' + req.query.name + '<br>이메일 : ' + req.query.email +
      '<br>비밀번호 : ' + req.query.password + '<br>비밀번호 확인 : ' +
      req.query.re_password + '<br>생일 : ' + req.query.birthday + "<p><a href=\"/p/index\">Go to Main Page</a></p>")
});
router.get('/park/notice_board', function(req, res) {
  res.send(
      '<br>제목 : ' + req.query.title + '<br>작성자 : ' + req.query.writer +
      '<br>내용 : ' + req.query.content + "<p><a href=\"/p/index\">Go to Main Page</a></p>")
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))