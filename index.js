// Things 
let urlDef = {
    homepageURL: "",
    mainDish: "",
    sideDish: ""
};

let categoriesMain = {
    ctgrImg: "./ImgContainer/main-resized.jpg",
    ctgrDesc: "Main",
    ctgrClass: "ctgr-main",
    ctgrURL: "",
};

let categoriesSide = {
    ctgrImg: "./ImgContainer/side-resized.jpg",
    ctgrDesc: "Sides",
    ctgrClass:"ctgr-side",
    ctgrURL: ""
};

let categoriesSnack = {
    ctgrImg: "./ImgContainer/snacks-resized.jpg",
    ctgrDesc: "Snacks", 
    ctgrClass: "ctgr-snack",
    ctgrURL: ""
};

let categoriesDessert = {
    ctgrImg: "./ImgContainer/desserts-resized.jpg",
    ctgrDesc: "Desserts",
    ctgrClass: "ctgr-dessert", 
    ctgrURL: ""
};

let categoriesList = [categoriesMain, categoriesSide, categoriesSnack, categoriesDessert];
localStorage.setItem("CategoriesList", JSON.stringify(categoriesList));
let getListCtgr = JSON.parse(localStorage.getItem("CategoriesList"));
console.log(getListCtgr);



// Header -> Navbar

// Specify Header 
const headerSection = document.getElementById("section#header");

// Search + Function 
const utilElem = document.querySelector("div.utilities");

const searchElem = document.querySelector("li.magniGlass");
const searchAttr = () => {
    let isPresent = 0;
    searchElem.addEventListener('mouseover', elemHover = () => {
        searchElem.style.cursor = "pointer";
    });
    searchElem.addEventListener('click', elemClick = () => {
        const searchBar = document.createElement("input");
        searchBar.classList.add("searchBox");
        searchBar.setAttribute("type", "search");
        searchBar.setAttribute("placeholder", "...");
        const getElem = document.querySelector("input.searchBox");
        if(isPresent == 0) {
            const barAttr = () => {
                const barPos = () => {
                    searchBar.style.position = "absolute";
                    searchBar.style.top = "85px";
                    searchBar.style.right = "100px";
                };
                barPos();
                const barStyle = () => {
                    searchBar.style.width = "20%";
                    searchBar.style.height = "30px";
                    searchBar.style.padding = "10px";
                    searchBar.style.backgroundColor = "white";   
                    searchBar.style.border = "2px solid black";
                    searchBar.style.borderRadius = "50px";
                };
                barStyle();
            }
            barAttr();
            utilElem.appendChild(searchBar);
            isPresent = 1;
        }
        else if(isPresent != 0) {
            getElem.remove();
            isPresent = 0;
        }
    });
};
searchAttr();

// Logo Redirect
const logoElem = document.querySelector("span#logo");
logoElem.addEventListener('mouseover', styling = () => {
    logoElem.style.cursor = "pointer";
});
logoElem.addEventListener('click', redirect = () => {
    window.location.href = "../main.html";
});

// Utilities 
const listElem = document.querySelectorAll("li.homepage, li.mainDish, li.sideDish");
let isDetail = 0;
listElem.forEach((Elem) => {
    Elem.addEventListener("click", test = () => {
        isDetail = 1;
        let pageURL = "../DetailedPage/details.html";        
        let pageURL2 = "./main.html";
        window.location.href = "./main.html";
    });
    Elem.addEventListener("mouseover", test = () => {
        Elem.style.cursor = "pointer";
    });
});

// Content 
const categoriesContainer = document.querySelector(".ctgr-container");

