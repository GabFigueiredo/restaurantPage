export function createMenu() { 
    const content = document.getElementById("content")
    const removeContainer = document.getElementById("removeContainer")
    content.removeChild(removeContainer)

    const container = document.createElement("div")
    container.classList.add("container")
    container.setAttribute("id", "removeContainer")
    content.appendChild(container)

    const foodContainer = document.createElement("div")
    foodContainer.classList.add("foodContainer")

    const foodContainer2 = document.createElement("div")
    foodContainer2.classList.add("foodContainer")

    const foodContainer3 = document.createElement("div")
    foodContainer3.classList.add("foodContainer")


    const foods1 = ["Scrambled Eggs", "Oatmeal", "Fresh fuit"]
    const foods2 = ["Smoked Salmon", "Oatmeal", "Fresh fuit"]
    const foods3 = ["Scrambled Eggs", "Oatmeal", "Fresh fuit"]
    
    const firstTitle = document.createElement("h2")
    firstTitle.textContent = "Breakfast"
    container.appendChild(firstTitle)

    foods1.forEach(element => {
        const foodParagraph = document.createElement("p")
        foodParagraph.textContent = element
        foodContainer.appendChild(foodParagraph)
        container.appendChild(foodContainer)
    })

    const secondTitle = document.createElement("h2")
    secondTitle.textContent = "Lunch"
    container.appendChild(secondTitle)
    
    foods2.forEach(element => {
        const foodParagraph = document.createElement("p")
        foodParagraph.textContent = element
        foodContainer2.appendChild(foodParagraph)
        container.appendChild(foodContainer2)
    })

    const thirdTitle = document.createElement("h2")
    thirdTitle.textContent = "Dinner"
    container.appendChild(thirdTitle)
    
    foods3.forEach(element => {
        const foodParagraph = document.createElement("p")
        foodParagraph.textContent = element
        foodContainer3.appendChild(foodParagraph)
        container.appendChild(foodContainer3)
    }) 
}



    