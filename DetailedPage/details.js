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
let mainFoods = {
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

let sideFoods = {
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
        URLs: "../PageContainer/Side_5.html",
    },

    side_6: {
        img: "../ImgContainer/Side_6.jpg",
        desc: "Spinach Strawberry Walnut Salad",
        URLs: "../PageContainer/Side_6.html",
    },

    side_7: {
        img: "../ImgContainer/Side_7.jpg",
        desc: "Vegetarian Cassoulet",
        URLs: "../PageContainer/Side_7.html",
    },

    side_8: {
        img: "../ImgContainer/Side_8.jpg",
        desc: "Mediterranean Rice",
        URLs: "../PageContainer/Side_8.html",
    },
};

function RNRDefault() {
    localStorage.removeItem("mainList");
    localStorage.removeItem("sideList");

    localStorage.setItem("mainList", JSON.stringify(mainFoods));
    let mainLS = localStorage.getItem("mainList");
    mainLS = JSON.parse(mainLS);

    localStorage.setItem("sideList", JSON.stringify(sideFoods));
    let sideLS = localStorage.getItem("sideList");
    sideLS = JSON.parse(sideLS);    
};
//RNRDefault();

const itemContainer = document.querySelector("div.itemContainer");
const renderMain = () => {
    let getMain = localStorage.getItem("mainList");
    getMainLS = JSON.parse(getMain);
    let getMainLen = Object.keys(getMainLS).length;
    for(let x = 0; x < getMainLen; ++x) {
        const assignAttr = Object.values(getMainLS);
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
        elemImg.style.width = "200px";
        elemImg.style.height = "200px";
        elemImg.style.borderBottom = "1px solid black";
        elemImg.src = assignAttr[x].img;
        elemImg.alt = "NONE";
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
    let getSide = localStorage.getItem("sideList");
    getSideLS = JSON.parse(getSide);
    let getSideLen = Object.keys(getSideLS).length;
    for(let y = 0; y < getSideLen; y++) {
        const assignAttr = Object.values(getSideLS);
        const ELEM = document.createElement("div");
        ELEM.classList.add("side")
        ELEM.style.position = "relative";
        ELEM.style.display = "flex";
        ELEM.style.flexDirection = "column";
        ELEM.style.alignItems = "center";
        ELEM.style.width = "200px";
        ELEM.style.height = "280px";
        ELEM.style.border = "1px solid black";
        ELEM.style.margin = "5px";
    
        const elemImg = document.createElement("img");
        elemImg.style.width = "200px";
        elemImg.style.height = "200px";
        elemImg.style.borderBottom = "1px solid black";
        elemImg.src = assignAttr[y].img;
        elemImg.alt = "NONE";
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


function addFunc() {
    const addBtn = document.getElementById("addItem");
    addBtn.addEventListener("mouseover", execFunc = () => {
        isMouseOver = 1
        addBtn.style.backgroundColor = "grey";
    });
    addBtn.addEventListener("mouseout", execFunc = () => {
        isMouseOver = 1
        addBtn.style.backgroundColor = "whitesmoke";
    });

    let isPresent = 0;
    addBtn.addEventListener("click", execFunc = () => {
        const getContainer = document.querySelector("div.formContainer");
        if(isPresent == 0) {
            let form = document.createElement("form");
            form.classList.add("addedForm");
            {
                form.style.position = "absolute";
                form.style.top = "280px";
                form.style.right = "50px";
                form.style.display = "flex";
                form.style.flexDirection = "column";
                form.style.alignItems = "center";
                form.style.border = "2px solid black";
                form.style.borderRadius = "10px";
                form.style.backgroundColor = "white";
                form.style.width = "400px";
                form.style.height = "450px";
                form.style.zIndex = "1";
                getContainer.appendChild(form);
                
                {
                    let inputField1 = document.createElement("input");
                    inputField1.setAttribute("id", "img-urls");
                    inputField1.setAttribute("type", "text");
                    inputField1.setAttribute("placeholder", "Image URLs...");
                    {
                        inputField1.style.fontSize = "20px";
                        inputField1.style.width = "80%";
                        inputField1.style.height = "20px";
                        inputField1.style.padding = "10px";
                        inputField1.style.margin = "40px 0 20px";
                        inputField1.style.border = "2px solid black";
                        inputField1.style.borderRadius = "10px";         
                    }
                    form.appendChild(inputField1);
                };

                {
                    let inputField2 = document.createElement("input");
                    inputField2.setAttribute("id", "item-name");
                    inputField2.setAttribute("type", "text");
                    inputField2.setAttribute("placeholder", "Name...");
                    {
                        inputField2.style.fontSize = "20px";
                        inputField2.style.width = "80%";
                        inputField2.style.height = "25px";
                        inputField2.style.padding = "10px";
                        inputField2.style.margin = "10px 0";
                        inputField2.style.border = "2px solid black";
                        inputField2.style.borderRadius = "10px";         
                    }
                    form.appendChild(inputField2);
                };

                {
                    let inputField3 = document.createElement("textarea");
                    inputField3.setAttribute("id", "item-desc");
                    inputField3.setAttribute("rows", "8");
                    inputField3.setAttribute("cols", "30");
                    inputField3.setAttribute("placeholder", "Description...");
                    {
                        inputField3.style.fontSize = "20px";
                        inputField3.style.padding = "10px";
                        inputField3.style.margin = "10px 0";     
                    }
                    form.appendChild(inputField3);
                };

                {
                    let inputField4 = document.createElement("input");
                    inputField4.setAttribute("id", "item-type");
                    inputField4.setAttribute("type", "text");
                    inputField4.setAttribute("placeholder", "Type...");
                    {
                        inputField4.style.fontSize = "20px";
                        inputField4.style.width = "40%";
                        inputField4.style.height = "25px";
                        inputField4.style.padding = "10px";
                        inputField4.style.margin = "10px 0";
                        inputField4.style.border = "2px solid black";
                        inputField4.style.borderRadius = "10px";         
                    }
                    form.appendChild(inputField4);
                };

                {
                    let submitBtn = document.createElement("div");
                    let btnText = document.createElement("span");
                    btnText.textContent = "Submit";
                    {
                        btnText.style.fontSize = "30px";
                    };
                    {
                        submitBtn.style.display = "flex";
                        submitBtn.style.justifyContent = "center";
                        submitBtn.style.alignItems = "center";
                        submitBtn.style.width = "30%";
                        submitBtn.style.height = "25px";
                        submitBtn.style.padding = "10px";
                        submitBtn.style.margin = "10px 0";
                        submitBtn.style.border = "2px solid black";
                        submitBtn.style.borderRadius = "10px";       
                        submitBtn.style.backgroundColor = "whitesmoke"; 

                        submitBtn.addEventListener("mouseover", execFunc = () =>{
                            submitBtn.style.cursor = "pointer";
                        });
                        submitBtn.addEventListener("click", execFunc = () => {
                            let getImg = document.getElementById("img-urls").value;
                            let getName = document.getElementById("item-name").value;
                            let getDesc = document.getElementById("item-desc").value;
                            let getType = document.getElementById("item-type").value;
                            let finalizeType = getType.toUpperCase();
                            function TEST() {
                                if(finalizeType.includes("MAIN")) {
                                    let getItemList = document.querySelector("div.itemContainer");
                                    let getPresent = document.querySelectorAll("div.itemContainer > div.main");
                                    getPresent.forEach((toRemove) => {
                                        getItemList.removeChild(toRemove);
                                    });
                                    let getMainLen = Object.keys(mainFoods).length;
                                    let itemAttr = {img: getImg, desc: getName, URLs: "#"};
                                    mainFoods["Main_" + (getMainLen + 1)] = itemAttr;
                                    let mainList = localStorage.setItem("mainList", JSON.stringify(mainFoods));
                                    //let sideList = localStorage.setItem("sideList", JSON.stringify(sideFoods));
                                    let mainListLS = localStorage.getItem("mainList");
                                    //let sideListLS = localStorage.getItem("sideList");
                                    mainListLS = JSON.parse(mainListLS);
                                   //sideListLS = JSON.parse(sideListLS);
                                    renderMain();
                                }
                                else if(finalizeType.toUpperCase().includes("SIDE")) {
                                    let getItemList = document.querySelector("div.itemContainer");
                                    let getPresent = document.querySelectorAll("div.itemContainer > div.side");
                                    getPresent.forEach((toRemove) => {
                                        getItemList.removeChild(toRemove);
                                    });
                                    let getSideLen = Object.keys(sideFoods).length;
                                    let itemAttr = {img: getImg, desc: getName, URLs: "#"};
                                    sideFoods["Side_" + (getSideLen + 1)] = itemAttr;
                                    //let mainList = localStorage.setItem("mainList", JSON.stringify(mainFoods));
                                    let sideList = localStorage.setItem("sideList", JSON.stringify(sideFoods));
                                    //let mainListLS = localStorage.getItem("mainList");
                                    let sideListLS = localStorage.getItem("sideList");
                                    //mainListLS = JSON.parse(mainListLS);
                                    sideListLS = JSON.parse(sideListLS);
                                    renderSide();
                                }

                                else {
                                    window.alert("Invalid");
                                };
                            };
                            TEST();
                        });
                    };
                    submitBtn.appendChild(btnText);
                    form.appendChild(submitBtn);
                };
            };
            isPresent = 1;
        }
        else if(isPresent != 0) {
            let toRemove = document.querySelector("form.addedForm");
            toRemove.remove();
            isPresent = 0;
        };
    });  
};
addFunc();






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
