import { objects } from "./objects.js"
import { objectsFactory } from "./factories.js"

const colourDropdown = document.querySelector(".colour-dropdown")
const shapeDropdown = document.querySelector(".shape-dropdown")
const sizeDropdown = document.querySelector(".size-dropdown")
const objectsSectionFlex = document.querySelector(".os-flex")
const tagFlex = document.querySelector(".tag-flex")
const resetBtn = document.querySelector(".reset-btn")

let tagsArray = []
let dynamicObjects = [...objects]


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

            if (!document.getElementById("red-tag")) {
                const redTag = tagFlex.appendChild(createTag("Rouge", "red"))
                redTag.setAttribute("id", "red")
                tagsArray.push(redTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }


        }
        if (e.target.value === "orange") {

            if (!document.getElementById("orange-tag")) {
                const orangeTag = tagFlex.appendChild(createTag("Orange", "orange"))
                orangeTag.setAttribute("id", "orange")
                tagsArray.push(orangeTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }
        if (e.target.value === "green") {

            if (!document.getElementById("green-tag")) {
                const greenTag = tagFlex.appendChild(createTag("Vert", "green"))
                greenTag.setAttribute("id", "green")
                tagsArray.push(greenTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
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

            if (!document.getElementById("small-tag")) {
                const smallTag = tagFlex.appendChild(createTag("Petit", "small"))
                smallTag.setAttribute("id", "small")
                tagsArray.push(smallTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }
        }
        if (e.target.value === "medium") {

            if (!document.getElementById("medium-tag")) {
                const mediumTag = tagFlex.appendChild(createTag("Moyen", "medium"))
                mediumTag.setAttribute("id", "medium")
                tagsArray.push(mediumTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)

            }
        }
        if (e.target.value === "large") {

            if (!document.getElementById("large-tag")) {
                const largeTag = tagFlex.appendChild(createTag("Grand", "large"))
                largeTag.setAttribute("id", "large")
                tagsArray.push(largeTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
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

            if (!document.getElementById("circle-tag")) {
                const circleTag = tagFlex.appendChild(createTag("Cercle", "circle"))
                circleTag.setAttribute("id", "circle")
                tagsArray.push(circleTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }
        if (e.target.value === "rectangle") {

            if (!document.getElementById("rectangle-tag")) {
                const rectangleTag = tagFlex.appendChild(createTag("Rectangle", "rectangle"))
                rectangleTag.setAttribute("id", "rectangle")
                tagsArray.push(rectangleTag)
            }
            console.log(tagsArray)
            tagsArray.forEach((tag) => {
                dynamicObjects = filterByTags(dynamicObjects, tag);
                console.log(dynamicObjects)
            });

            changeSection()

            displayObjects(dynamicObjects)
        }
        if (e.target.value === "square") {

            if (!document.getElementById("square-tag")) {
                const squareTag = tagFlex.appendChild(createTag("Carré", "square"))
                squareTag.setAttribute("id", "square")
                tagsArray.push(squareTag)
                console.log(tagsArray)
                tagsArray.forEach((tag) => {
                    dynamicObjects = filterByTags(dynamicObjects, tag);
                    console.log(dynamicObjects)
                });

                changeSection()

                displayObjects(dynamicObjects)
            }
        }

    })
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
        tagsArray.forEach((tag) => {
            dynamicObjects = [...objects]
            dynamicObjects = filterByTags(dynamicObjects, tag);
            console.log(dynamicObjects)
        });

        changeSection()

        displayObjects(dynamicObjects)
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



function filterByTags(objectsList, tag) {
    const result = objectsList.filter((object) => object.colour.includes(tag.dataset.property)
        || object.shape.includes(tag.dataset.property)
        || object.size.includes(tag.dataset.property)
        || (object.colour.includes(tag.dataset.property) && object.shape.includes(tag.dataset.property))
        || (object.colour.includes(tag.dataset.property) && object.size.includes(tag.dataset.property))
        || (object.shape.includes(tag.dataset.property) && object.size.includes(tag.dataset.property))
        || (object.shape.includes(tag.dataset.property) && object.size.includes(tag.dataset.property) && object.colour.includes(tag.dataset.property))
    );
    return result;

}


function init() {

    console.log(dynamicObjects)
    displayObjects(dynamicObjects)
    resetDisplayObjects()
    launchFilterByColour()
    launchFilterBySize()
    launchFilterByShape()

}

init()