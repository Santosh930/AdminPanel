//store the products array in localstorage as "products"

function myfunction(){
    window.location.href="./inventory.html";
}

document.getElementById("products").addEventListener("submit",main);
let data=JSON.parse(localStorage.getItem("products"))||[];
function main(){
    event.preventDefault();
    console.log("santosh");

    
let obj={
    type: document.getElementById("type").value,
    desc:  document.getElementById("desc").value,
    price:  document.getElementById("price").value,
    image:  document.getElementById("image").value
    }
    data.push(obj);
    console.log(data);
    localStorage.setItem("products",JSON.stringify(data));
    document.getElementById("type").value=null;
    document.getElementById("desc").value=null;
    document.getElementById("price").value=null;
    document.getElementById("image").value=null;



}
