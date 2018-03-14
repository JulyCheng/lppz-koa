const db = require('./Db');

class Shop {
    async add(shop) {
        let id = 0;
        await db.exec('insert into shop set ?', shop)
            .then(rows => {
                id = rows.insertId;
            })
            .catch(e => {
                console.log(e);
            })
        return id;
    }
    async showDetailByPid(pid) {
        let msg={};
        await db.exec('select * from shop where pid=?',pid)
            .then(rows => {
                console.log(rows[0]);
                msg=rows[0];
            })
            .catch(e => {
                console.log(e)
            })
        return msg;
    }

}
module.exports = new Shop();