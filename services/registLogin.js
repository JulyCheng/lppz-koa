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
                    Object.assign(op,row);
                    console.log(op);
                    return op;
                })
            })
            .catch(e => {
                console.log(e);
            })
            return data;
    }
}
module.exports=new registLogin();