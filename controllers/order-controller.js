const { v4 } = require('uuid');

let buyOrders=new Map();
let sellOrders=new Map();

let buyList = [];
let sellList = [];

const getAllBuy = (req,res,next)=>{
    res
        .status(200)
        .json({
            type : "BUY",
            orders : buyList
        })
}
const getAllSell = (req,res,next)=>{
    res
        .status(200)
        .json({
            type : "SELL",
            orders : sellList
        })
}

const getAll = (req,res,next)=>{
    res
        .status(200)
        .json({
            buyOrders : buyList,
            sellOrders : sellList
        })
}


const matchOrder= (req,res,next)=>{
    let {price,quantity,type,userId}= req.body;
    const filteredOrders= orders.filter((ord)=>{
        return ord.type !==type && ord.status==="ACTIVE"
    });
    let i=0;
    
    if(type === "BUY"){
        filteredOrders.sort((a,b)=> a.price - b.price);
    while(i<filteredOrders.length && quantity>0){
        if( filteredOrders[i].price <= price){
            
            quantity-= Math.min(quantity,filteredOrders.quantity);
            let t= {
                buyer : userId,
                seller : filteredOrders.userName,
                price : filteredOrders.price[i],
                quantity : filteredOrders.quantity
            };
            transactions.push(t);
        }
        i++;
        }
    }
    else {
        filteredOrders.sort((a,b)=> b.price-a.price);

        while(i<filteredOrders.length && quantity>0){
           if(filteredOrders[i].price >= price){
            quantity-= Math.min(quantity,filteredOrders.quantity);
            let t= {
                buyer : filteredOrders.userName,
                seller : user,
                price : filteredOrders.price[i],
                quantity : filteredOrders.quantity
            }
            transactions.push(t);
           }
           i++; 
        }
    }
    res
        .status(200)
        .json({
            transactions : transactions
        })
}

const createOrder = (req,res,next)=>{
    const {type,status,price,quantity,userId}  =req.body;
    let orderId;
    const createdOrder = {
        userId,
        type,
        status,
        price,
        quantity
    }
    if(type === "BUY") {
        orderId = v4();
        buyOrders.set(orderId,createdOrder);
        buyList.push({...createdOrder,orderId});
    }
    if(type === "SELL"){
        orderId= v4();
        sellOrders.set(orderId,createdOrder);
        sellList.push({...createdOrder,orderId});
    }
        res
        .status(200)
        .json({
            orderId : orderId
        })

}


exports.getAllBuy = getAllBuy;
exports.getAllSell = getAllSell;
exports.getAll = getAll;
exports.createOrder = createOrder;
exports.buyList = buyList;
exports.sellList = sellList;
exports.buyOrders = buyOrders;
exports.sellOrders = sellOrders;

