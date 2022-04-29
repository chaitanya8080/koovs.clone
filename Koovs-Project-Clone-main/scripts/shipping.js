document.querySelector("#sum").textContent =
  "₹ " + localStorage.getItem("sumtotal");

  

var totalsum = JSON.parse(localStorage.getItem("sumtotal"));
var addit = 99;
net = Number(totalsum) + Number(addit);
document.querySelector("#net").textContent = "₹ " + net;
var bagc = JSON.parse(localStorage.getItem("bag"));




bagc.map(function (elem, index) {
  var maindiv = document.createElement("div");
  maindiv.className = "maindiv";

  var imgdiv = document.createElement("div");
  imgdiv.className = "imgdiv";

  var namedetail = document.createElement("div");
  namedetail.className = "namedetaildiv";

  var pricediv = document.createElement("div");
  pricediv.className = "pricediv"; //all divs created

  var img = document.createElement("img");
  img.setAttribute("src", elem.imgurl);
  imgdiv.append(img);

  var namedetail = document.createElement("div");
  namedetail.className = "namedetaildiv";

  var prodname = document.createElement("p");
  prodname.innerHTML = elem.title;
  prodname.style.color = "black";

  var prodcolor = document.createElement("h4");
  prodcolor.innerHTML = elem.color + "/" + elem.size;
  prodcolor.style.fontSize = "12px";
  prodcolor.style.color = "gray";
  prodcolor.style.fontWeight = "200";

  namedetail.append(prodname, prodcolor);

  var pricediv = document.createElement("div");
  price = document.createElement("p");
  price.textContent = "₹ " + Math.floor(elem.price);
  pricediv.append(price);
  maindiv.append(imgdiv, namedetail, pricediv);

  document.querySelector(".prod").append(maindiv);
});
