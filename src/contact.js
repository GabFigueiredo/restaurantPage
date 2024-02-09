export function createContact() { 

    const content = document.getElementById("content")
    const removeContainer = document.getElementById("removeContainer")
    content.removeChild(removeContainer) // Remove o container

    const container = document.createElement("div")
    container.classList.add("container")
    container.setAttribute("id", "removeContainer");

    const phone = document.createElement("h3");
    phone.textContent = "Phone";
    container.appendChild(phone)

    const number = document.createElement("p");
    number.textContent = "+55 11 792238463"
    container.appendChild(number)

    const website = document.createElement("h3");
    website.textContent = "Website";
    container.appendChild(website)

    const adress = document.createElement("p");
    adress.textContent = "theodinproject.com.br"
    container.appendChild(adress)

    content.appendChild(container) // Adiciona o container

}
