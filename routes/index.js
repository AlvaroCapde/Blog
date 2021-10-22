const express =  require('express')
const router = express.Router()

let postList = [{
    steakName : 'Arrachera',
    author: 'vegan pro',
    photoURL: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    description: '',
    content:''
},{
    steakName : 'Arrachera',
    author: 'vegan pro',
    photoURL: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    description: '',
    content:''
},{
    steakName : 'Arrachera',
    author: 'vegan pro',
    photoURL: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    description: '',
    content:''
},{
    steakName : 'Arrachera',
    author: 'vegan pro',
    photoURL: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    description: '',
    content:''
}]
router.get('/',(req,res)=> {
    res.render('index')
})
router.get('/postList',(req,res)=> {
    res.render('postList',{postList : postList})
})
router.get('/post',(req,res)=> {
    res.render('post',{postContent : postList[0]})
})

module.exports = router