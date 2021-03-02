const inquirer = require('inquirer');
const startQ = [{
    type: 'list',
    message: 'Would you like to [POST] an auction or [BID] on an auction? ',
    name: 'startChoice',
    choices: ['[POST]', '[BID]'],
}];
const bidQs = [{
        type: 'list',
        message: 'What auction would you like to place a bid on? ',
        name: 'item',
        choices: ['this', 'that']
            // items.name goes here
    },
    {
        type: 'input',
        message: 'How much would you like to bid? ',
        name: 'bid',
    },
];
const postQs = [{
        type: 'input',
        message: 'What is the item you would like to submit? ',
        name: 'itemName'
    },
    {
        type: 'input',
        message: 'What category would you like to place your auction in? ',
        name: 'category'
    },
    {
        type: 'input',
        message: 'What would you like your starting bid to be? ',
        name: 'startBid'
    }
];

function start() {
    return inquirer.prompt(startQ)
        .then((data) => {
            console.log(data);
            return data.startChoice
        })
};

function bid() {
    inquirer.prompt(bidQs)
        .then((data) => {
            console.log(data);
            main();
        })
};

function post(category) {
    inquirer.prompt(postQs)
        .then((data) => {
            var itemName = data.itemName;
            var category = data.category;
            var startBid = data.startBid;
            createItem(itemName, category, startBid);
            main();
        })
};
async function main() {
    var bidBuy = await start();
    if (bidBuy === "[POST]") {
        post();
    } else {
        bid();
    }
}
main();