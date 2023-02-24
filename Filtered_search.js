<script>
// These variables define functionality in script
const type = "FilteringOptions";
// This number is the element to get
let number = 0;

// Below here is the main part of the code. Please don't touch without some understanding of JavaScript.

// Functions
// Function for hiding element
function hide() {
  // Adding elements into array to be hidden
  const collection = [
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--manufacturers col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--features col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[1] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[11] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[4] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[3] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[6] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[5] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[15] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[12] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[13] col-12 col-sm-6 col-md-4 col-xl-3",
    "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--price col-12 col-sm-6 col-md-4 col-xl-3"
  ];

  const elements = document.getElementsByClassName(collection.join(" "));
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hidden");
  }
}

// Main code loop in a function
function mainFunction() {
  // Toggle on mobile
  if (window.innerWidth <= 800) {
    // FilteringOptions__heading.click();
    hide();
    const button = document.createElement("button");
    button.innerHTML = "Show Filters";
    button.onclick = function() {
      hide();
    };
    const container = document.getElementsByClassName("MainProductList__active-filter-row")[0];
    container.appendChild(button);

	  
}
}

//Calling main code loop
setTimeout(mainfunction, 3000);

//Intelectual property of Arttu Mutka

</script>
