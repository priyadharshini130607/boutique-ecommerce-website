let cart=[];
let total=0;

function addToCart(name,price){

cart.push({
name:name,
price:price
});

total+=price;

document.getElementById("cart-count").innerText=cart.length;

showItems();

}

function showItems(){

let items="";

cart.forEach(item=>{
items+=`
<p>${item.name} - ₹${item.price}</p>
`;
});

document.getElementById("cart-items").innerHTML=items;

document.getElementById("total").innerText=total;

}

function openCart(){
document.getElementById("cart").classList.add("show");
}

function closeCart(){
document.getElementById("cart").classList.remove("show");
}

function showPayment(){
document.getElementById("payment").style.display="block";
window.scrollTo(0,document.body.scrollHeight);
}

function placeOrder(){

document.getElementById("payment").style.display="none";

document.getElementById("order").style.display="block";

cart=[];
total=0;

document.getElementById("cart-count").innerText=0;

}