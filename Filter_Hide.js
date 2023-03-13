<script>

//Here are the variables you can change. Please don't touch the code below this part.

var ButtonLocation = "MainProductList__active-filter--quicksearch mr-lg-auto col-lg-8 col-xl-6"; // The class name of the element where the button will be added. You can find it by right clicking the element and clicking "Inspect". The class name will be in the "class" attribute. You can also use the "id" attribute by changing the "className" to "id" in the code below. If you don't know what to do, leave it as it is.
var ButtonText = "Show filters"; // The text that will be displayed on the button.

var HideElementLocation = "FilteringOptions__option-wrapper"; // The class name of the element that will be hidden. You can find it by right clicking the element and clicking "Inspect". The class name will be in the "class" attribute. You can also use the "id" attribute by changing the "className" to "id" in the code below. If you don't know what to do, leave it as it is.

var ShowElementLocation1 = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--collections[Koko] col-12 col-sm-6 col-md-4 col-xl-3"; // The class name of the element that will be shown. You can find it by right clicking the element and clicking "Inspect". The class name will be in the "class" attribute. You can also use the "id" attribute by changing the "className" to "id" in the code below. If you don't know what to do, leave it as it is.
var ShowElementLocation2 = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--price col-12 col-sm-6 col-md-4 col-xl-3"; // The class name of the element that will be shown. You can find it by right clicking the element and clicking "Inspect". The class name will be in the "class" attribute. You can also use the "id" attribute by changing the "className" to "id" in the code below. If you don't know what to do, leave it as it is.
var ButtonToClick = "FilteringOptions__heading btn btn-link"; // The class name of the element that will be clicked. You can find it by right clicking the element and clicking "Inspect". The class name will be in the "class" attribute. You can also use the "id" attribute by changing the "className" to "id" in the code below. If you don't know what to do, leave it as it is.


// Below here is the main part of the code. Please don't touch without some understanding of JavaScript.

//Variables
var MIteration = 0;
// Functions
// Function for hiding element
function hide() {
  // Adding elements into array to be hidden
  const elements = document.getElementsByClassName(HideElementLocation);
    
    if (MIteration == 0)
    {
      // Hiding elements
      for (const el of elements){
            el.style.display= "none";
      }
      //Showing certain filters
      let elementsToShow =  document.getElementsByClassName(ShowElementLocation1);
      for (const el of elementsToShow){
        el.style.display = "block";
      }
      elementsToShow = document.getElementsByClassName(ShowElementLocation2);
      for (const el of elementsToShow){
          el.style.display = "block";
      }
    }
    else
    {
      //Showing all elements
      for (const el of elements){
          el.style.display= "block";
      }
	  }

    //Changing iteration
    if (MIteration == 0)
    {
      MIteration = 1;
    }
    else
    {
      MIteration = 0;
    }

    
};

// Main code loop in a function
function mainFunction() {
  // Toggle on mobile
  if (window.innerWidth <= 800) {
    // Hiding filters
    document.getElementsByClassName(ButtonToClick)[0].click();
    hide();
    // Creating button
    const button = document.createElement("button");
    button.innerHTML = ButtonText;
    button.onclick = function() {
      hide();
    };
    // Adding button to the page
    const container = document.getElementsByClassName(ButtonLocation)[0]; 
    container.appendChild(button);

	  
}
}

//Calling main code loop with a delay to let the page load
setTimeout(mainFunction, 3000);

//Intelectual property of Arttu Mutka. Some rights reserved.

</script>
