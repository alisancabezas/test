// Array of service + land + price combos
const estimates = [
    { service: "Asphalt", land: "Patches", price: "$1,600+" },
    { service: "Asphalt", land: "Parking Lot", price: "$1,600-$3,000+" },
    { service: "Asphalt", land: "Driveway", price: "$1,600-$2,600+" },
    { service: "Bricks", land: "Patches", price: "$1,000+" },
    { service: "Bricks", land: "Parking Lot", price: "$2,000+" },
    { service: "Bricks", land: "Driveway", price: "$1,500+" }
  ];
  
  //Function to get and display the estimate
  function getEstimate() {
    const selectedService = document.getElementById("service").value;
    const selectedLand = document.getElementById("land").value;
    const resultBox = document.getElementById("result");
  
    // Check if user selected both options
    if (!selectedService || !selectedLand) {
      resultBox.innerText = " Please select both a service and land type.";
      resultBox.style.color = "yellow";
      return;
    }
    //Loop through the array and find the matching combo
    for (let i = 0; i < estimates.length; i++) { //counting the array, going through it 1 by 1
      const option = estimates[i]; //creating a variable to hold the current object in the array
      if (option.service === selectedService && option.land === selectedLand) {
        resultBox.innerText = `Estimated cost for ${selectedService} on ${selectedLand}: ${option.price}`;
        resultBox.style.color = "yellow";
        return;
      } 
    }
    resultBox.innerText = "No estimate found for that combination.";
  }

  const colors = ["#3e88ef", "#fefff7", "#f7fff7"]; // blue, yellow, green
  console.log("The first color in the array is:", colors[0]);
  
  const userName = prompt("What is your name?");
  const colorChoice = prompt("Pick a background color: 0 for blue, 1 for yellow, 2 for green");
  
  const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
  };
  
  document.body.style.backgroundColor = userInfo.selectedColor;