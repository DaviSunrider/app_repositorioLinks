function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  //pega a tag img
  const img = document.querySelector("#profile img")

  //substitui a imagem
  if (html.classList.contains("ligth")) {
    //se estiver no ligth mode, adicionar imagem ligth
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se estiver em dark mode, adicinar imagem padrão
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
