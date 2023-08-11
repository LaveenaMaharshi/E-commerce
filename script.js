async function getData() {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();
    console.log(data.products);


    function renderCard(filteredData) {
        const mainbody = document.querySelector(".product-container");
        console.log(mainbody, "This is main body...");

        mainbody.innerHTML = "";

        filteredData.forEach((element) => {
            mainbody.innerHTML += `<div class="product" data-name=${element.id}>
                 <img src=${element.thumbnail} alt="">
                 <h3>${element.title}</h3>
                 <h5>${element.brand}</h5>
                 <div class="price">₹ ${element.price}</div>
             </div>`
        });
    }

    renderCard(data.products);

    let previewContainer = document.querySelector(".products-preview");

    let previewBox = document.querySelector(".preview");

    document.querySelectorAll(".product-container .product").forEach(product => {
        product.onclick = () => {
            previewContainer.style.display = "flex";
            let id = product.getAttribute("data-name");
            previewBox.forEach(preview => {
                let target = preview.getAttribute("data-target");
                if (id == target) {
                    preview.classList.add("active");
                }
            })
        }
    });

    // previewBox.forEach(close => {
    //     close.querySelector(".fa-times").onclick = () => {
    //         close.classList.remove("active");
    //         previewContainer.style.display = "none";
    //     };
    // });

}
getData();

previewBox.forEach(close => {
    close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        previewContainer.style.display = "none";
    };
});

