// <2> slide show 1 function

let x;
let slide1 = document.getElementById("slide1")
let slide1_img = ['https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekdayblore_460_230222.jpeg',
    'https://www.bigbasket.com/media/uploads/banner_images/220223-fresho-days-fnv-460-Bangalore-22ndFEB.jpg',
    'https://www.bigbasket.com/media/uploads/banner_images/hp_sbf_m_snackingstore_1600x460-250122.jpg',
    'https://www.bigbasket.com/media/uploads/banner_images/hp_bev_m_beveragestore_1600x460-250122.jpg',
    'https://www.bigbasket.com/media/uploads/banner_images/fresho-days-fnv-220302-460-ALL-2ndMar.jpg',
    'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_GoodDiet_1600x460-250122.jpg',
    "https://www.bigbasket.com/media/uploads/banner_images/hp_sbf_m_Adhoc-GM_460-250222.jpg"
]

let img = document.createElement("img");
img.className = "images_slid1"
slide1.append(img);
console.log(slide1)

// let idx=0
let i = 0;
let slide_show1 = () => {
    x = setInterval(function() {
        if (i == slide1_img.length) {
            i = 0
        }
        img.src = slide1_img[i];
        // console.log(i)
        i++
    }, 4000)
}
slide_show1()

function plusSlides(position) {
    clearInterval(x)
    i += position
    if (i == slide1_img.length) {
        i = 0
    }
    if (i < 0) {
        i = (slide1_img.length - 1)
    }
    img.src = slide1_img[i];
    slide_show1()
}

//<3> after 1st slide show  grid picture



// big_save slide show

let y
let big_save = document.querySelector(".bigsave")
let big_save_arr = ["https://www.bigbasket.com/media/uploads/banner_images/hp_m_bigdays-citi_1130x400-02-03-22.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_bill-buster-2_400_020322.jpg"
]

let big_save_img = document.createElement("img")
console.log(big_save)
big_save.append(big_save_img);
let j = 0
let big_save_show1 = () => {
    y = setInterval(function() {
        if (j == big_save_arr.length) {
            j = 0
        }
        big_save_img.src = big_save_arr[j];
        // console.log(j)
        j++
    }, 3800)
}
big_save_show1()

function big_Slides(positio) {
    clearInterval(y)
    j += positio
    if (j >= big_save_arr.length) {
        j = 0
    }
    if (j < 0) {
        j = (big_save_arr.length - 1)
    }
    big_save_img.src = big_save_arr[j];

    big_save_show1()

}


// Third Slid
let t
let third_slid = document.getElementById("third_slid")
let third_arr = ["https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_babycare_250222_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_bcd_250222_400.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_petstore_250222_400.jpg"
]
console.log(third_slid)
let third_div_img = document.createElement("img");
third_slid.append(third_div_img);
let k = 0
let third_slid_show = () => {
    t = setInterval(function() {
        if (k == third_arr.length) {
            k = 0
        }
        third_div_img.src = third_arr[k];
        // console.log(k)
        k++
    }, 3800)
}
third_slid_show()

function third_click_Slides(positio) {
    clearInterval(t)
    k += positio
    if (k >= third_arr.length) {
        k = 0
    }
    if (k < 0) {
        k = (third_arr.length - 1)
    }
    third_div_img.src = third_arr[k];

    third_slid_show()

}


// last slide show

let last;
let last_slid = document.getElementById("last_slid")
let last_arr = ["https://www.bigbasket.com/media/uploads/banner_images/CXNP9272-2ndmarch.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9271-2ndmarch.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9270-2ndmarch.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9274-2ndmarch.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/CXNP9275-2ndmarch.jpg"
]
let last_slid_div_img = document.createElement("img");
last_slid.append(last_slid_div_img)

let l = 0;

let last_slid_show = () => {
    last = setInterval(function() {
        if (l == last_arr.length) {
            l = 0
        }
        last_slid_div_img.src = last_arr[l];
        // console.log(l)
        l++
    }, 3800)
}
last_slid_show()

function last_click_Slides(positio) {
    clearInterval(last)
    l += positio
    if (l >= last_arr.length) {
        l = 0
    }
    if (l < 0) {
        l = (last_arr.length - 1)
    }
    last_slid_div_img.src = last_arr[l];

    last_slid_show()

}


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
        show_name.textContent = `Hello  ${user_data[user_data.length-1].name}`
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