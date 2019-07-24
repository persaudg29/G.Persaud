// from data.js
var tableData = data;

// YOUR CODE HERE!
 var tbody = d3.select("tbody")

var filterbox = d3.select("#filter-btn");
var record_date = d3.select("#datetime");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape")

var defDate = '1/1/2010';
var loadFiltData = "n";
var dateInput ;


function loadTableData(dataArray) {
    d3.select("tbody")
      .selectAll("tr")
      .data(dataArray)
      .enter()
      .append("tr")
      .html(function(d) {
        return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
                <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
      });
    }

if (loadFiltData == 'y') {
    console.log("In filter data")
    finalData = filtData;
    }
  else {
    console.log("Not in filter data")
    finalData = tableData;
    }
  console.log("Main Logic")
  console.log(finalData)
  tbody.html("");
  loadTableData(finalData)
  
   filterbox.on("click", function() {
  
    d3.event.preventDefault();
  
    var dateValue = record_date.property("value");
   var stateValue = state.property("value");
  
   console.log(" in filtbutton.on code ")
   console.log("dateValue  " + dateValue);
   console.log("stateValue " + stateValue);
   console.log(" after getting date/state value")
   var filtData = tableData.filter(fData => (fData.datetime == dateValue) && (fData.state == stateValue) ) ;
   console.log(filtData) 
   loadFiltData = "y";
   if (loadFiltData == 'y') {
    console.log("In filter data")
    finalData = filtData;
    }
  else {
    console.log("Not in filter data")
    finalData = tableData;
    }
  console.log(finalData)
   tbody.html("");
  loadTableData(finalData)
  });