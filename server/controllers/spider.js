var cheerio = require('cheerio');
var request = require('superagent');


var groupUrl = 'https://vjudge.net/group/ncu';

request.get(groupUrl)
       .end(function(err,res) {
           if(err) console.log(err);
           var $ = cheerio.load(res.text);
           var user = JSON.parse($('textarea').text());
        //    console.log(user.memberBriefs);
           user.memberBriefs.forEach(function(element) {
               console.log(element.username);
           });
       });