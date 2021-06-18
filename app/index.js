// Global constants
const URL = 'http://localhost:3000/furniture'
const furnitureList = document.querySelector('ul')
let furnitureArray

// step one: fetch all furniture

fetch(URL)
.then(response => response.json())
.then(fetchedFurniture => {
  furnitureArray = fetchedFurniture
  // step two: add all furniture to the ul

  furnitureArray.forEach(furniture => {
    const li = document.createElement('li')
    li.textContent = furniture.name
    li.dataset.id = furniture.id
    furnitureList.append(li)
  })

})




// step three: ???
