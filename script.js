async function fetchingData () {
    // DOM Selector
    const searchInput = document.querySelector('#search');
    console.log(searchInput);

    //fetch request to get the for mapping the data
    const response = await fetch('https://dummyjson.com/products');

    // We are going to await for response
    const data = await response.json();
    console.log(data.products);

}

fetchingData();