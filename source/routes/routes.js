const express = require('express')
const router = express.Router()
const Detail = require('../models/user_model')

// Post request
router.post('/add',async (req,res)=>{
    const {name,email,rank} = req.body;
    //save in db
    const items = new Detail({name:name,email:email,rank:rank})
    await items.save()
    // if status is 200 , just send that..
    return res.status(200).json({
        user:{name,email,rank},
    })
});

// Get request
router.get('/',async (req,res)=>{
    try{
        const dataItem = await Detail.find({})
        res.status(200).json({
            data:dataItem
        })
    }
    catch(error){
        throw error;
    }
})

// Delete request
router.delete('/delete',async (req,res)=>{
        const filter = {name:req.body.name}  //using this field , we filter these datas..
        const dataItem = await Detail.deleteOne(filter).then((data)=>{
            res.json({
                data:data,
            })
        }).catch((err)=>{
            return res.send(err);
        })
})

// Update request..
router.put('/update',async (req,res)=>{
    const filter = {name:req.body.name}  //using this field , we filter these datas..
    const updatedData = {
        email : req.body.email,
        rank : req.body.rank
    }
    const dataItem = await Detail.updateOne(filter,updatedData).then((data)=>{
        res.json({
            data:data,
        })
    }).catch((err)=>{
        return res.send(err);
    })
})


module.exports = router;







// router.get("/",(req,res)=>{
//     res.json({
//         message : "Apii is running"
//     })
// })


// router.post("/",(req,res)=>{
//     // const data = req.body.name;
//     // console.log(data)
//     // res.json({
//     //     message : data
//     // })

//     // When we have 2 datas..do this below.

//     const {name,email} = req.body;
//     console.log(name+" "+email);
//     res.json({
//         // message:{name,email},  //message can be anything
//         user:{name,email},
//     })
// })

// router.get("/about",(req,res)=>{
//     res.json({
//         message : "Apii is running in about"
//     })
// })
