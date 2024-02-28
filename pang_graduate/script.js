let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "images/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "images/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "images/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "images/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "images/comfy-gray-pants.jpg",
    },
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "images/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "images/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "images/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "images/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "images/comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  // Card category
  card.classList.add("card", "border-0", "rounded-0", "shadow", i.category, "hide");
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  
  // Create an anchor element
  let anchor = document.createElement("a");
  anchor.classList.add("text-body-emphasis");
  anchor.href = "add_to_cart.html"; // link
  anchor.addEventListener("click", function(event) {
    // Handle the click event here, e.g., navigate to the product details page
    console.log("Clicked product:", i.productName);
  });

  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  anchor.appendChild(name); // Append the product name inside the anchor element
  
  // Append the anchor element to the container
  container.appendChild(anchor);
  
  // Price
  let price = document.createElement("h6");
  price.classList.add("poppins-thin");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}


//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide"); 
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
