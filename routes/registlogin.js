const router=require('koa-router')();
const registLogin=require('../services/registLogin');
router.prefix('/users')

router.post('/regist',async function(ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let users=JSON.parse(ctx.request.body);
    console.log(users);
    let id=await registLogin.add(users);
    ctx.body={
       id
    }
})
router.post('/login',async function(ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let users=JSON.parse(ctx.request.body);
    console.log(users);
    let data=await registLogin.validate(users);
    ctx.body={
        "status":'ok',
        data
    }
})
module.exports=router