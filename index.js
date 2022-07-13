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
// let activeFilters = []
let tagsArray = []
let dynamicObjects = [...objects]

// let filterRedObjects = objects.filter((figure) => figure.colour.includes('red'))
// console.log(filterRedObjects)
// let filterOrangeObjects = objects.filter((figure) => figure.colour.includes('orange'))
// console.log(filterOrangeObjects)
// let filterGreenObjects = objects.filter((figure) => figure.colour.includes('green'))
// console.log(filterGreenObjects)
// let filterCircleObjects = objects.filter((figure) => figure.shape.includes('circle'))
// console.log(filterCircleObjects)
// let filterRecObjects = objects.filter((figure) => figure.shape.includes('rectangle'))
// console.log(filterRecObjects)
// let filterSquareObjects = objects.filter((figure) => figure.shape.includes('square'))
// console.log(filterSquareObjects)
// let filterSObjects = objects.filter((figure) => figure.size.includes('small'))
// console.log(filterSObjects)
// let filterMObjects = objects.filter((figure) => figure.size.includes('medium'))
// console.log(filterMObjects)
// let filterLObjects = objects.filter((figure) => figure.size.includes('large'))
// console.log(filterLObjects)


// let filterRedCircleObjects = objects.filter((figure) => figure.colour.includes('red') && figure.shape.includes('circle'))
// console.log(filterRedCircleObjects)
// let filterRedRecObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle'))
// console.log(filterRedRecObjects)
// let filterRedSquareObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle'))
// console.log(filterRedSquareObjects)

// let filterRedSObjects = objects.filter((figure) => figure.colour.includes('red') && figure.size.includes('small'))
// console.log(filterRedSObjects)
// let filterRedMObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.size.includes('medium'))
// console.log(filterRedMObjects)
// let filterRedLObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.size.includes('large'))
// console.log(filterRedLObjects)


// let filterRedCircleSObjects = objects.filter((figure) => figure.colour.includes('red') && figure.shape.includes('circle') && figure.size.includes('small'))
// console.log(filterRedCircleSObjects)
// let filterRedCircleMObjects = objects.filter((figure) => figure.colour.includes('red') && figure.shape.includes('circle') && figure.size.includes('medium'))
// console.log(filterRedCircleMObjects)
// let filterRedCircleLObjects = objects.filter((figure) => figure.colour.includes('red') && figure.shape.includes('circle') && figure.size.includes('large'))
// console.log(filterRedCircleLObjects)
// let filterRedRecSObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle') && figure.size.includes('small'))
// console.log(filterRedRecSObjects)
// let filterRedRecMObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle') && figure.size.includes('medium'))
// console.log(filterRedRecMObjects)
// let filterRedRecLObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle') && figure.size.includes('large'))
// console.log(filterRedRecLObjects)
// let filterRedSquareSObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle') && figure.size.includes('small'))
// console.log(filterRedSquareSObjects)
// let filterRedSquareMObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle') && figure.size.includes('medium'))
// console.log(filterRedSquareMObjects)
// let filterRedSquareLObjects = objects.filter((figure) => figure.colour.includes('rectangle') && figure.shape.includes('circle') && figure.size.includes('large'))
// console.log(filterRedSquareLObjects)

if (document.getElementById("red-tag")) {
    console.log("hello")
}



function displayObjects(data) {


    data.forEach((object) => {
        const objectsSection2 = objectsFactory(object);
        const userObject = objectsSection2.getUserObject();
        objectsSectionFlex.appendChild(userObject);

    })

}


