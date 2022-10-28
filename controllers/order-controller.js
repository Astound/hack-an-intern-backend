const { v4 } = require('uuid');

const orders=[

]

const getAll = (req,res,next)=>{
    res
        .status(200)
        .json({
            orders : orders
        })
}

const matchOrder= (price,quantity,type)=>{
    const filteredOrders= orders.filter((ord)=>{
        return ord.type !==type && ord.status==="ACTIVE"
    });
    filteredOrders.sort((a,b)=> a.price - b.price);
    console.log(filteredOrders);
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
            orders : orders
        })
    matchOrder(price,quantity,type);
}


exports.getAll = getAll;
exports.createOrder = createOrder;