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
