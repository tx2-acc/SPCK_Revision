// Header -> Navbar

// Header 
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
    window.location.href = "../main.html";
});

// Utilities 
const listElem = document.querySelectorAll("li.homepage, li.mainDish, li.sideDish");
listElem.forEach((Elem) => {
    Elem.addEventListener("click", test = () => {
        let pageURL = "Main_1.html";
        let pageURL2 = "../main.html";
        window.location.replace(pageURL2);
    });
    Elem.addEventListener("mouseover", test = () => {
        Elem.style.cursor = "pointer";
    });
});


// Content 
const elemContainer = document.querySelector("div.elemContainer");

const renderContent = () => {
    const contentHeader = ""
};

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
