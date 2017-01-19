import 'babel-polyfill'
import User from '../models/city'
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

// GET /api/city
router.get('/', async(ctx) =>
  ctx.body = await User.find())

// POST /api/city
router.post('/', async(ctx) => {
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
    // const city = await new User(ctx.request.body).save()
    // ctx.body = city
  } catch (err) {
    ctx.throw(422)
  }
})

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

// router.delete('/:id', async(ctx) => {
//   try {
//     const city = await City.findByIdAndRemove(ctx.params.id)
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
