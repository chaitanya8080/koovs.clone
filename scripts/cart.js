document.querySelector("#checkout").addEventListener("click",function(){
    setTimeout(function(){
        window.location.href="./checkout.html"

    },200)
   
})
document.querySelector("#cal").addEventListener("click",function(){
    setTimeout(function(){
        document.querySelector(".hidden").style.display="block"

    },500)
   


})

var bagc=JSON.parse(localStorage.getItem("bag")) 
console.log(bagc)


var holdprice=bagc.map(function(elem){
   return Math.floor(elem.price)

})
console.log(holdprice)

function displaycontent(bagc){

bagc.map(function(elem,index){
    var maindiv=document.createElement("div")
    maindiv.className="maindiv";
    var imgdiv=document.createElement("div")
    imgdiv.className="imgdiv";
    var contentdiv=document.createElement("div");
    contentdiv.className="contentdiv"
    var qtydiv=document.createElement("div")
    qtydiv.className="qtydiv"
    var pricediv=document.createElement("div")
    pricediv.className="pricediv"            //all divs created


    var img=document.createElement("img")
    img.setAttribute("src",elem.imgurl)
    imgdiv.append(img)                       //img added

    //content box start  
            //namedetails
    var namedetail=document.createElement("div")
    namedetail.className="namedetaildiv"
   
    
    var brandname=document.createElement("p")
    brandname.textContent=elem.brand
    
    var prodname=document.createElement("p")
    prodname.innerHTML=elem.title
    
    var prodsize=document.createElement("h3")
    prodsize.textContent="Size: "+elem.size
    
    var prodcolor=document.createElement("h3")
    prodcolor.innerHTML="Color: "+elem.color

    namedetail.append(brandname,prodname,prodcolor,prodsize)
    

               //sizedetails end
   

               //remove button
    var buttondiv=document.createElement("div")  
    buttondiv.className="buttondiv"         
    var buttonR=document.createElement("button")  
    buttonR.style.background="white"
    buttonR.style.border="1px solid transparent"
    var deleteicon=document.createElement("img")
    deleteicon.src="./images/download.png"   
    deleteicon.style.height="20px"
    buttonR.append(deleteicon)
    
    buttondiv.append(buttonR)
    
             //button done
    //removing item from bag ///////////////////////////
   


    contentdiv.append(namedetail,buttondiv)
    
    //content box end
    //qty box started
    qtybox=document.createElement("div")
    plusbox=document.createElement("div")
    minus=document.createElement("div")
    numbox=document.createElement("div")
    var plus=document.createElement("span")
    plus.textContent="+"
    var mins=document.createElement("span")
    mins.textContent="−"
    var quant=document.createElement("span")
    var countqty=JSON.parse(localStorage.getItem("count"))||1;
   
    quant.textContent=countqty;

    minus.append(mins)
    plusbox.append(plus)
    numbox.append(quant)


    qtybox.append(minus,numbox,plusbox)
    qtybox.style.display="flex"
    qtybox.style.gap="15px"
    qtybox.id="qtyboxdiv"

   
    qtydiv.append(qtybox)
    
   
    plusbox.addEventListener("click",function(){
        countqty++
        localStorage.setItem("count",JSON.stringify(countqty))
        quant.textContent=countqty
        qtybox.append(minus,numbox,plusbox)
        
        holdprice[index]=countqty*Math.floor(elem.price)
        console.log(holdprice)
        totalp.textContent="₹ "+holdprice[index]
        totaldiv.append(totalp)
        maindiv.append(imgdiv,contentdiv,pricediv,qtydiv,totaldiv)
        document.querySelector("#bagt").textContent="₹ "+bagtotal(holdprice)
        
    })

    minus.addEventListener("click",function(){
        countqty--
        localStorage.setItem("count",JSON.stringify(countqty))
        if(countqty==0){
            document.querySelector("#product").textContent=""
            bagc.splice(index,1)
            console.log("here",index)
            displaycontent(bagc)

        }
        quant.textContent=countqty
        qtybox.append(minus,numbox,plusbox)

        holdprice[index]=countqty*Math.floor(elem.price)
        console.log(holdprice)
        totalp.textContent="₹ "+holdprice[index]
        totaldiv.append(totalp)
        maindiv.append(imgdiv,contentdiv,pricediv,qtydiv,totaldiv)
        document.querySelector("#bagt").textContent="₹ "+bagtotal(holdprice)
        
    })

    buttonR.addEventListener("click",function(){
        document.querySelector("#product").textContent=""
        bagc.splice(index,1)
        
        console.log("bagc:",bagc)
        localStorage.setItem("bag",JSON.stringify(bagc))
        
       
        holdprice.splice(index,1)
        
        document.querySelector("#bagt").textContent="₹ "+bagtotal(holdprice)
        console.log("remove")
        displaycontent(bagc)
        
    })



    var price=document.createElement("span")
   
    
    price.textContent="₹ "+Math.floor(elem.price)
    pricediv.append(price)                    //price added


    var hr=document.createElement("hr")
    var totaldiv=document.createElement("div")
    totaldiv.id="totalprice"
    var totalp=document.createElement("p")
    totalp.textContent="₹ "+holdprice[index]
    totaldiv.append(totalp)

    
    maindiv.append(imgdiv,contentdiv,pricediv,qtydiv,totaldiv)
    
    document.querySelector("#product").append(maindiv,hr)
})
}

displaycontent(bagc)
function bagtotal(holdprice){
    let sum=0
    for(var i=0;i<holdprice.length;i++){
        sum+=holdprice[i]
    }
    localStorage.setItem("sumtotal",sum)
    return sum
    
}
console.log(bagtotal(holdprice))

document.querySelector("#bagt").textContent="₹ "+bagtotal(holdprice)
