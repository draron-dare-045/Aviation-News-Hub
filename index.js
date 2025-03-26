const apiUrl = 'https://aviation-news-live.p.rapidapi.com/api/news';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'aviation-news-live.p.rapidapi.com'
    }
};

// Function to fetch aviation news
async function fetchNews() {
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error(HTTP error, Status: ${response.status});
        }

        const data = await response.json();
        displayNews(data);
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news-container').innerHTML = <p>Failed to load news. Please try again later.</p>;
    }
}

// Function to display news articles
function displayNews(newsArray) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear previous content

    newsArray.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Load news when the page loads
document.addEventListener('DOMContentLoaded', fetchNews);
