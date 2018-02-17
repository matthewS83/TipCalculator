// Custom function

function calculateTip() {
  // Store the Data of input
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var numPeople = document.getElementById('totalPeople').value;

  // Validation
  if(billAmount === "" || serviceQuality == 0) {
    window.alert("Please keep in mind servers pay their bills from your tips!")
    return; // this will prevent function from continuing
  }

  // Check to see if this input is empty or less than or equal to 1
  if(numPeople === "" || numPeople <=1) {
      numPeople = 1;

      document.getElementById('each').style.display = "none";
  } else {
      document.getElementById('each').style.display = "block";
  }

  // Math
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // Display tip
  document.getElementById('totalTip').style.display = "block";
  document.getElementById('tip').innerHTML = total;
}

// Hide tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking Button Call for function

document.getElementById("calculate").onclick = function() { calculateTip(); };
