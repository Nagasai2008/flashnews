const API_KEY = "1a5f0acecefb41889b9c3d1188f51ba1";

function getNews(category) {

    let container = document.getElementById("news-container");
    let title = document.getElementById("page-title");

    container.innerHTML = "<h3>Loading news...</h3>";

    let queries = {
        general: "india breaking news today",
        technology: "latest technology news ai gadgets software",
        sports: "cricket football sports india match",
        business: "stock market economy business india companies"
    };

    let titles = {
        general: "Top News",
        technology: "Technology News",
        sports: "Sports News",
        business: "Business News"
    };

    // change heading dynamically
    title.innerText = titles[category] || "Top News";

    let query = queries[category] || "india news";

    fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            showNews(data.articles);
        })
        .catch(err => {
            container.innerHTML = "<h3>Error loading news</h3>";
            console.log(err);
        });
}
function showNews(articles) {
    let container = document.getElementById("news-container");
    container.innerHTML = "";

    if (!articles || articles.length === 0) {
        container.innerHTML = "<h3>No news found</h3>";
        return;
    }

    articles.forEach(news => {
        if (!news.title) return;

        container.innerHTML += `
            <div class="card">
                <h3>${news.title}</h3>
                <p>${news.description || "No description available"}</p>
                ${news.urlToImage ? `<img src="${news.urlToImage}" width="200"/>` : ""}
            </div>
        `;
    });
}

function searchNews() {
    let query = document.getElementById("searchInput").value;

    if (!query) return;

    let container = document.getElementById("news-container");
    container.innerHTML = "<h3>Searching...</h3>";

    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            if (!data.articles) {
                container.innerHTML = "<h3>No results found</h3>";
                return;
            }
            showNews(data.articles);
        })
        .catch(err => {
            container.innerHTML = "<h3>Error searching news</h3>";
            console.log(err);
        });
}

// AUTO LOAD NEWS ON PAGE OPEN
getNews('general');