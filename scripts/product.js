 let shirtsData;
  async function Getdata(){
      try {
          let res = await fetch("https://my-koovs-api-project.herokuapp.com/shirtsdata");
           shirtsData = await res.json();
          console.log(shirtsData);
          AppendShirts(shirtsData,shirtsData.length);
      } catch (error) {
          console.log(error)
      }
  }
Getdata();


        
    function AppendShirts(arr,length){
      document.getElementById("product").innerHTML="Products "+length;
        document.querySelector(".grid").innerHTML=null;
       arr.map((el)=>{
           let div1=document.createElement("div");
           let img=document.createElement("img");
           img.src=el.imgurl;
           let title=document.createElement("p");
        title.textContent=el.title;
           let brand=document.createElement("p");
        brand.textContent=el.brand;
           let price=document.createElement("p");
        price.textContent="₹"+el.price;
        price.style.display="inline-block";
           let cutprice=document.createElement("p");
           cutprice.textContent="₹"+el.cutprice;
           cutprice.style.display="inline-block";
           let img1=document.createElement("img");
           img1.setAttribute("class","circleimage");
            img1.src=el.imgurl
        let div2=document.createElement("div");
        div2.append(img1)
           div1.append(img,title,brand,price,cutprice,div2);
           div1.onclick=function(){
             localStorage.setItem("shirtsitem",JSON.stringify(el));
             window.location.href="display.html";
           }    

           document.querySelector(".grid").append(div1);
       });
    }


    // filter BLUE SAINT "BRAND"
    let bluesaint=0;
    document.getElementById("BLUE SAINT").addEventListener("click", BLUESAINTbrand);
function BLUESAINTbrand() {
  var arr = shirtsData;
      bluesaint++;
  var arr = arr.filter(function (elem) {
    
    var temp1 = elem.brand;
    let value= document.getElementById("BLUE SAINT").value;
    for (var i = 0; i < arr.length; i++) {
      if (value == temp1) {
        return elem;
      }
    }
  });
  console.log(arr.length);
  // document.getElementById("product").innerHTML="Products "+arr.length;
  if(bluesaint%2==1){
   
  AppendShirts(arr,arr.length);

  }
  else{
    AppendShirts(shirtsData,shirtsData.length)
  }
}
// filter koovs "BRAND"
  let koovs=0;
document.getElementById("KOOVS").addEventListener("click", KOOVSbrand);
function KOOVSbrand() {
  var arr = shirtsData;
  koovs++;
  var arr = arr.filter(function (elem) {
    
    var temp1 = elem.brand;
    let value= document.getElementById("KOOVS").value;
    for (var i = 0; i < arr.length; i++) {
      if (value == temp1) {
        return elem;
      }
    }
  });
  console.log(arr);
  if(koovs%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length)
  }
}
// filter for OXOLLOXO "BRAND"
let count=0;
document.getElementById("OXOLLOXO").addEventListener("click", OXOLLOXObrand);
function OXOLLOXObrand() {
  var arr = shirtsData;
       count++;
  var arr = arr.filter(function (elem) {
    
    var temp1 = elem.brand;
    let value= document.getElementById("OXOLLOXO").value;
    for (var i = 0; i < arr.length; i++) {
      if (value == temp1) {
        return elem;
      }
    }
  });
  console.log(arr);
  if(count%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}

// filter for AMON "BRAND"
let amon=0;
document.getElementById("AMON").addEventListener("click", AMONbrand);
function AMONbrand() {
  var arr = shirtsData;
         amon++;
  var arr = arr.filter(function (elem) {
    
    var temp1 = elem.brand;
    let value= document.getElementById("AMON").value;
    for (var i = 0; i < arr.length; i++) {
      if (value == temp1) {
        return elem;
      }
    }
  });
  console.log(arr);
  if(amon%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}

// FILTER FOR LARGE SIZE
let l=0;
document.getElementById("large").addEventListener("click",large);

function large(){
  l++;
  let arrlarge=shirtsData.filter((el)=>{
    return el.size=="l";
  })
  if(l%2==1){
  AppendShirts(arrlarge,arrlarge.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
// FILTER FOR MEDIUM SIZE
let m=0;
document.getElementById("medium").addEventListener("click",medium);
function medium(){
  m++;
  let arr1=shirtsData.filter((el)=>{
    return el.size=="m";
  })
  if(m%2==1){
  AppendShirts(arr1,arr1.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }

 }
//  FILTER FOR SMALL SIZE 
let s=0;
document.getElementById("small").addEventListener("click",small);
function small(){
  s++;
  let arrsmall=shirtsData.filter((el)=>{
    return el.size=="s";
  })
  if(s%2==1){
  AppendShirts(arrsmall,arrsmall.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
//  FILTER FOR XTRA LARGE SIZE 
let xl=0;
document.getElementById("xlarge").addEventListener("click",xlarge);
function xlarge(){
  xl++;
  let arrlarge=shirtsData.filter((el)=>{
    return el.size=="xl";
  })
  if(xl%2==1){
  AppendShirts(arrlarge,arrlarge.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}

// FILTER FOR BLACK "COLOR"
let cblack=0;
document.querySelector(".black").addEventListener("click",black);
function black(){
  cblack++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="black";
  })
  if(cblack%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
// FILTER FOR GREY "COLOR"
let cgrey=0;
document.querySelector(".grey").addEventListener("click",greyColor);
function greyColor(){
  cgrey++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="grey";
  })
  if(cgrey%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
// FILTER FOR INDIGO "COLOR"
let cindigo=0;
document.querySelector(".indigo").addEventListener("click",indigoColor);
function indigoColor(){
  cindigo++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="indigo";
  })
  if(cindigo%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
// FILTER FOR BLUE "COLOR"
let cblue=0;
document.querySelector(".blue").addEventListener("click",blueColor);
function blueColor(){
  cblue++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="blue";
  })
  if(cblue%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
 //FILTER FOR BLUE "COLOR"
let corange=0;
document.querySelector(".orange").addEventListener("click",orangeColor);
function orangeColor(){
  corange++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="orange";
  })
  if(corange%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
//FILTER FOR RED "COLOR"
let cred=0;
document.querySelector(".red").addEventListener("click",redColor);
function redColor(){
  cred++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="red";
  })
  if(cred%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}
//FILTER FOR YELLOW "COLOR"
let cyellow=0;
document.querySelector(".yellow").addEventListener("click",yellowColor);
function yellowColor(){
  cyellow++;
  let arr=shirtsData.filter((el)=>{
    return el.color=="yellow";
  })
  if(cyellow%2==1){
  AppendShirts(arr,arr.length);
  }
  else{
    AppendShirts(shirtsData,shirtsData.length);
  }
}

document.getElementById("Sorting").addEventListener("change",sortprice);

function sortprice(){
  let value=document.getElementById("Sorting").value;
  let arr=shirtsData;
  if(value==="high"){
    arr=arr.sort((a,b)=>{
      console.log(a.price);
      return a.price-b.price;
    });
  }
  else if(value==="low"){
    arr=arr.sort((a,b)=>{
      return b.price-a.price;
    });
  }
  AppendShirts(arr,arr.length);
}
