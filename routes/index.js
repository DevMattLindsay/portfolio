const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  let opt = {

  };
  res.render('index', opt);
});

router.post('/send', function(req, res, next) {
  let opt = {
    email : {}
  };

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "MatthewLindsay95@outlook.com",
      pass: "KiloWatt!Whale"
    },
  });

  let options = {
    from: "MatthewLindsay95@outlook.com",
    to: "MatthewLindsay2@gmail.com",
    subject: `${req.body.subject} (portfolio contact form)`,
    html:
    `<p><strong>Name: </strong>${req.body.name}</p>` +
    `<p><strong>E-Mail: </strong>${req.body.email}</p>` +
    `<p>${req.body.message}</p>`
  };

  transporter.sendMail(options, function(err, info) {
    if (err) {
      console.log(err);
      opt.email.success = false;
    } else {
      console.log(info.response);
      opt.email.success = true;
    }
  });
  console.log(opt)
  res.render('index', opt);
});

module.exports = router;
