// Toggle platform section visibility based on use case
document.getElementById("useCase").addEventListener("change", function () {
  const platformSection = document.getElementById("platformSection");
  if (this.value === "3") { // "3" = Casual Use, no platform needed
    platformSection.classList.add("hidden");
  } else {
    platformSection.classList.remove("hidden");
  }
});

// Handle form submission
document.getElementById("buildForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Fetch inputs with trimming and parsing budget to number
  const budget = parseInt(document.getElementById("budget").value.trim(), 10);
  const useCase = document.getElementById("useCase").value;
  const platform = document.getElementById("platform")?.value || null;

  if (isNaN(budget) || budget <= 0) {
    alert("Please enter a valid budget greater than 0.");
    return;
  }

  try {
    const response = await fetch("/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ budget, use_case: useCase, platform }),
    });

    if (!response.ok) {
      throw new Error("Server error, please try again later.");
    }

    const build = await response.json();
    displayResults(build, budget);
  } catch (error) {
    alert(error.message);
  }
});

// Display the recommended build results dynamically
function displayResults(build, userBudget) {
  const resultsDiv = document.getElementById("results");
  const buildDetailsDiv = document.getElementById("buildDetails");
  const totalCostP = document.getElementById("totalCost");
  const budgetStatusP = document.getElementById("budgetStatus");

  // Clear previous results
  buildDetailsDiv.innerHTML = "";

  // Guard against empty or invalid build object
  if (!build || Object.keys(build).length === 0) {
    resultsDiv.classList.remove("hidden");
    buildDetailsDiv.innerHTML = "<p>No build recommendation available.</p>";
    totalCostP.textContent = "";
    budgetStatusP.textContent = "";
    return;
  }

  // Add each component detail
  for (const [part, spec] of Object.entries(build)) {
    if (part !== "Total") {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${part}:</strong> ${spec}`;
      buildDetailsDiv.appendChild(p);
    }
  }

  // Show total cost
  totalCostP.textContent = `💵 Estimated Total Cost: ₹${build.Total}`;

  // Show budget status with colors
  if (userBudget >= build.Total) {
    budgetStatusP.textContent = "✅ This build fits your budget!";
    budgetStatusP.style.color = "green";
  } else {
    budgetStatusP.textContent =
      "⚠️ This build exceeds your budget. Consider increasing it or downgrading parts.";
    budgetStatusP.style.color = "orange";
  }

  // Make results visible
  resultsDiv.classList.remove("hidden");
}
