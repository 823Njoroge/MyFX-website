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
