const productRouter=express.Router();

//configurando servidor express
let app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser,urlencoded({extended:false}));

//configurando el servidor http
const server=require('http').Server(app);
const port=3002;

//ejecutando el servidor
server.listen(port);

productRouter.post("/",(req,res)=>{

});

productRouter.get("/",(req,res)=>{
    Product.find({}).then(products=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Consulta exitosa",
            detail:products
        });
    })
    .catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"Error",
            detail:error
        });
    });
    
});
/*
//get con parametro
productRouter.get("/:id",(req,res)=>{
const id= req.params.id;
Product.find({_id:id})
.then(product=>{
    res.status(200);
    res.json({
        code:200,
        msg:"Exito",
        detail:product
    });
})
.catch(error=>{
    res.status(400);
    res.json({
        code:400,
        msg:"Exito",
        detail:error
    })
})
});
*/

/*

//delete
productRouter.delete("/id",(req,res)={
    const {id}=req.params;
    Product.remove({_id:id})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"se elimino",
            detail:data
        })
        .catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg="Si se elimino",
                detail:error
            })
        })
    })
});
*/


var mongoose=require('mongoose');

module.exports = new mongoose.Schema({
name:{
  type: String,
  required: true
},
email:{
  type: String,
  required: true,
  match: /.+@.+\..+/,
  lowercase: true
},
loggedInCount:{
  type: Number,
  default: 0
}
});