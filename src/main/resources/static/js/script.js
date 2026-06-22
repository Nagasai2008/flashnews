function getNews(category) {

    let container = document.getElementById("news-container");
    let title = document.getElementById("page-title");

    container.innerHTML = "<h3>Loading news...</h3>";

    let queries = {
        general: "india",
        technology: "technology",
        sports: "sports",
        business: "business"
    };

    let titles = {
        general: "Top News",
        technology: "Technology News",
        sports: "Sports News",
        business: "Business News"
    };

    title.innerText = titles[category] || "Top News";

    let query = queries[category] || "india";

    fetch(`/news?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // for debugging
            showNews(data.articles);
        })
        .catch(error => {
            container.innerHTML = "<h3>Error loading news</h3>";
            console.error(error);
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

            ${news.image ? `<img src="${news.image}" width="200">` : ""}

            <br><br>

            <a href="${news.url}" target="_blank">
                Read More
            </a>

        </div>
        `;
    });
}

function searchNews() {

    let query = document.getElementById("searchInput").value.trim();

    if (!query) return;

    let container = document.getElementById("news-container");

    container.innerHTML = "<h3>Searching...</h3>";

    fetch(`/news?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // for debugging
            showNews(data.articles);
        })
        .catch(error => {
            container.innerHTML = "<h3>Error searching news</h3>";
            console.error(error);
        });
}

// Load general news when page opens
getNews('general');