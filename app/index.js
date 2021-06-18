// step zero: declare global variables //
const URL = 'http://localhost:3000/furniture'

const furnitureList = document.querySelector('ul')
const furnitureDetailsName = document.querySelector('#furniture-name')
const furnitureDetailsDescription = document.querySelector('#furniture-description')
const furnitureDetailsPrice = document.querySelector('#furniture-price')

let furnitureArray

// step one: fetch all furniture //
fetch(URL)
.then(response => response.json())
.then(fetchedFurniture => {
  furnitureArray = fetchedFurniture

  // BONUS: sort furniture by price
  furnitureArray.sort((a,b) => b.price - a.price)

  // step two: add all furniture to the ul
  addFurnitureToList(furnitureArray)
})

// step two: add all furniture to the ul //
function addFurnitureToList(furnitureArray) {
  furnitureArray.forEach(furniture => {
    const li = document.createElement('li')

    li.textContent = furniture.name
    li.dataset.id = furniture.id

    furnitureList.append(li)

    // step three: add click event for furniture item //
    li.addEventListener('click', inspectFurniture)
  })
}


// step three: add click event for furniture item //
function inspectFurniture(event) {
  // we can grab the necessary furniture's id based on the dataset we saved
  const id = parseInt(event.target.dataset.id)
  const foundFurniture = furnitureArray.find(furniture => furniture.id === id)

  // step four: add furniture details to the furniture inspector //
  fillFurnitureDetails(foundFurniture)

  // step five: style the furniture li so we know it's selected //
  highlightFurnitureLi(event.target)
}

// step four: add furniture details to the furniture inspector //
function fillFurnitureDetails(furniture) {
  furnitureDetailsName.textContent = furniture.name
  furnitureDetailsDescription.textContent = furniture.description
  furnitureDetailsPrice.textContent = `$${furniture.price}`
}

// step five: style the furniture li so we know it's selected //
function highlightFurnitureLi(li) {
  const listItems = furnitureList.querySelectorAll('li')

  Array.from(listItems).forEach(listItem => {
    listItem.style.background = listItem === li ? "orange" : ""
  });

}
