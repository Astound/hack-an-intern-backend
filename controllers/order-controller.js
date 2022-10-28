const { v4 } = require('uuid');

const orders=[

];

const transactions = [

];

const getAll = (req,res,next)=>{
    res
        .status(200)
        .json({
            orders : orders
        })
}

const getTransactions = (req,res,next)=>{
    res
        .status(200)
        .json({
            transactions : transactions
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
    const createdOrder = {
        orderId : v4(),
        userId,
        type,
        status,
        price,
        quantity
    }
    orders.push(createdOrder);
        res
        .status(200)
        .json({
            orders : orders,
            transactions : transactions
        })

}


exports.getAll = getAll;
exports.createOrder = createOrder;
exports.getTransactions = getTransactions;
exports.matchOrder = matchOrder;
