const zBox = document.querySelector('.list')

pokemons.forEach((element, index, array) => {
  let newLi = document.createElement("li")
      newImg = document.createElement("img")
      newHeading = document.createElement("h2")
      newDesc = document.createElement("p")
      newWeight = document.createElement("p")

        
  newImg.setAttribute('src', element.img)
  newHeading.textContent = element.name
  newDesc.textContent = element.type
  newWeight.textContent = element.weight


  newLi.style.cssText = 'border:1px solid; padding:20px'
  
  newLi.appendChild(newImg);
  newLi.appendChild(newHeading)
  newLi.appendChild(newDesc)
  newLi.appendChild(newWeight)
  zBox.appendChild(newLi)

})
