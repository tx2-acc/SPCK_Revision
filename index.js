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
    ctgrURL: ""
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

// Example 
const Navbar = document.createElement("div");
Navbar.classList.add("navbar");
renderNav = () => {
    Navbar.style.display = "flex";
    Navbar.style.flexDirection = "space-between";
    Navbar.style.backgroundColor = "#57c7de";
    Navbar.style.width = "100%";
    Navbar.style.height = "75px";   
};

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
    window.location.href = "index.html";
});

// Utilities 
const listElem = document.querySelectorAll("li.homepage, li.mainDish, li.sideDish");
listElem.forEach((Elem) => {
    Elem.addEventListener("click", test = () => {
        window.location.href = "index.html";
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

const leftSide = document.querySelector("div.left");
getFLeft.forEach(display = (item) => {
    elemClsList = ["privacy-policy", "community-guidelines", "about"];
    for(let x = 1; x <= 3; x++) {
        const ELEM = document.createElement("div");
        ELEM.classList.add(`${elemClsList[x - 1]}`);
        ELEM.style.width = "auto";
        ELEM.style.height = "auto";
        ELEM.style.transition = "transform 1s";
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

const leftList = document.querySelector("div.leftList");
const renderListL = () => {
    for(let x = 0; x < 9; ++x) {
        const ELEM = document.createElement("div");
        ELEM.style.width = "180px";
        ELEM.style.height = "auto";
        ELEM.style.transition = "transform 1s";
        ELEM.style.margin = "10px";
    
        const elemImg = document.createElement("img");
        elemImg.src = "./ImgContainer/PLACEHOLDER.jpg"
        elemImg.style.width = "100%";
        elemImg.style.height = "180px";
        ELEM.appendChild(elemImg);
    
        const elemSpan = document.createElement("span");
        elemSpan.innerHTML = "PLACEHOLDER";
        elemSpan.style.fontSize = "25px";
        elemSpan.style.color = "black";
        ELEM.appendChild(elemSpan);
        leftList.appendChild(ELEM);  
        
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
};
renderListL();


const rightList = document.querySelector("div.rightList");
const renderListR = () => {
    for(let y = 0; y < 6; y++) {
        const ELEM = document.createElement("div");
        ELEM.style.width = "150px";
        ELEM.style.height = "auto";
        ELEM.style.transition = "transform 1s";
        ELEM.style.margin = "10px";
    
        const elemImg = document.createElement("img");
        elemImg.src = "./ImgContainer/PLACEHOLDER.jpg"
        elemImg.style.width = "150px";
        elemImg.style.height = "150px";
        ELEM.appendChild(elemImg);
    
        const elemSpan = document.createElement("span");
        elemSpan.innerHTML = "PLACEHOLDER";
        elemSpan.style.fontSize = "25px";
        elemSpan.style.color = "black";
        ELEM.appendChild(elemSpan);
    
    
        rightList.appendChild(ELEM);  
        
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
};
renderListR();
