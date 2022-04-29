function func() {
    document.querySelector("#show_details").style.display = "block";
    document.querySelector("#del_ret").style.display = "none";
    document.querySelector("#sellerdet").style.display = "none";
  }
  function funca() {
    document.querySelector("#show_details").style.display = "none";
    document.querySelector("#del_ret").style.display = "block";
    document.querySelector("#sellerdet").style.display = "none";
  }
  function funcb() {
    document.querySelector("#show_details").style.display = "none";
    document.querySelector("#del_ret").style.display = "none";
    document.querySelector("#sellerdet").style.display = "block";
  }
  data_display = JSON.parse(localStorage.getItem("shirtsitem"));
  console.log(data_display);

  // brand: "KOOVS"
  // color: "grey"
  // cutprice: 1299
  // imgurl: "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/166786_f13187e91c754ac297b992f4dcada08f_front_zoom_360x.jpg?v=1631093496"
  // price: 520
  // size: "s"
  // title: "Multi Floral Print Cuban Collar Shirt"

  function display_show(data_display) {
    let image = document.createElement("img");
    image.src = data_display.imgurl;
    document.querySelector("#left").append(image);

    let para = document.createElement("p");
    para.textContent = "₹" + data_display.price;
    document.querySelector("#rate>h1").append(para);

    let para1 = document.createElement("p");
    para1.textContent = "₹" + data_display.cutprice;
    document.querySelector("#rate>p").append(para1);

    let para2 = document.createElement("p");
    let disc =
      (data_display.cutprice - data_display.price) / data_display.cutprice;
    let disc2 = Math.floor(disc * 100);
    para2.textContent = disc2 + "% OFF";
    document.querySelector("#rate>h3").append(para2);

    let para3 = document.createElement("p");
    para3.textContent = data_display.brand;
    document.querySelector("#right>h1").append(para3);

    let para4 = document.createElement("p");
    para4.textContent = data_display.title;
    document.querySelector("#right>p").append(para4);

    let para5 = document.createElement("span");
    para5.textContent = data_display.color;
    document.querySelector("#C_lor").append(para5);

    document.querySelector("#clropt").style.background = data_display.color;

    let para6 = document.createElement("span");
    para6.textContent = data_display.size;
    document.querySelector("#sh_size").append(para6);
  }
  display_show(data_display);

  arraydata=JSON.parse(localStorage.getItem("bag"))||[]

  
  function addd() {
    arraydata.push(data_display);
    localStorage.setItem("bag", JSON.stringify(arraydata));
    console.log(arraydata);
  }
  function add_to() {
    arraydata.push(data_display);
    localStorage.setItem("bag", JSON.stringify(arraydata));
    console.log(arraydata);
    window.location.href = "./cart.html";
  }