getListCtgr.forEach(display = (item) => {
    let divElem = document.createElement("div");
    divElem.classList.add(item.ctgrClass);
    const itemStyling = () => {
        divElem.style.display = "flex";
        divElem.style.flexDirection = "column";
        divElem.style.alignItems = "center";
        divElem.style.width = "300px";
        divElem.style.height = "350px";
        divElem.style.fontSize = "35px";
        divElem.style.transition = "transform 1s";
    };
    itemStyling();

    let divImg = document.createElement("img");
    divImg.src = item.ctgrImg;
    const imgStyling = () => {
        divImg.style.objectFit = "cover";
        divImg.style.border = "1px solid black";
        divImg.style.borderRadius = "10px";
        divImg.style.width = "100%";
        divImg.style.height =  "300px";
    };
    imgStyling();
    divElem.appendChild(divImg);
    
    let divDesc = document.createElement("span");
    divDesc.innerHTML = item.ctgrDesc;
    divElem.appendChild(divDesc);

    const elemAnchor = document.createElement("a");
    elemAnchor.style.display = "block";
    elemAnchor.style.position = "absolute";
    elemAnchor.style.top = "0";
    elemAnchor.style.width = "100%";
    elemAnchor.style.height = "100%";
    elemAnchor.href = "../DetailedPage/details.html";
    divElem.appendChild(elemAnchor);

    categoriesContainer.appendChild(divElem);
    function hoverAnim() {
        divElem.addEventListener("mouseover", rotate = () => {
            divElem.style.cursor = "pointer";
            divElem.style.transform = "rotate(-4deg)";
        });
        divElem.addEventListener("mouseout", revert = () => {
            divElem.style.transform = "rotate(0deg)";
        });
    };
    hoverAnim();
});


// List of Foods 
const mainFoods = {
    Main_1: {
        img: "./ImgContainer/Main_1.jpg",
        desc: "Instant Pot Potato Salad",  
        URLs: "./PageContainer/Main_1.html",
    },

    Main_2: {
        img: "./ImgContainer/Main_2.jpg",
        desc: "Instant Pot Ginger Carrot Soup",
        URLs: "./PageContainer/Main_2.html",
    },

    Main_3: {
        img: "./ImgContainer/Main_3.jpg",
        desc: "Instant Pot Broccoli",
        URLs: "./PageContainer/Main_3.html",
    },

    Main_4: {
        img: "./ImgContainer/Main_4.jpg",
        desc: "Instant Pot Country Style Pork Ribs",
        URLs: "./PageContainer/Main_4.html",
    },

    Main_5: {
        img: "./ImgContainer/Main_5.jpg",
        desc: "Instant Pot Asparagus",
        URLs: "./PageContainer/Main_5.html",
    },

    Main_6: {
        img: "./ImgContainer/Main_6.jpg",
        desc: "Instant Pot Chicken Stew",
        URLs: "./PageContainer/Main_6.html",
    },
};


const leftList = document.querySelector("div.leftList");
const renderListL = () => {
    for(let x = 0; x < 6; ++x) {
        const assignAttr = Object.values(mainFoods);
        const ELEM = document.createElement("div");
        ELEM.style.position = "relative";
        ELEM.style.width = "200px";
        ELEM.style.height = "230px";
        ELEM.style.transition = "transform 1s";
        ELEM.style.margin = "5px";
    
        const elemImg = document.createElement("img");
        elemImg.src = assignAttr[x].img;
        elemImg.style.width = "200px";
        elemImg.style.height = "150px";
        ELEM.appendChild(elemImg);
    
        const elemSpan = document.createElement("span");
        elemSpan.innerHTML = assignAttr[x].desc;
        elemSpan.style.fontSize = "25px";
        elemSpan.style.color = "black";
        ELEM.appendChild(elemSpan);
        leftList.appendChild(ELEM);  

        const elemAnchor = document.createElement("a");
        elemAnchor.style.display = "block";
        elemAnchor.style.position = "absolute";
        elemAnchor.style.top = "0";
        elemAnchor.style.width = "100%";
        elemAnchor.style.height = "100%";
        elemAnchor.href = assignAttr[x].URLs;
        ELEM.appendChild(elemAnchor);

        ELEM.addEventListener('mouseover', style = () => {
            ELEM.style.cursor = "pointer";
            ELEM.style.color = "grey";
            ELEM.style.textDecoration = "none";
        });
        ELEM.addEventListener('mouseout', style = () =>{
            ELEM.style.color = "white";
            ELEM.style.textDecoration = "none";
        });
    };
};
renderListL();


