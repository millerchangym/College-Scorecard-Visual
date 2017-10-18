function updateHeadline() {
  var newYear = parseInt(d3.select("#year").node().value)
  
  // update headline
  d3.select("h2")
    .text(headline + 
	      newYear + 
		  "-" + 
		  (newYear + 1) 
		  );
}

function updateCircles(){
	svg.selectAll("circle")
	   .remove();
	readCsv(parseInt(d3.select("#year").node().value));
}