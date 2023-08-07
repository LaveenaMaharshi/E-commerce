async function fetchingData () {
    // DOM Selector
    const searchInput = document.querySelector('#search');
    console.log(searchInput);

    //fetch request to get the for mapping the data
    const response = await fetch('https://dummyjson.com/products');

    // We are going to await for response
    const data = await response.json();
    console.log(data.products);

    // Creating a logic function for rendering the cards
    // It will be mapping filtered data
    function renderCard(filteredData) {
        
        // we are going select our main body who is the parent of card structure
        const mainBody = document.querySelector('.product-container');
        console.log(mainBody, "This is main body.");

        // 
        mainBody.innerHTML = '';

        filteredData.forEach((element) => {
            mainBody.innerHTML += ` <div class="card" style="height: 30%; width: 30%;">
            <img src=${element.thumbnail} class="card-img-top" alt="...">
            <div class="card-body" style="height: 30%;">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text"></p>
              <p class = "card-text">${element.brand}</p>
              <a href="#" class="btn btn-primary">Click Here</a>
            </div>
        </div>`
        });
    }

    // function to handle search and then filter
    function searcBasedOnInput(){
        const searchTerm = searchInput.value.toLocaleLowerCase();

        let filteredData = data.products;

        if(searchTerm.trim !=="") {
            filteredData = data.products.filter((element) => {
                if(element.title.toLocaleLowerCase().includes(searchTerm)){
                    return element;
                }
                if(element.brand.toLocaleLowerCase().includes(searchTerm)){
                    return element;
                }
            })
        }
        renderCard(filteredData);

    }
    searchInput.addEventListener('input', searcBasedOnInput);

    renderCard(data.products);


}

fetchingData();