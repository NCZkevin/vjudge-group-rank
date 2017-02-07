import User from '../models/user'
import { groupUrl, userUrl, connexionString} from './config'
import cheerio from cheerio
import superagent from superagent

// mongoose.connect(connexionString)

superagent
    .get(groupUrl)
    .end(function(err,res) {
        if(err) console.log(err);
        var $ = cheerio.load(res.text);
        var user = JSON.parse($('textarea').text());
    //    console.log(user.memberBriefs);
        user.memberBriefs.forEach(function(element) {
        //    console.log(element.username);
        superagent.get(userUrl + element.username)
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
                    problems: [{
                        day: problems[0],
                        week: problems[1],
                        month: problems[2],
                        allSovled: problems[3],
                        allAttempted: problems[4]
                    }]
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