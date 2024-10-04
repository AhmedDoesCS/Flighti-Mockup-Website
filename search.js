let searchItem;

const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");

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
                console.log(item);
            });
        }
    })
});




