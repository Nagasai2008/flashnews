const API_KEY = "fd0c5481b04f4f56d56ad0d6bc020013";

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

    title.innerText = titles[category] || "Top News";

    let query = queries[category] || "india news";

    fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${API_KEY}`)
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
        container.innerHTML += `
            <div class="card">
                <h3>${news.title}</h3>
                <p>${news.description || "No description available"}</p>
                ${news.image ? `<img src="${news.image}" width="200"/>` : ""}
                <br><br>
                <a href="${news.url}" target="_blank">Read More</a>
            </div>
        `;
    });
}

function searchNews() {

    let query = document.getElementById("searchInput").value;

    if (!query) return;

    let container = document.getElementById("news-container");
    container.innerHTML = "<h3>Searching...</h3>";

    fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            showNews(data.articles);
        })
        .catch(err => {
            container.innerHTML = "<h3>Error searching news</h3>";
            console.log(err);
        });
}

getNews('general');