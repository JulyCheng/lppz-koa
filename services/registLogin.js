const db = require('./Db');

class registLogin{
    async add(users){
        let id=0;
        await db.exec('insert into lppz set ?', users)
            .then(rows => {
                id = rows.insertId;
            })
            .catch(e => {
                console.log(e);
            })
        return id;
    }
    async validate(users){
        let data=[];
        await db.exec('select phone from lppz where phone = ? and pwd = ?',[users.phone,users.pwd])
            .then(rows => {
                console.log(rows[0]);
                data=rows.map(item=>{
                    let op={};
                    Object.assign(op,item);
                    console.log(op);
                    return op;
                })
            })
            .catch(e => {
                console.log(e);
            })
            return data[0];
    }
    async vali(num){
        let con=true;
        await db.exec('select * from lppz where phone = ? ',num)
            .then(rows=>{
                console.log(rows[0]);
                //con=true时，说明这个新手机号是可以注册的；为false时，说明该手机号已被注册过了
                if(rows[0]){
                    con=false;  
                }else{
                    con=true;
                }
            })
            .catch(e=>{
                console.log(e);
            })
        return con;
    }
}
module.exports=new registLogin();