function launchFilterByColour() {
    colourDropdown.addEventListener("change", (e) => {
        if (e.target.value === "red") {
            // redFilter()

            if (!document.getElementById("red-tag")) {
                const redTag = tagFlex.appendChild(createTag("Rouge", "red"))
                redTag.setAttribute("id", "red-tag")
                tagsArray.push(redTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByColourTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }


        }
        if (e.target.value === "orange") {
            // orangeFilter(dynamicObjects)
            if (!document.getElementById("orange-tag")) {
                const orangeTag = tagFlex.appendChild(createTag("Orange", "orange"))
                orangeTag.setAttribute("id", "orange-tag")
                tagsArray.push(orangeTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByColourTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }
        if (e.target.value === "green") {
            // greenFilter(dynamicObjects)
            if (!document.getElementById("green-tag")) {
                const greenTag = tagFlex.appendChild(createTag("Vert", "green"))
                greenTag.setAttribute("id", "green-tag")
                tagsArray.push(greenTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByColourTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }

    })
}

function launchFilterBySize() {
    sizeDropdown.addEventListener("change", (e) => {
        if (e.target.value === "small") {
            // smallFilter(dynamicObjects)
            if (!document.getElementById("small-tag")) {
                const smallTag = tagFlex.appendChild(createTag("Petit", "small"))
                smallTag.setAttribute("id", "small-tag")
                tagsArray.push(smallTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterBySizeTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }
        }
        if (e.target.value === "medium") {
            // mediumFilter(dynamicObjects)
            if (!document.getElementById("medium-tag")) {
                const mediumTag = tagFlex.appendChild(createTag("Moyen", "medium"))
                mediumTag.setAttribute("id", "medium-tag")
                tagsArray.push(mediumTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterBySizeTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }
        }
        if (e.target.value === "large") {
            // largeFilter(dynamicObjects)
            if (!document.getElementById("large-tag")) {
                const largeTag = tagFlex.appendChild(createTag("Grand", "large"))
                largeTag.setAttribute("id", "large-tag")
                tagsArray.push(largeTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterBySizeTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }
        }

    })
}

function launchFilterByShape() {
    shapeDropdown.addEventListener("change", (e) => {
        if (e.target.value === "circle") {
            // circleFilter(dynamicObjects)

            if (!document.getElementById("circle-tag")) {
                const circleTag = tagFlex.appendChild(createTag("Cercle", "circle"))
                circleTag.setAttribute("id", "circle-tag")
                tagsArray.push(circleTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByShapeTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }
        if (e.target.value === "rectangle") {
            // rectangleFilter(dynamicObjects)

            if (!document.getElementById("rectangle-tag")) {
                const rectangleTag = tagFlex.appendChild(createTag("Rectangle", "rectangle"))
                rectangleTag.setAttribute("id", "rectangle-tag")
                tagsArray.push(rectangleTag)
            }
            console.log(tagsArray)
            tagsArray.forEach((tag) => {
                dynamicObjects = filterByShapeTags(dynamicObjects, tag);
                console.log(dynamicObjects)
            });

            changeSection()

            displayObjects(dynamicObjects)
        }
        if (e.target.value === "square") {
            // squareFilter(dynamicObjects)

            if (!document.getElementById("square-tag")) {
                const squareTag = tagFlex.appendChild(createTag("Carré", "square"))
                squareTag.setAttribute("id", "square-tag")
                tagsArray.push(squareTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByShapeTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }

    })
}

function redFilter() {
    // let redObjects = objArr.filter(littleObj => littleObj.colour === "red")

    if (tagsArray.redTag) {
        console.log(dynamicObjects)
        console.log(redTag.dataset.property)

        tagsArray.forEach((tag) => {
            dynamicObjects = filterByTags(dynamicObjects, tag);
            console.log(dynamicObjects)
        });

        changeSection()

        displayObjects(dynamicObjects)
        // displayObjects(redObjects)

        if (colourFilter !== []) {
            colourFilter = []
        }
        colourFilter.push(redObjects)
        console.log(colourFilter)
        // setActiveFilters()
        // console.log(activeFilters)
        // changeSection()
        // // simplifyArr(activeFilters)
        // displayObjects(activeFilters)

    }


}

function orangeFilter(objArr) {
    let orangeObjects = objArr.filter(littleObj => littleObj.colour === "orange")



    changeSection()
    displayObjects(orangeObjects)
    // if (colourFilter !== []) {
    //     colourFilter = []
    // }
    // colourFilter.push(orangeObjects)
    // console.log(colourFilter)
    // setActiveFilters()
    // console.log(activeFilters)
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
    // setActiveFilters()
    // console.log(activeFilters)
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
    // setActiveFilters()
    // console.log(activeFilters)
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
    // setActiveFilters()
    // console.log(activeFilters)
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
    // setActiveFilters()
    // console.log(activeFilters)
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
    // setActiveFilters()
    // console.log(activeFilters)
}

function rectangleFilter(objArr) {
    let rectangleObjects = objArr.filter(littleObj => littleObj.shape === "rectangle")

    changeSection()
    displayObjects(rectangleObjects)
    if (shapeFilter !== []) {
        shapeFilter = []
    }
    // shapeFilter.push(rectangleObjects)
    // console.log(shapeFilter)
    // setActiveFilters()
    // console.log(activeFilters)
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
    // setActiveFilters()
    // console.log(activeFilters)
}

function changeSection() {
    objectsSectionFlex.innerHTML = ""
}

function createTag(label, dataProperty) {
    const div = document.createElement("div")
    div.setAttribute("class", "tag")
    div.setAttribute("data-property", dataProperty)
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
    dynamicObjects = [...objects]
}

// function setActiveFilters() {
//     if (colourFilter === [] && sizeFilter === [] && shapeFilter === []) {
//         activeFilters = []
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter !== [] && sizeFilter === [] && shapeFilter === []) {
//         activeFilters = [colourFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter === [] && sizeFilter !== [] && shapeFilter === []) {
//         activeFilters = [sizeFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter === [] && sizeFilter === [] && shapeFilter !== []) {
//         activeFilters = [shapeFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter !== [] && sizeFilter !== [] && shapeFilter === []) {
//         activeFilters = [colourFilter, sizeFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter !== [] && sizeFilter === [] && shapeFilter !== []) {
//         activeFilters = [colourFilter, shapeFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter === [] && sizeFilter !== [] && shapeFilter !== []) {
//         activeFilters = [sizeFilter, shapeFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }
//     if (colourFilter !== [] && sizeFilter !== [] && shapeFilter !== []) {
//         activeFilters = [colourFilter, sizeFilter, shapeFilter]
//         activeFilters = simplifyArr(activeFilters)
//         activeFilters = simplifyArr(activeFilters)
//     }

// }

// function simplifyArr(arr = []) {
//     const res = []
//     arr.forEach(element => {
//         element.forEach(el => {
//             res.push(el);
//         });
//     });
//     return res;
// }

function filterByColourTags(objectsList, tag) {
    const result = objectsList.filter((object) => object.colour.matches(tag.dataset.property));
    return result;

}

function filterByShapeTags(objectsList, tag) {
    const result = objectsList.filter((object) => object.colour.matches(tag.dataset.property));
    return result;

}

function filterBySizeTags(objectsList, tag) {
    const result = objectsList.filter((object) => object.colour.matches(tag.dataset.property));
    return result;

}


tagsArray.forEach((tag) => {
    dynamicObjects = filterByTags(dynamicObjects, tag);
    console.log(dynamicObjects)
});

function init() {
    // dynamicObjects.push(objects)
    console.log(dynamicObjects)
    displayObjects(dynamicObjects)
    // setActiveFilters()
    resetDisplayObjects()
    launchFilterByColour()
    launchFilterBySize()
    launchFilterByShape()

}

init()