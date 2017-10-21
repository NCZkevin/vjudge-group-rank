import 'babel-polyfill'
import User from '../models/user'
import Router from 'koa-router'
import { baseApi,groupUrl } from '../config'

const router = new Router();


/* eslint-disable no-unused-vars, no-param-reassign, new-cap */

// router.get('/',async(ctx) => 
//     ctx.body = await User.find())

//GET /api/user/daily 每日题目
router.get('/', async(ctx) => 
  ctx.body = await User.find().sort('-day').select('username nickName day').exec(function(err,res){
    if(err) console.log(err)
  }));

export default router
