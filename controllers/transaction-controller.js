const orders = require('./order-controller');
let transactions = [

];

const matchOrder=(req,res,next)=>{
    const {orderId,type} = req.body;
    let searchMap,price,quantity,userId;


    if(type ==="BUY"){
        searchMap = orders.buyOrders;
        console.log(searchMap.get(orderId));
    }
    else {
        searchMap = orders.sellOrders;
    }
    res.status(200)
    
}

exports.matchOrder= matchOrder

