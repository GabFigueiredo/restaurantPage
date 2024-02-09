export function createHome() { 
    const content = document.getElementById("content")
    const removeContainer = document.getElementById("removeContainer")
    content.removeChild(removeContainer) // Remove o container

    const container = document.createElement("div")
    container.classList.add("container")
    container.setAttribute("id", "removeContainer");

    const title = document.createElement("h3");
    title.textContent = "Our Beautiful Restaurant";
    container.appendChild(title)

    const img = document.createElement("img");
    img.src = "../assets/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg"
    container.appendChild(img)

    const description = document.createElement("p");
    description.textContent = "Bem-vindo ao nosso restaurante, onde a arte da culinária encontra-se com a beleza da natureza! Localizado em um ambiente encantador, oferecemos uma experiência gastronômica excepcional para todos os que buscam sabores autênticos e um ambiente acolhedor"
    container.appendChild(description)

    content.appendChild(container) // Adiciona o container
}
