async function fetchForexNews() {
  try {
    const response = await fetch("/api/news"); // Backend API endpoint
    const news = await response.json();

    const newsList = document.getElementById("news-list");
    newsList.innerHTML = "";

    news.forEach((article) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${article.title}</strong> - ${article.description}`;
      newsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching forex news:", error);
  }
}

// Fetch and display news on page load
fetchForexNews();
