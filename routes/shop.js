const router = require('koa-router')();
const shopping = require('../services/Shop');

router.prefix('/shop')

router.post('/add', async function (ctx, next) {
    ctx.set("Access-Control-Allow-Origin", "*");
    console.log(ctx);
    let shop = JSON.parse(ctx.request.body);
    let data = await shopping.add(shop);
    ctx.body={
        data
    }
})

router.get('/show', async function (ctx, next) {
    ctx.set("Access-Control-Allow-Origin", "*");
    let pid=ctx.query.pid;
    let detail = await shopping.showDetailByPid(pid); 
    ctx.body={
        detail
    }
});
module.exports = router
