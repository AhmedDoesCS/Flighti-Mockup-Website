let searchItem;

const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const results = document.getElementById("results");



searchButton.addEventListener('click', () => {
    fetch("./travel_recommendation_api.json")
    .then(res => res.json())
    .then(obj => {
        switch (searchBar.value.toLowerCase()) {
            case "beaches":
            case "beach":
                searchItem = "beaches";
                break;
            case "temples":
            case "temple":
                searchItem = "temples";
                break;
            case "countries":
            case "country":
                searchItem = "countries";
                break;
        }

        if (Object.keys(obj).includes(searchItem)) {
            obj[`${searchItem}`].forEach((item) => {
                const block = document.createElement("div");
                block.style.cssText = "background-color: #ffff; width:100%; height: 50vh; border-radius: 20px;";
                
                const img = document.createElement("img");
                img.setAttribute("src", `${item.imageUrl}`);
                img.style.cssText = "height: 100%; width: 100%; border-radius: inherit;";

                block.append(img);


                results.append(block);
            });
        }
    })
});




