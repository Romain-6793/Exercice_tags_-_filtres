
export function objectsFactory(data) {

    const { colour, shape, size } = data

    function getUserObject() {
        const div = document.createElement("div")
        div.classList.add("flex-objects")
        const checkboxColour = document.createElement("input")
        checkboxColour.setAttribute("type", "checkbox")
        checkboxColour.setAttribute("class", "checkbox")
        const checkboxShape = document.createElement("input")
        checkboxShape.setAttribute("type", "checkbox")
        checkboxShape.setAttribute("class", "checkbox")
        const checkboxSize = document.createElement("input")
        checkboxSize.setAttribute("type", "checkbox")
        checkboxSize.setAttribute("class", "checkbox")
        div.appendChild(checkboxColour)
        div.appendChild(checkboxShape)
        div.appendChild(checkboxSize)

        if (colour === "red") {
            div.classList.add("red-objects")
            checkboxColour.classList.add("red-checkboxes")
        }
        if (colour === "orange") {
            div.classList.add("orange-objects")
            checkboxColour.classList.add("orange-checkboxes")
        }
        if (colour === "green") {
            div.classList.add("green-objects")
            checkboxColour.classList.add("green-checkboxes")
        }
        if (shape === "circle") {
            div.classList.add("circles")
            checkboxShape.classList.add("circle-checkboxes")
        }
        if (shape === "rectangle") {
            checkboxShape.classList.add("rectangle-checkboxes")
        }
        if (shape === "square") {
            checkboxShape.classList.add("square-checkboxes")
        }
        if (size === "small") {
            checkboxSize.classList.add("small-checkboxes")
        }
        if (size === "medium") {
            checkboxSize.classList.add("medium-checkboxes")
        }
        if (size === "large") {
            checkboxSize.classList.add("large-checkboxes")
        }
        if (shape === "circle" && size === "small") {
            div.classList.add("small-circles")
        }
        if (shape === "circle" && size === "medium") {
            div.classList.add("medium-circles")
        }
        if (shape === "circle" && size === "large") {
            div.classList.add("large-circles")
        }
        if (shape === "rectangle" && size === "small") {
            div.classList.add("small-rectangles")
        }
        if (shape === "rectangle" && size === "medium") {
            div.classList.add("medium-rectangles")
        }
        if (shape === "rectangle" && size === "large") {
            div.classList.add("large-rectangles")
        }
        if (shape === "square" && size === "small") {
            div.classList.add("small-squares")
        }
        if (shape === "square" && size === "medium") {
            div.classList.add("medium-squares")
        }
        if (shape === "square" && size === "large") {
            div.classList.add("large-squares")
        }


        return (div)
    }

    return { getUserObject }
}