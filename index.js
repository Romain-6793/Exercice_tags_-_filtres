import { objects } from "./objects.js"
import { objectsFactory } from "./factories.js"

const colourDropdown = document.querySelector(".colour-dropdown")
const shapeDropdown = document.querySelector(".shape-dropdown")
const sizeDropdown = document.querySelector(".size-dropdown")
const objectsSectionFlex = document.querySelector(".os-flex")
const tagFlex = document.querySelector(".tag-flex")
const resetBtn = document.querySelector(".reset-btn")


let colourFilter = []
let shapeFilter = []
let sizeFilter = []
let activeFilters = []
let tagsArray = []




function displayObjects(data) {


    data.forEach((object) => {
        const objectsSection2 = objectsFactory(object);
        const userObjects = objectsSection2.getUserObject();
        objectsSectionFlex.appendChild(userObjects);

    })
}

// function resetTags() {
//     document.querySelectorAll(".tag").forEach(function (tag) {
//         tag.parentElement.removeChild(tag)
//     })
// }

function launchFilterByColour() {
    colourDropdown.addEventListener("change", (e) => {
        if (e.target.value === "red") {
            redFilter(objects)
            if (!document.getElementById("red-tag")) {
                const redTag = tagFlex.appendChild(createTag("Rouge"))
                redTag.setAttribute("id", "red-tag")
                tagsArray.push(redTag)
                console.log(tagsArray)
            }
        }
        if (e.target.value === "orange") {
            orangeFilter(objects)
            if (!document.getElementById("orange-tag")) {
                const orangeTag = tagFlex.appendChild(createTag("Orange"))
                orangeTag.setAttribute("id", "orange-tag")
                tagsArray.push(orangeTag)
            }
        }
        if (e.target.value === "green") {
            greenFilter(objects)
            if (!document.getElementById("green-tag")) {
                const greenTag = tagFlex.appendChild(createTag("Vert"))
                greenTag.setAttribute("id", "green-tag")
                tagsArray.push(greenTag)
            }
        }

    })
}

function launchFilterBySize() {
    sizeDropdown.addEventListener("change", (e) => {
        if (e.target.value === "small") {
            smallFilter(objects)
            if (!document.getElementById("small-tag")) {
                const smallTag = tagFlex.appendChild(createTag("Petit"))
                smallTag.setAttribute("id", "small-tag")
                tagsArray.push(smallTag)

            }
        }
        if (e.target.value === "medium") {
            mediumFilter(objects)
            if (!document.getElementById("medium-tag")) {
                const mediumTag = tagFlex.appendChild(createTag("Moyen"))
                mediumTag.setAttribute("id", "medium-tag")
                tagsArray.push(mediumTag)

            }
        }
        if (e.target.value === "large") {
            largeFilter(objects)
            if (!document.getElementById("large-tag")) {
                const largeTag = tagFlex.appendChild(createTag("Grand"))
                largeTag.setAttribute("id", "large-tag")
                tagsArray.push(largeTag)

            }
        }

    })
}

function launchFilterByShape() {
    shapeDropdown.addEventListener("change", (e) => {
        if (e.target.value === "circle") {
            circleFilter(objects)

            if (!document.getElementById("circle-tag")) {
                const circleTag = tagFlex.appendChild(createTag("Cercle"))
                circleTag.setAttribute("id", "circle-tag")
                tagsArray.push(circleTag)
            }
        }
        if (e.target.value === "rectangle") {
            rectangleFilter(objects)

            if (!document.getElementById("rectangle-tag")) {
                const rectangleTag = tagFlex.appendChild(createTag("Rectangle"))
                rectangleTag.setAttribute("id", "rectangle-tag")
                tagsArray.push(rectangleTag)
            }
        }
        if (e.target.value === "square") {
            squareFilter(objects)

            if (!document.getElementById("square-tag")) {
                const squareTag = tagFlex.appendChild(createTag("Carré"))
                squareTag.setAttribute("id", "square-tag")
                tagsArray.push(squareTag)
            }
        }

    })
}

function redFilter(objArr) {
    let redObjects = objArr.filter(littleObj => littleObj.colour === "red")

    changeSection()
    displayObjects(redObjects)
    if (colourFilter !== []) {
        colourFilter = []
    }
    colourFilter.push(redObjects)
    console.log(colourFilter)
    setActiveFilters()
    console.log(activeFilters)
    changeSection()
    // simplifyArr(activeFilters)
    displayObjects(activeFilters)

}

