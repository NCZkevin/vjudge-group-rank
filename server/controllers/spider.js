var cheerio = require('cheerio');
var request = require('superagent');
var mongoose = require('mongoose');

var groupUrl = 'https://vjudge.net/group/ncu';
var userUrl = 'https://vjudge.net/user/';

mongoose.connect('mongodb://127.0.0.1:27017/vjudge');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  nickName: String,
    day: Number,
    week: Number,
    month: Number,
    allSovled: Number,
    allAttempted: Number,
    create_date: {type: Date,default: Date.now}
})

var User = mongoose.model("User",userSchema);

request.get(groupUrl)
       .end(function(err,res) {
           if(err) console.log(err);
           var $ = cheerio.load(res.text);
           var user = JSON.parse($('textarea').text());
        //    console.log(user.memberBriefs);
           user.memberBriefs.forEach(function(element) {
            //    console.log(element.username);
            request.get(userUrl + element.username)
                .end(function(err,res) {
                    if(err) console.log(err);
                    // console.log(res);
                    var $ = cheerio.load(res.text);
                    var problems = [];
                    $('td a').each(function(i,elem) {
                        problems[i] = $(this).text();
                        // console.log(problems[i]);
                    });
                    User.create({
                        username: element.username,
                        nickName: element.nickName,         
                        day: problems[0],
                        week: problems[1],
                        month: problems[2],
                        allSovled: problems[3],
                        allAttempted: problems[4]
                    },function(err){
                        if(!err) {
                            console.log('saved');
                        } else {
                            console.log(err);
                        }
                    })
                });
           });
       });

// request.get(userUrl)
//        .end(function(err,res) {
//            var $ = cheerio.load(res.text);
//            var problems = [];
//         //    var num = $('td').text();
//         //    console.log(typeof(num));
//            $('td').each(function(i,elem) {
//                problems[i] = $(this).text();
//             //    console.log(problems[i]);
//            });
//         //    console.log(problems);
//        });