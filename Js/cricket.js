//Function to open the cricket model
function openCricketModal(){
  var modal = document.getElementById("cricket-modal");
  modal.style.display = "block";
}

// Get the cricket button and add onclick event listener
var cbtn = document.getElementById("cricket-button");
cbtn.addEventListener("click", openCricketModal);

// Get the <span> element that closes the modal
var cspan = document.getElementsByClassName("cclose")[0];

// When the user clicks on <span> (x), close the modal
cspan.onclick = function() {
  var modal = document.getElementById("cricket-modal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
var modal = document.getElementById("cricket-modal");
if (event.target == modal) {
  modal.style.display = "none";
}
}

// Example data to be displayed in the table
var cricketData = [
{rank: 1, teamName: "India", points: 120, matches: 31, rating: 100},
{rank: 2, teamName: "England", points: 109, matches: 35, rating: 97},
{rank: 3, teamName: "New Zealand", points: 118, matches: 39, rating: 94},
{rank: 4, teamName: "Australia", points: 108, matches: 29, rating: 88},
{rank: 5, teamName: "South Africa", points: 98, matches: 32, rating: 83},
{rank: 6, teamName: "Pakistan", points: 94, matches: 27, rating: 78},
{rank: 7, teamName: "Bangladesh", points: 86, matches: 31, rating: 68},
{rank: 8, teamName: "West Indies", points: 80, matches: 29, rating: 63},
{rank: 9, teamName: "Sri Lanka", points: 80, matches: 40, rating: 50},
{rank: 10, teamName: "Afghanistan", points: 55, matches: 17, rating: 39},
];

// Populate the table with the data
var tbody = document.querySelector("#cricket-table tbody");

cricketData.forEach(function(teams) {
var row = document.createElement("tr");

var rankCell = document.createElement("td");
rankCell.textContent = teams.rank;
row.appendChild(rankCell);

var teamNameCell = document.createElement("td");
teamNameCell.textContent = teams.teamName;
row.appendChild(teamNameCell);

var pointsCell = document.createElement("td");
pointsCell.textContent = teams.points;
row.appendChild(pointsCell);

var matchesCell = document.createElement("td");
matchesCell.textContent = teams.matches;
row.appendChild(matchesCell);

var ratingCell = document.createElement("td");
ratingCell.textContent = teams.rating;
row.appendChild(ratingCell);

tbody.appendChild(row);
});

//Sorting function
function sortTable(n, tableId) {
  var table = document.getElementById(tableId);
  if (!table) {
    return; // return early if tableId is not found
  }
  var rows = table.rows;
  var switching = true;
  var i, x, y, shouldSwitch, dir, switchcount = 0;
  dir = "asc";
  while (switching) {
    switching = false;
    for (i = 1; i < (rows.length - 1); i++) {
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      shouldSwitch = false;
      if (dir == "asc") {
        if (isNaN(x.innerHTML) && isNaN(y.innerHTML)) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      } else if (dir == "desc") {
        if (isNaN(x.innerHTML) && isNaN(y.innerHTML)) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
