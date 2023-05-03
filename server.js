let express=require('express')
let ejs=require('ejs')
let mongoose=require('mongoose')
let body_parser=require('body-parser')
let app=express();


app.use(express.urlencoded({extended:true}))
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.set('view engine','ejs')
app.set('views','views')

let webroute=require('./route/web')
app.use(webroute)
let port=1234;

let dbCon="mongodb+srv://Arka:rkAozOH726ywp06F@cluster0.zjvh01u.mongodb.net/cardApplication"
mongoose.connect(dbCon,({useNewUrlParser:true,useUnifiedTopology:true})).then(result=>{
    app.listen(port,()=>{
        console.log("server connected");
    })
}).catch(err=>{
    console.log(err);
})


