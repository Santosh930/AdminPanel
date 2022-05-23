function redirect(){
    window.location.href="./index.html"
}


let data=JSON.parse(localStorage.getItem("products"))||[];
console.log(data);

data.map(function(elem){
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.image;
    
    let h1=document.createElement("h1");
    h1.innerText=elem.type;
    let h2=document.createElement("h2");
    h2.innerText=elem.desc;
    let h3=document.createElement("h3");
    h3.innerText=elem.price;
    let btn=document.createElement("button");
    btn.innerText="Remove Product"
    btn.setAttribute("id","remove_product");
    // btn.addEventListener("onclick",deleteItem());

    box.append(img,h1,h2,h3,btn);
    document.querySelector("#all_products").append(box);

    
});
// function deleteItem(index) {
//     data.splice(index,1);
//     localStorage.setItem("products",JSON.stringify(data));
    
//   }