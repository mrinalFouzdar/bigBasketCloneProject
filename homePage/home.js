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


let slide_show1 = () => {
    let i = 0;
    x = setInterval(function() {
        if (i == slide1_img.length) {
            i = 0
        }
        img.src = slide1_img[i];
        i++
    }, 4000)
}
slide_show1()

//<3> after 1st slide show  grid picture




// 1> sign ing function.....

let sign_in_box = document.getElementById("sign_in_box")

let signin = () => {
    sign_in_box.style.display = "flex"
}

let cut_page = () => {
    sign_in_box.style.display = "none"
}