// // 1> sign ing function.....

// let sign_in_box = document.getElementById("sign_in_box")




// let user_data_log = JSON.parse(localStorage.getItem("user_data"))
// console.log(user_data_log)

// if (user_data_log.length > 0) {
//     let show_name = document.getElementById("show_name")
//     document.querySelector(".signin").style.display = "none"

//     show_name.textContent = ` ${user_data_log[user_data_log.length-1].name}`
//         //   cart_page()
// } else {
//     localStorage.setItem("user_data", JSON.stringify([]))

// }


// let signin = () => {
//     sign_in_box.style.display = "flex"
// }

// let cut_page = () => {
//     sign_in_box.style.display = "none"
// }



// let data_submit = () => {
//     let number = document.getElementById("number_email").value;
//     let name = document.getElementById("name").value;

//     if (name != "") {
//         let obj = {
//             number: number,
//             name: name,
//         }
//         localStorage.setItem("user_data", JSON.stringify([]))

//         user_data_log = JSON.parse(localStorage.getItem("user_data"))
//         user_data_log.push(obj)
//             // console.log(user_data[user_data.length-1].name)
//         let show_name = document.getElementById("show_name")
//         show_name.textContent = ` ${user_data_log[user_data_log.length-1].name}`
//         localStorage.setItem("user_data", JSON.stringify(user_data_log))
//         let sign_none = document.querySelector(".signin")
//             // console.log(sign_none)
//         sign_none.style.display = "none"
//         cut_page()

//     } else {
//         alert("Invalid Information")
//         cut_page()

//     }
// }

let cartArr = JSON.parse(localStorage.getItem("cartitems"))

if (cartArr == null) {
    localStorage.setItem(JSON.stringify([]));
}
let cartnum = document.getElementById("cartnum");
cartnum.innerHTML = cartArr.length;

let displaycart = () => {
    let tbdy = document.getElementById("tbdy");
    tbdy.innerHTML = "";

    cartArr.forEach(function(ele, idx) {
        let tr = document.createElement("tr");

        let c1 = document.createElement("td")
        let c3 = document.createElement("td")
        let c2 = document.createElement("td")
        let c4 = document.createElement("td")
        let c5 = document.createElement("td")

        let p1 = document.createElement("p");
        p1.innerHTML = `${ele.brand}<br> <b>${ele.name}  ${ele.quantity}</b>`
        p1.style.color = "#888888"


        c1.append(p1)

        c2.innerText = `RS  ${ele.mrp}`;


        let div = document.createElement("div")

        let btn1 = document.createElement("button");
        let img_neg = document.createElement("img")
        img_neg.src = "negative.png"

        btn1.append(img_neg);

        btn1.addEventListener("click", function() {
            negative(idx)
        })


        let btn2 = document.createElement("button");
        let img_pos = document.createElement("img")
        img_pos.src = "posative.png"

        btn2.append(img_pos);

        btn2.addEventListener("click", function() {
            increase(idx)
        })


        let quantity = document.createElement("h4");
        quantity.style.display = "inline"
        quantity.style.padding = "10px"
        quantity.style.fontSize = "x-large"
            // div.style.border="1px solid black"


        quantity.innerText = ele.quantity;


        div.append(btn1, quantity, btn2);
        c3.append(div)
        let fix = Number(ele.mrp) * Number(ele.quantity)


        c4.innerText = `Rs ${fix.toFixed(0)}`



        c5.innerText = `X`
        c5.style.cursor = "pointer"
            // c5.style.cursor.color="red"
        c5.className = "c5"



        c5.addEventListener("click", function() {
            delete_ele(idx)
        })

        tr.append(c1, c2, c3, c4, c5)


        tbdy.append(tr)
    })

}


displaycart()
let total = () => {
    let total = cartArr.reduce(function(acc, ele) {
        return acc + (Number(ele.mrp) * Number(ele.quantity))
    }, 0)
    document.getElementById("total").textContent = total.toFixed(0)
    document.getElementById("sub_total").textContent = total.toFixed(0)
}
total()
let negative = (idx) => {
    if (cartArr[idx].quantity != 0) {
        cartArr[idx].quantity--;
        localStorage.setItem("cartitems", JSON.stringify(cartArr))
    } else {
        alert("Your Item Quentity 0")
    }

    displaycart(cartArr)
    total()
}

let increase = (idx) => {
    cartArr[idx].quantity++;
    localStorage.setItem("cartitems", JSON.stringify(cartArr))
    displaycart(cartArr)
    total()
}


let delete_ele = (idx) => {
    cartArr.splice(idx, idx + 1)
    localStorage.setItem("cartitems", JSON.stringify(cartArr))
    cartnum.textContent = cartArr.length;
    displaycart(cartArr)
    total()
}

let check_out = () => {
    console.log(cartArr[0].quantity)

    if (cartArr.length > 0) {
        if (Number(cartArr[0].quantity) > 0) {
            window.location.href = "../payment/payment.html"

        } else {
            alert("Quentity Empty")

        }
    } else {
        alert("Quentity Empty")
    }
}

let continut_direct = () => {
    window.location.href = "../product/product.html"
}


let empty_basket = () => {
    cartArr = []
    let tbdy = document.getElementById("tbdy");
    tbdy.innerHTML = "";
    localStorage.setItem("cartitems", JSON.stringify(cartArr))
    document.getElementById("cartnum").innerHTML = cartArr.length;
    total()
}