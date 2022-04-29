document.querySelector("#gotoship").addEventListener("click", function () {
  if (
    document.querySelector("#Email").value == "" ||
    document.querySelector("#Fname").value == "" ||
    document.querySelector("#Lname").value == "" ||
    document.querySelector("#Address").value == "" ||
    document.querySelector("#PC").value == "" ||
    document.querySelector("#City").value == "" ||
    document.querySelector("#Phone").value == ""
  ) {
    alert("Please Enter All Data");
  } else {
    window.location.href = "./shipping.html";
  }
});
var errortag = document.querySelector("#error");
var applyBtn = document.getElementById("couponBtn");
var discount = 0;
var addit = 99;

applyBtn.addEventListener("click", function () {
  var input = document.getElementById("coupon-input").value;

  if (input == "masai30") {
    discount = localStorage.getItem("sumtotal") * 0.3;
    discount = Math.floor(discount);
    document.querySelector("#dis").textContent = `- ${discount}`;
    totalsum -= discount;
    document.querySelector("#net").textContent = "₹ " + (totalsum + addit);

    errortag.textContent = "30% discount coupon applied successfully";
    errortag.style.color = "green";
  } else if (input == "masai50") {
    discount = localStorage.getItem("sumtotal") * 0.5;
    discount = Math.floor(discount);
    document.querySelector("#dis").textContent = `- ${discount}`;
    totalsum -= discount;
    document.querySelector("#net").textContent = "₹ " + (totalsum + addit);
    errortag.textContent = "50% discount coupon applied successfully";
    errortag.style.color = "green";
  } else {
    errortag.textContent = "Try with another coupon";
    errortag.style.color = "red";
  }
});

document.querySelector("#sum").textContent =
  "₹ " + localStorage.getItem("sumtotal");
var totalsum = localStorage.getItem("sumtotal");

var net = Number(totalsum) + Number(addit);
document.querySelector("#net").textContent = "₹ " + net;

var bagc = JSON.parse(localStorage.getItem("bag"));
console.log("bagc:", bagc);

bagc.map(function (elem, index) {
  var maindiv = document.createElement("div");
  maindiv.className = "maindiv";

  var imgdiv = document.createElement("div");
  imgdiv.className = "imgdiv";

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
