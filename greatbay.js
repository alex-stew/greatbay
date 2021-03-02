const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'KARNUSrise10',
    database: 'greatbay_db',
});

const createItem = (itemName, category, bid) => {
    console.log('Inserted new auction item...\n');
    const query = connection.query(
        'INSERT INTO greatbayItems SET ?', {
            name: itemName,
            category: category,
            bid: startBid
        }, (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} new auction item inserted.\n`);
        }
    )
}

const updateBid = (itemName, bid) => {
    console.log('Your bid has been accepted, updating...\n');
    const query = connection.query(
        'UPDATE greatbayItems SET ? WHERE ?', [{
                bid: bid,
            },
            {
                name: itemName,
            },
        ],
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} products updated!\n`);
            deleteProduct();
        }
    )
};

const readBid = () => {
    console.log('Selecting all greatbayItems...\n');
    connection.query('SELECT * FROM greatbayItems', (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    createItem();
});