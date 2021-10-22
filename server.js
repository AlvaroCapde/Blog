const express =  require('express')

const app = express()
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout',__dirname+'/views/layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/',indexRouter);
//tailwind
app.use(express.static(__dirname))




app.listen(3000, () => {
    console.log("Vegan Place Blog app listening on port 3000")
})