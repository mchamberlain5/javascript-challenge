// from data.js
var table_data = data;

// function to display UFO sightings
function table_display(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clear the table for new data
function delete_tbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// initial display of all UFO sightings
console.log(table_data);
table_display(table_data);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  delete_tbody();
  var date_input = d3.select("#datetime").property("value");
  
  if (date_input.trim() === "" ) {
    // display the whole database if the date field has no date
    var filtered_data = table_data;
  } else {
    // otherwise, display the filtered dataset  
    var filtered_data = table_data.filter(ufoSighting => 
      ufoSighting.datetime === date_input.trim());
  };

  // display message if no records found
  if (filtered_data.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filtered_data);
  tableDisplay(filtered_data);
});