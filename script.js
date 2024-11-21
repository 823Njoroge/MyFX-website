function calculatePips() {
  const entryPrice = parseFloat(document.getElementById("entry-price").value);
  const exitPrice = parseFloat(document.getElementById("exit-price").value);

  if (!isNaN(entryPrice) && !isNaN(exitPrice)) {
    const pips = (exitPrice - entryPrice) * 10000; // Assuming a standard pip size
    document.getElementById("pip-result").innerText = `Pips: ${pips.toFixed(
      2
    )}`;
  } else {
    document.getElementById("pip-result").innerText =
      "Please enter valid prices.";
  }
}

function calculateRiskReward() {
  // Prompt the user for risk and reward values
  const risk = parseFloat(prompt("Enter the risk amount:"));
  const reward = parseFloat(prompt("Enter the reward amount:"));

  // Validate the inputs to make sure they are numbers
  if (isNaN(risk) || isNaN(reward) || risk <= 0 || reward <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid numbers for risk and reward.";
    return;
  }

  // Calculate the risk-to-reward ratio
  const ratio = (reward / risk).toFixed(2);

  // Display the result
  document.getElementById(
    "result"
  ).innerText = `Risk to Reward Ratio: 1 : ${ratio}`;
}
function getForexSession() {
  const now = new Date();
  const utcHour = now.getUTCHours(); // Get the current hour in UTC
  let session = "";

  if ((utcHour >= 22 && utcHour <= 23) || (utcHour >= 0 && utcHour < 7)) {
    session = "Sydney";
  } else if (utcHour >= 0 && utcHour < 9) {
    session = "Asian";
  } else if (utcHour >= 8 && utcHour < 17) {
    session = "London";
  } else if (utcHour >= 13 && utcHour < 22) {
    session = "New York";
  } else {
    session = "No active session";
  }

  return session;
}

// Function to update the HTML
function updateForexSession() {
  const session = getForexSession();
  const sessionElement = document.getElementById("current-session");
  if (sessionElement) {
    sessionElement.textContent = session;
  }
}

// Call the function to display the session on page load
updateForexSession();

// Optional: Update the session periodically (e.g., every hour)
setInterval(updateForexSession, 3600000);

//news api
async function fetchForexNews() {
  try {
    const response = await fetch("/api/news"); // Your backend endpoint
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
