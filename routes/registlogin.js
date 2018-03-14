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
router.get('/validate',async function(ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let num=ctx.query.phone;
    console.log(num);
    let confirm=await registLogin.vali(num);
    console.log(confirm);
    ctx.body={
       confirm
    }
})
router.post('/login',async function(ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let users=JSON.parse(ctx.request.body);
    console.log(users);
    let data=await registLogin.validate(users);
    if(data){
        ctx.body={
            "status":'ok',
            data
        }
    }else{
        ctx.body={
            "status":"wrong"
        }
    }
})
module.exports=router