const express = require('express')
const app = express()

const RegisterRouter = require('./routes/registerRouter')
const productRouter = require('./routes/productRouter')
const productViewRouter = require('./routes/productViewRouter')
const loginRouter = require('./routes/loginRouter')
const cartRouter = require('./routes/cartRouter')
const admRouter = require('./routes/admRouter')
const orderRouter = require('./routes/orderRouter')


app.use(express.json())
// app.use(express.static('./public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: true }))

app.use('/register', RegisterRouter)
app.use('/product', productRouter)
app.use('/productView', productViewRouter)
app.use('/login', loginRouter)
app.use('/cart', cartRouter)
app.use('/admin', admRouter)
app.use('/order', orderRouter)



app.listen(5000, () => {
  console.log('server started at port 5000')
})