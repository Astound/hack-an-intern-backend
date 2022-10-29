let users = [
    {
        userId : 'a',
        userName : 'Suraj Gupta',
        stockCount : 0,
        fiat : 0,
    },
    {
        userId : 'b',
        userName : 'Anket Ranjan',
        stockCount : 0,
        fiat : 0,
    },
    {
        userId : 'c',
        userName : 'Aakash Neeraj',
        stockCount : 0,
        fiat : 0,
    },
    {
        userId : 'd',
        userName : 'Rushikesh',
        stockCount : 0,
        fiat : 0,
    },
    {
        userId : 'e',
        userName : 'Bharat Kabra',
        stockCount : 0,
        fiat : 0,
    },
]

const getAll = (req,res,next)=>{
    res
        .status(200)
        .json({users : users})

}
const getUser = (req,res,next)=>{
    const {userId} = req.body;
    const userData = users.find(user =>{
        return userId === user.userId
    })
    if(!userData){
        console.log('User not found');        
        return next();
    }
    res
        .status(201)
        .json({
            user : userData
        })
}
const updateUser = (req,res,next)=>{
    const {userId,stockCount,fiat} = req.body;
    for(let i=0;i<users.length;i++){
        if(users[i].userId === userId){       
            users[i]={
                ...users[i],
                stockCount : stockCount,
                fiat : fiat
            }
        }
    }
    res
        .status(201)
        .json({
            users : users
        })
}

exports.getAll = getAll;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.users = users;

