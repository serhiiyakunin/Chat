const mysql = require("mysql2/promise");
const config = require("./config");
const { convData } = require("./utils");

const dbConnect = (user) => {
    
    async function checkRoom() {
        const connection = await mysql.createConnection(config);
        const findroom = await connection.execute(
            `SELECT EXISTS(SELECT room FROM chat WHERE room = '${user.room} room')`);
        const getdata = convData(findroom);
        connection.end();
        return getdata;
    }

    async function addRoom() {
        let foundroom = await checkRoom();
        const connection = await mysql.createConnection(config);
        if (foundroom == 0) {
            await connection.execute(
                `INSERT INTO chat(room,users,creators) VALUES('${user.room} room', '${user.name}', '${user.name}')`);
        }else {
           await connection.execute(
                `INSERT INTO chat(room,users) VALUES('${user.room} room', '${user.name}')`); 
        }
        connection.end();
    }
    addRoom();
}
module.exports = {dbConnect};

