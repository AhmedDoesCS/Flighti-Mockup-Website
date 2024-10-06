let searchItem, simplified;

const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const results = document.getElementById("results");



searchButton.addEventListener('click', () => {
    fetch("./travel_recommendation_api.json")
    .then(res => res.json())
    .then(obj => {

        switch (searchBar.value.toLowerCase()) {
            case "countries":
            case "country":
                simplified = "countries";
                break;
            case "temples":
            case "temple":
                simplified = "temples";
                break;
            case "beaches":
            case "beach":
                simplified = "beaches";
                break;
        }

        Object.keys(obj).forEach((key) => {

            if (key.includes(searchBar.value.toLowerCase()) || key.includes(simplified)) {
                searchItem = key;

                if (searchItem == "countries") {
                    obj[key].forEach((country) => {
                        country.cities.forEach((item) => {
                            const block = document.createElement("div");
                            block.style.cssText = `background-color: #0c1c2e; width:100%; height: 50vh; border-radius: 20px; margin: 15px 0px; background-image: URL(${item.imageUrl}); background-repeat: no-repeat; background-position: center; background-size: cover;`;
                            
                            const info = document.createElement('div');
                            info.style.cssText = "width: 100%; height: 100%; background-image: linear-gradient(0, rgba(18, 94, 138, 1), rgba(55, 105, 150, 0) 70%); border-radius: inherit; display: flex; align-items: flex-end;";
            
                            const text = document.createElement('div');
                            text.style.cssText = "margin: 20px";
            
                            const name = document.createElement("h1");
                            name.style.cssText = "font-size: 30px;";
            
                            const description = document.createElement("p");
                            description.style.cssText = "";
            
            
                            name.textContent = item.name;
                            description.textContent = item.description;
            
                            text.append(name);
                            text.append(description);
            
                            info.append(text);
            
                            block.append(info);
            
                            results.append(block);
                            results.style.display = 'block';
                        });
                    })

                } else {
                    obj[`${searchItem}`].forEach((item) => {
                        const block = document.createElement("div");
                        block.style.cssText = `background-color: #0c1c2e; width:100%; height: 50vh; border-radius: 20px; margin: 15px 0px; background-image: URL(${item.imageUrl}); background-repeat: no-repeat; background-position: center; background-size: cover;`;
                        
                        const info = document.createElement('div');
                        info.style.cssText = "width: 100%; height: 100%; background-image: linear-gradient(0, rgba(18, 94, 138, 1), rgba(55, 105, 150, 0) 70%); border-radius: inherit; display: flex; align-items: flex-end;";
        
                        const text = document.createElement('div');
                        text.style.cssText = "margin: 20px";
        
                        const name = document.createElement("h1");
                        name.style.cssText = "font-size: 30px;";
        
                        const description = document.createElement("p");
                        description.style.cssText = "";
        
        
                        name.textContent = item.name;
                        description.textContent = item.description;
        
                        text.append(name);
                        text.append(description);
        
                        info.append(text);
        
                        block.append(info);
        
                        results.append(block);
                        results.style.display = 'block';
                    });

                }
            } 
        });
    })
});

clearButton.addEventListener('click', clearResults);

function clearResults() {
    results.innerHTML = "";
    results.style.display = 'none';
    searchBar.value = "";
}


