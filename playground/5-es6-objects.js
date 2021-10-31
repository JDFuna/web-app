

const name = "Judy"
const userAge = 23

const user = {
    name,
    age:userAge,
    location: 'Philadeplhia'
}

console.log(user)



const product = {
    label : 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}


const transaction = (type, {label, stock}) =>{
    console.log(type, label, stock)
}

transaction('order', product)