function orangeFilter(objArr) {
    let orangeObjects = objArr.filter(littleObj => littleObj.colour === "orange")


    changeSection()
    displayObjects(orangeObjects)
    if (colourFilter !== []) {
        colourFilter = []
    }
    colourFilter.push(orangeObjects)
    console.log(colourFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function greenFilter(objArr) {
    let greenObjects = objArr.filter(littleObj => littleObj.colour === "green")


    changeSection()
    displayObjects(greenObjects)
    if (colourFilter !== []) {
        colourFilter = []
    }
    colourFilter.push(greenObjects)
    console.log(colourFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function smallFilter(objArr) {
    let smallObjects = objArr.filter(littleObj => littleObj.size === "small")


    changeSection()
    displayObjects(smallObjects)
    if (sizeFilter !== []) {
        sizeFilter = []
    }
    sizeFilter.push(smallObjects)
    console.log(sizeFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function mediumFilter(objArr) {
    let mediumObjects = objArr.filter(littleObj => littleObj.size === "medium")


    changeSection()
    displayObjects(mediumObjects)
    if (sizeFilter !== []) {
        sizeFilter = []
    }
    sizeFilter.push(mediumObjects)
    console.log(sizeFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function largeFilter(objArr) {
    let largeObjects = objArr.filter(littleObj => littleObj.size === "large")


    changeSection()
    displayObjects(largeObjects)
    if (sizeFilter !== []) {
        sizeFilter = []
    }
    sizeFilter.push(largeObjects)
    console.log(sizeFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function circleFilter(objArr) {
    let circleObjects = objArr.filter(littleObj => littleObj.shape === "circle")

    changeSection()
    displayObjects(circleObjects)
    if (shapeFilter !== []) {
        shapeFilter = []
    }
    shapeFilter.push(circleObjects)
    console.log(shapeFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function rectangleFilter(objArr) {
    let rectangleObjects = objArr.filter(littleObj => littleObj.shape === "rectangle")


    changeSection()
    displayObjects(rectangleObjects)
    if (shapeFilter !== []) {
        shapeFilter = []
    }
    shapeFilter.push(rectangleObjects)
    console.log(shapeFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function squareFilter(objArr) {
    let squareObjects = objArr.filter(littleObj => littleObj.shape === "square")


    changeSection()
    displayObjects(squareObjects)
    if (shapeFilter !== []) {
        shapeFilter = []
    }
    shapeFilter.push(squareObjects)
    console.log(shapeFilter)
    setActiveFilters()
    console.log(activeFilters)
}

function changeSection() {
    objectsSectionFlex.innerHTML = ""
}

function createTag(label) {
    const div = document.createElement("div")
    div.setAttribute("class", "tag")
    const span = document.createElement("span")
    span.innerHTML = label
    const closeBtn = document.createElement("i")
    closeBtn.classList.add("fas")
    closeBtn.classList.add("fa-times")
    closeBtn.classList.add("close-button")
    closeBtn.setAttribute("data-item", label)
    closeBtn.addEventListener("click", closeTag)

    function closeTag(e) {
        closeBtn.parentElement.remove()
        const value = e.target.getAttribute("data-item")
        const index = tagsArray.indexOf(value)
        console.log(index)
        tagsArray.splice(index, 1)
        console.log(tagsArray)
    }

    div.appendChild(span)
    div.appendChild(closeBtn)

    return div
}

resetBtn.addEventListener("click", resetDisplayObjects)

function resetDisplayObjects() {
    changeSection()
    displayObjects(objects)
}

function setActiveFilters() {
    if (colourFilter === [] && sizeFilter === [] && shapeFilter === []) {
        activeFilters = []
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter !== [] && sizeFilter === [] && shapeFilter === []) {
        activeFilters = [colourFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter === [] && sizeFilter !== [] && shapeFilter === []) {
        activeFilters = [sizeFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter === [] && sizeFilter === [] && shapeFilter !== []) {
        activeFilters = [shapeFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter !== [] && sizeFilter !== [] && shapeFilter === []) {
        activeFilters = [colourFilter, sizeFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter !== [] && sizeFilter === [] && shapeFilter !== []) {
        activeFilters = [colourFilter, shapeFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter === [] && sizeFilter !== [] && shapeFilter !== []) {
        activeFilters = [sizeFilter, shapeFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }
    if (colourFilter !== [] && sizeFilter !== [] && shapeFilter !== []) {
        activeFilters = [colourFilter, sizeFilter, shapeFilter]
        activeFilters = simplifyArr(activeFilters)
        activeFilters = simplifyArr(activeFilters)
    }

}

function simplifyArr(arr = []) {
    const res = []
    arr.forEach(element => {
        element.forEach(el => {
            res.push(el);
        });
    });
    return res;
}


// document.addEventListener("click", function (e) {
//     if (e.target.tagName === "I") {
//         const value = e.target.getAttribute("data-item")
//         const index = tagsArray.indexOf(value)
//         tagsArray = [...tagsArray.slice(0, index), ...tagsArray.slice(index + 1)]
//     }
// })

function init() {
    displayObjects(objects)
    setActiveFilters()
    resetDisplayObjects()
    launchFilterByColour()
    launchFilterBySize()
    launchFilterByShape()

}

init()