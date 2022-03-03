
// 1> sign ing function.....

let sign_in_box = document.getElementById("sign_in_box")

let signin = () => {
    sign_in_box.style.display = "flex"
}

let cut_page = () => {
    sign_in_box.style.display = "none"
}

let user_data = localStorage.getItem("user_data")
if (user_data == null) {
    localStorage.setItem("user_data", JSON.stringify([]))
}

let data_submit = () => {
    let number = document.getElementById("number_email").value;
    let name = document.getElementById("name").value;

    if (name != "") {
        let obj = {
            number: number,
            name: name,
        }

        user_data = JSON.parse(localStorage.getItem("user_data"))
        user_data.push(obj)
            // console.log(user_data[user_data.length-1].name)
        let show_name = document.getElementById("show_name")
        show_name.textContent = ` ${user_data[user_data.length-1].name}`
        localStorage.setItem("user_data", JSON.stringify(user_data))
        let sign_none = document.querySelector(".signin")
            // console.log(sign_none)
        sign_none.style.display = "none"
        cut_page()

    } else {
        alert("Invalid Information")
        cut_page()

    }
}

let cartArr =JSON.parse(localStorage.getItem("cartitems"))

if(cartArr==null){
    localStorage.setItem(JSON.stringify([]));
}
let cartnum=document.getElementById("cartnum");
cartnum.innerHTML=cartArr.length;

let displaycart=()=>{
    let tbdy=document.getElementById("tbdy");
    tbdy.innerHTML="";
    
    cartArr.forEach(function(ele,idx){
        let tr=document.createElement("tr");

        let c1=document.createElement("td")
        let c3=document.createElement("td")
        let c2=document.createElement("td")
        let c4=document.createElement("td")
        let c5=document.createElement("td")

        let p1 =document.createElement("p");
        p1.innerHTML=`${ele.brand}<br> <b>${ele.name}  ${ele.quantity}</b>`
        p1.style.color="#888888"
        

        c1.append(p1)
     
        c2.innerText=`RS  ${ele.mrp}`;


        let div = document.createElement("div")

        let btn1= document.createElement("button");
        let img_neg =document.createElement("img")
        img_neg.src="negative.png"

        btn1.append(img_neg);

        btn1.addEventListener("click",function(){
            negative(idx)
        })


        let btn2= document.createElement("button");
        let img_pos =document.createElement("img")
        img_pos.src="posative.png"

        btn2.append(img_pos);

        btn2.addEventListener("click",function(){
            increase(idx)
        })


        let quantity=document.createElement("h4");
        quantity.style.display="inline"
        quantity.style.padding="10px"
        quantity.style.fontSize="x-large"
        // div.style.border="1px solid black"
       

            quantity.innerText=ele.quantity;
     

        div.append(btn1,quantity,btn2);
        c3.append(div)
       let fix=Number(ele.mrp)*Number(ele.quantity)
      

           c4.innerText=`Rs ${fix.toFixed(0)}`
       


        c5.innerText=`X`
        c5.style.cursor="alias"

        c5.addEventListener("click",function(){
            delete_ele(idx)
        })

        tr.append(c1,c2,c3,c4,c5)


        tbdy.append(tr)
    })

}
displaycart()

let negative=(idx) =>{
    if(cartArr[idx].quantity!=0){
        cartArr[idx].quantity--;
        localStorage.setItem("cartitems",JSON.stringify(cartArr))
    }else{
        alert("Your Item Quentity 0")
    }

    displaycart(cartArr)
}

let increase=(idx) =>{
    cartArr[idx].quantity++;
    localStorage.setItem("cartitems",JSON.stringify(cartArr))
    displaycart(cartArr)
}


let delete_ele=(idx)=>{
    cartArr.splice(idx,idx+1)
    localStorage.setItem("cartitems",JSON.stringify(cartArr))
    cartnum.textContent=cartArr.length;
    displaycart(cartArr)
}

