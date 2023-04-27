const zBox = document.querySelector('.list')
      zSelect = document.querySelector('#select')

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


let filterBox = []

pokemons.forEach(value => {
  value.type.forEach(item => {
    if(!filterBox.includes(item)) {
      filterBox.push(item)
    }
  })
})

filterBox.forEach(item => {
  let zOption = document.createElement('option')
  
  zOption.setAttribute('value', item)
  zOption.textContent = item

  zSelect.appendChild(zOption)
})

  const changeSelect = (e) => {
    zBox.innerHTML = null;
    pokemons.map((value) => {
      if(value.type.includes(e.target.value)) {
        let newLi = document.createElement("li")
      newImg = document.createElement("img")
      newHeading = document.createElement("h2")
      newDesc = document.createElement("p")
      newWeight = document.createElement("p")

      newImg.setAttribute('src', value.img)
      newHeading.textContent = value.name
      newDesc.textContent = value.type
      newWeight.textContent = value.weight


      newLi.style.cssText = 'border:1px solid; padding:20px'
      
      newLi.appendChild(newImg);
      newLi.appendChild(newHeading)
      newLi.appendChild(newDesc)
      newLi.appendChild(newWeight)
      zBox.appendChild(newLi)
      }
    })
  }

  zSelect.addEventListener('change', changeSelect)