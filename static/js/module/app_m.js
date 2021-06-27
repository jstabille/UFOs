// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    // Clearing existing data
    tbody.html("");
    // Loop through each object in the data and append a row and cells for each value
    data.forEach((dataRow) => {
        //append row to table
        let row = tbody.append("tr");
        //Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");   
            cell.text(val);

        }
        );

    });

}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;  
    // check for date in user entry and if so, filter data using entered date
    if (date) {
        // Apply filter to the table data to only keep rows where 'datedtime' value matches filter val
        filteredData = filteredData.filter(row => row.datetime === date)
    };
    // Rebuild table w/ filtered data (if date)
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);