import 'babel-polyfill'
import User from '../models/user'
import Router from 'koa-router'
import { baseApi,groupUrl } from '../config'
import cheerio from  'cheerio'
import request from 'superagent'

const api = 'user'

const router = new Router();

router.prefix(`/${baseApi}/${api}`)

/* eslint-disable no-unused-vars, no-param-reassign, new-cap */

// router.get('/',async(ctx) => 
//     ctx.body = await User.find())

//GET /api/user/daily 每日题目
router.get('/daily', async(ctx) => 
  ctx.body = await User.find().sort('-day').select('username nickName day').exec(function(err,res){
    if(err) console.log(err)
  }));

//GET /api/user/week 每周题目
router.get('/week', async(ctx) => 
  ctx.body = await User.find().sort('-week').select('username nickName week').exec(function(err,res){
    if(err) console.log(err)
  }));

//GET /api/user/month 每月题目
router.get('/month', async(ctx) => 
  ctx.body = await User.find().sort('-month').select('username nickName month').exec(function(err,res){
    if(err) console.log(err)
  }));

//GET /api/user/allSovled 所有题目
router.get('/allSovled', async(ctx) => 
  ctx.body = await User.find().sort('-allSovled').select('username nickName allSovled').exec(function(err,res){
    if(err) console.log(err)
  }));

//GET /api/content 所有比赛
router.get('/content', async(ctx) => 
  ctx.body = await User.find().sort('-allSovled').select('username nickName allSovled').exec(function(err,res){
    if(err) console.log(err)
  }));

// GET /api/city
// router.get('/', async(ctx) =>
//   ctx.body = await User.find())

// POST /api/city
// router.post('/', async(ctx) => {
//   try {
//     request.get(groupUrl)
//     .end(function(err,res) {
//         if(err) console.log(err);
//         var $ = cheerio.load(res.text);
//         var user = JSON.parse($('textarea').text());
//         user.memberBriefs.forEach(function(element) {
//             console.log(element.username);
//             var member = {
//                 username: element.username,
//                 nickName: element.nickName,
//             }
//             const user =  new User(member).save();
//         });
//     });
//     const city = await new User(ctx.request.body).save()
//     ctx.body = city
//   } catch (err) {
//     ctx.throw(422)
//   }
// })

// router.get('/:id', async(ctx) => {
//   try {
//     const city = await City.findById(ctx.params.id)
//     if (!city) {
//       ctx.throw(404)
//     }
//     ctx.body = city
//   } catch (err) {
//     if (err.name === 'CastError' || err.name === 'NotFoundError') {
//       ctx.throw(404)
//     }
//     ctx.throw(500)
//   }
// })

// router.put('/:id', async(ctx) => {
//   try {
//     const city = await City.findByIdAndUpdate(ctx.params.id, ctx.request.body)
//     if (!city) {
//       ctx.throw(404)
//     }
//     ctx.body = city
//   } catch (err) {
//     if (err.name === 'CastError' || err.name === 'NotFoundError') {
//       ctx.throw(404)
//     }
//     ctx.throw(500)
//   }
// })


/* eslint-enable no-unused-vars, no-param-reassign, new-cap */

export default router
