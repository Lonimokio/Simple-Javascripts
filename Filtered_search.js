<script>

//These variables define functionality in script
//This row is the element type put inside "".
var type = "FilteringOptions"
//This number is the element to get
var number = 0;



//Below here is the main part of the code. Please dont touch without some understanding of javascript.

//Functions
//Function for hiding element
		  
function Hide() {	
			//Adding elements into array to be hidden. maybe this should be optimized  ¯\_(ツ)_/¯
		  let collection = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--manufacturers col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--features col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[1] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[11] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[4] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[3] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[6] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[5] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[15] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[12] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--extraProperties[13] col-12 col-sm-6 col-md-4 col-xl-3";
		  collection.push = "FilteringOptions__option-wrapper FilteringOptions__option-wrapper--price col-12 col-sm-6 col-md-4 col-xl-3";
		  alert(collection.length);
		  if (collection.length > 0){
      for(var i=0; i < collection.length; i++{


		  var x = window.getComputedStyle(document.getElementsByClassName(collection[i]), null).display;
		  
		  if (x == "none") 
		  {
			document.getElementsByClassName(collection[i]).style.display = "block";
		  }

		  else if (x == "block")
		  {
			document.getElementsByClassName(collection[i]).style.display = "none";
		  }
		}
}
}

//Main code loop in a function
function mainfunction () {
  // Toggle on mobile
    if (window.innerWidth <= 800) {
		
	  //FilteringOptions__heading.click();
	  Hide();
	  var Button = document.createElement("BUTTON");
	  Button.innerHTML = "Show Filters";
	  Button.onclick = function() {
		  Hide();
	  };
	  var x = document.getElementsByClassName("MainProductList__active-filter-row");
	  x[0].appendChild(Button);

	  
}
}

//Calling main code loop
setTimeout(mainfunction, 3000);

//Intelectual property of Arttu Mutka

</script>