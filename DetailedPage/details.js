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
listElem.forEach((Elem) => {
    Elem.addEventListener("click", test = () => {
        let pageURL = "PageContainer/Main_1.html";
        let pageURL2 = "../main.html";
        window.location.replace(pageURL2);
    });
    Elem.addEventListener("mouseover", test = () => {
        Elem.style.cursor = "pointer";
    });
});

/*          Sorter           */
/* List of Foods */
const mainFoods = {
    Main_1: {
        img: "../ImgContainer/Main_1.jpg",
        desc: "Instant Pot Potato Salad",  
        URLs: "../PageContainer/Main_1.html",
    },

    Main_2: {
        img: "../ImgContainer/Main_2.jpg",
        desc: "Instant Pot Ginger Carrot Soup",
        URLs: "../PageContainer/Main_2.html",
    },

    Main_3: {
        img: "../ImgContainer/Main_3.jpg",
        desc: "Instant Pot Broccoli",
        URLs: "../PageContainer/Main_3.html",
    },

    Main_4: {
        img: "../ImgContainer/Main_4.jpg",
        desc: "Instant Pot Country Style Pork Ribs",
        URLs: "../PageContainer/Main_4.html",
    },

    Main_5: {
        img: "../ImgContainer/Main_5.jpg",
        desc: "Instant Pot Asparagus",
        URLs: "../PageContainer/Main_5.html",
    },

    Main_6: {
        img: "../ImgContainer/Main_6.jpg",
        desc: "Instant Pot Chicken Stew",
        URLs: "../PageContainer/Main_6.html",
    },
};

const sideFoods = {
    side_1: {
        img: "../ImgContainer/Side_1.jpg",
        desc: "Oat Flour Pancakes",
        URLs: "../PageContainer/Side_1.html",
    },
        
    side_2: {
        img: "../ImgContainer/Side_2.jpg",
        desc: "Oat Flour Cookies",
        URLs: "../PageContainer/Side_2.html",
    },

    side_3: {
        img: "../ImgContainer/Side_3.jpg",
        desc: "Oat Flour Waffles",
        URLs: "../PageContainer/Side_3.html",
    },

    side_4: {
        img: "../ImgContainer/Side_4.jpg",
        desc: "Gluten Free Oat Bread",
        URLs: "../PageContainer/Side_4.html",
    },

    side_5: {
        img: "../ImgContainer/Side_5.jpg",
        desc: "Cranberry Walnut Chicken Salad",
        URLs: "",
    },

    side_6: {
        img: "../ImgContainer/Side_6.jpg",
        desc: "Spinach Strawberry Walnut Salad",
        URLs: "",
    },

    side_7: {
        img: "../ImgContainer/Side_7.jpg",
        desc: "Vegetarian Cassoulet",
        URLs: "",
    },

    side_8: {
        img: "../ImgContainer/Side_8.jpg",
        desc: "Mediterranean Rice",
        URLs: "",
    },
};

let getMainLen = Object.keys(mainFoods).length;
let getSideLen = Object.keys(sideFoods).length;

const itemContainer = document.querySelector("div.itemContainer");
const renderMain = () => {
    for(let x = 0; x < getMainLen; ++x) {
        const assignAttr = Object.values(mainFoods);
        const ELEM = document.createElement("div");
        ELEM.classList.add("main");
        ELEM.style.position = "relative";
        ELEM.style.display = "flex";
        ELEM.style.flexDirection = "column";
        ELEM.style.alignItems = "center";
        ELEM.style.width = "200px";
        ELEM.style.height = "280px";
        ELEM.style.border = "1px solid black";
        ELEM.style.margin = "5px";
    
        const elemImg = document.createElement("img");
        elemImg.src = assignAttr[x].img;
        elemImg.style.width = "200px";
        elemImg.style.height = "180px";
        ELEM.appendChild(elemImg);
    
        const elemSpan = document.createElement("span");
        elemSpan.innerHTML = assignAttr[x].desc;
        elemSpan.style.fontSize = "25px";
        elemSpan.style.color = "black";
        ELEM.appendChild(elemSpan);
        itemContainer.appendChild(ELEM);  

        const elemAnchor = document.createElement("a");
        ELEM.classList.add("main");
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
renderMain();

const renderSide = () => {
    for(let y = 0; y < getSideLen; y++) {
        const assignAttr = Object.values(sideFoods);
        const ELEM = document.createElement("div");
        ELEM.classList.add("side")
        ELEM.style.position = "relative";
        ELEM.style.width = "200px";
        ELEM.style.height = "280px";
        ELEM.style.border = "1px solid black";
        ELEM.style.margin = "5px";
    
        const elemImg = document.createElement("img");
        elemImg.src = assignAttr[y].img;
        elemImg.style.width = "200px";
        elemImg.style.height = "200px";
        ELEM.appendChild(elemImg);
    
        const elemSpan = document.createElement("span");
        elemSpan.innerHTML = assignAttr[y].desc;
        elemSpan.style.fontSize = "25px";
        elemSpan.style.color = "black";
        ELEM.appendChild(elemSpan);
    
        const elemAnchor = document.createElement("a");
        elemAnchor.classList.add("side");
        elemAnchor.style.display = "block";
        elemAnchor.style.position = "absolute";
        elemAnchor.style.top = "0";
        elemAnchor.style.width = "100%";
        elemAnchor.style.height = "100%";
        elemAnchor.href = assignAttr[y].URLs;
        ELEM.appendChild(elemAnchor);

        itemContainer.appendChild(ELEM);  
        
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
renderSide();



const getSorter = document.querySelectorAll("ul#sortType > li");
console.log(getSorter);

const sorterFunc = () => {
    getSorter.forEach(functions = (sort) => {
        sort.addEventListener("mouseover", adjust = () => {
            sort.style.cursor = "pointer";
            sort.style.backgroundColor = "grey";
        });
        sort.addEventListener("mouseout", revert = () => {
            sort.style.cursor = "none";
            sort.style.backgroundColor = "white";
            sort.style.opacity = "1";
        });
        sort.addEventListener("click", test = () => {
            let getItemList = document.querySelector("div.itemContainer");
            let getPresent = document.querySelectorAll("div.itemContainer > div");
            if(sort.classList.contains("all")) {
                getPresent.forEach((toRemove) => {
                    getItemList.removeChild(toRemove);
                });
                renderMain();
                renderSide();
            }
            else if(sort.classList.contains("main")) {
                getPresent.forEach((toRemove) => {
                    getItemList.removeChild(toRemove);
                });
                renderMain();
            }
            else if(sort.classList.contains("side")) {
                getPresent.forEach((toRemove) => {
                    getItemList.removeChild(toRemove);
                });
                renderSide();
            };
        });
    });
};
sorterFunc();




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
