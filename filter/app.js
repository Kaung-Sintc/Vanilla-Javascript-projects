const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      category: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      category: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      category: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      category: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      category: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      category: "Casual",
    },
  ]

  const search = document.querySelector('.search')
  const priceRange = document.querySelector('.price-range')
  const priceValue = document.querySelector('.price-value')
  const categoryContainer = document.querySelector('.categories')
  const productContainer = document.querySelector('.products')

    // display products in HTML
  const displayProducts = (filterProducts => {

    productContainer.innerHTML = filterProducts.map(product => `
    <!-- single item -->
        <div class="product">
            <img src="${product.img}" alt="${product.img}">
            <span class="name">${product.name}</span>
            <span class="product-price">$${product.price}</span>
        </div>
    <!-- end of single item -->
    `).join('')
  })

  displayProducts(data)

    // filter by name
search.addEventListener('keyup', (e) => {
    let searchKeyword = e.target.value.toLowerCase()
    
    if(searchKeyword) {
        displayProducts(data.filter(product => 
                        product.name.toLowerCase().indexOf(searchKeyword) !== -1))
    }else {
        displayProducts(data)
    }
})

// display categories
const displayCategories = () => {
    let categories = ['All', ... new Set(data.map(product => product.category))]

    categoryContainer.innerHTML = categories.map(category => `<span class="category">${category}</span>`).join("")
}

displayCategories()

// filter by category
categoryContainer.addEventListener('click', (e) => {
    e.target.textContent === 'All' ? displayProducts(data) : displayProducts(data.filter(item => item.category === e.target.textContent))
})


//display price and filter
const displayPrice = () => {
    const priceList = data.map(item => item.price)
    const maxPrice = Math.max(...priceList)
    const minPrice = Math.min(priceList)

    //  set values input range attributes dynamically
    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceValue.textContent = "$" + maxPrice

    priceRange.addEventListener('input', (e) => {
        priceValue.textContent = "$" + e.target.value

        displayProducts(data.filter(product => product.price >= e.target.value))
     })
 
}
displayPrice()