const sideFoods = {
    side_1: {
        img: "./ImgContainer/Side_1.jpg",
        desc: "Oat Flour Pancakes",
        URLs: "./PageContainer/Side_1.html",
    },
        
    side_2: {
        img: "./ImgContainer/Side_2.jpg",
        desc: "Oat Flour Cookies",
        URLs: "./PageContainer/Side_2.html",
    },

    side_3: {
        img: "./ImgContainer/Side_3.jpg",
        desc: "Oat Flour Waffles",
        URLs: "./PageContainer/Side_3.html",
    },

    side_4: {
        img: "./ImgContainer/Side_4.jpg",
        desc: "Gluten Free Oat Bread",
        URLs: "./PageContainer/Side_4.html",
    },
};


const rightList = document.querySelector("div.rightList");
const renderListR = () => {
    for(let y = 0; y < 4; y++) {
        const assignAttr = Object.values(sideFoods);
        const ELEM = document.createElement("div");
        ELEM.style.position = "relative";
        ELEM.style.width = "200px";
        ELEM.style.height = "200px";
        ELEM.style.transition = "transform 1s";
        ELEM.style.margin = "10px";
    
        const elemImg = document.createElement("img");
        elemImg.src = assignAttr[y].img;
        elemImg.style.width = "200px";
        elemImg.style.height = "150px";
        ELEM.appendChild(elemImg);
    
        const elemSpan = document.createElement("span");
        elemSpan.innerHTML = assignAttr[y].desc;
        elemSpan.style.fontSize = "25px";
        elemSpan.style.color = "black";
        ELEM.appendChild(elemSpan);
    
        const elemAnchor = document.createElement("a");
        elemAnchor.style.display = "block";
        elemAnchor.style.position = "absolute";
        elemAnchor.style.top = "0";
        elemAnchor.style.width = "100%";
        elemAnchor.style.height = "100%";
        elemAnchor.href = assignAttr[y].URLs;
        ELEM.appendChild(elemAnchor);

        rightList.appendChild(ELEM);  
        
        ELEM.addEventListener('mouseover', style = () => {
            ELEM.style.cursor = "pointer";
            ELEM.style.color = "grey";
            ELEM.style.textDecoration = "none";
        });
        ELEM.addEventListener('mouseout', style = () =>{
            ELEM.style.color = "white";
            ELEM.style.textDecoration = "none";
        });
    };    
};
renderListR();



// Footer 
let leftInfo = {
    Desc_1: "Privacy Policy",
    URLs_1: "#",
    Desc_2: "Community Guidelines",
    URLs_2: "#",
    Desc_3: "About",
    URLs_3: "#",
};

let footerLeft = [leftInfo];
localStorage.setItem("FooterLeft", JSON.stringify(footerLeft));
let getFLeft = JSON.parse(localStorage.getItem("FooterLeft"));
console.log(getFLeft);

function renderFooter() {
    const leftSide = document.querySelector("div.left");
    getFLeft.forEach(display = (item) => {
        elemClsList = ["privacy-policy", "community-guidelines", "about"];
        for(let x = 1; x <= 3; x++) {
            const ELEM = document.createElement("div");
            ELEM.classList.add(`${elemClsList[x - 1]}`);
            ELEM.style.width = "auto";
            ELEM.style.height = "auto";
            const elemDesc = document.createElement("span");
            let getDesc = eval("item.Desc_" + x);
            elemDesc.innerHTML = getDesc;
            ELEM.appendChild(elemDesc);
            leftSide.appendChild(ELEM);  
            console.log(getDesc);
            
            ELEM.addEventListener('mouseover', style = () => {
                ELEM.style.cursor = "pointer";
                ELEM.style.color = "grey";
                ELEM.style.textDecoration = "underline";
            });
            ELEM.addEventListener('mouseout', style = () =>{
                ELEM.style.color = "white";
                ELEM.style.textDecoration = "none";
            });
        };
    });  
};

renderFooter();