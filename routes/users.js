var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next){
  res.render('users', {'users':users, 'title':'Users'});
  });
  
  var User = function(fname, lname, phone) {
  this.FirstName = fname;
  this.LastName = lname;
  this.Phone = phone;
  };
  
  var users = [];
  
  router.init = function() {
  users.push(new User('Quay', 'Launza', '214-321-1111'));
  users.push(new User('Drake', 'Gram', '214-321=1112'));
  users.push(new User('RECE', 'Williams', '214-321-1113'));
  users.push(new User('TYTY', 'Dallas', '214-321-111'));
  users.push(new User('Jared', 'Lubbock', '202-AAA-2345'));
  users.push(new User('Pernell', 'Arlington', '202-AAA-2345'));
  users.push(new User('Nate', 'Colorado', '202-AAA-2345'));
  users.push(new User('Tonio', 'Ohio', '202-AAA-2345'));
  };
  
  router.init();
  module.exports = router;