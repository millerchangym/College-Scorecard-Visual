function updateHeadline() {
  // update headline
  d3.select("h2").text(headline + d3.select("#year").node().value);
}