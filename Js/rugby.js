// Function to open the rugby modal
function openRugbyModal() {
    var modal = document.getElementById("Rugby-modal");
    modal.style.display = "block";
  }
  
  // Get the rugby button and add onclick event listener
  var rbtn = document.getElementById("Rugby-button");
  rbtn.addEventListener("click", openRugbyModal);
  
  // Get the <span> element that closes the modal
  var sspan = document.getElementsByClassName("rclose")[0];
  
  // When the user clicks on <span> (x), close the modal
  sspan.onclick = function() {
    var modal = document.getElementById("Rugby-modal");
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    var modal = document.getElementById("Rugby-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Example data to be displayed in the table
  var rugbyData = [
    {rank: 1, teamName: "New Zealand", points: 20, wins: 6, losses: 1, draws: 2},
    {rank: 2, teamName: "South Africa", points: 18, wins: 5, losses: 2, draws: 1},
    {rank: 3, teamName: "Wales", points: 17, wins: 5, losses: 3, draws: 0},
    {rank: 4, teamName: "England", points: 15, wins: 4, losses: 3, draws: 1},
    {rank: 5, teamName: "France", points: 15, wins: 4, losses: 3, draws: 1},
    {rank: 6, teamName: "Australia", points: 15, wins: 4, losses: 3, draws: 1},
    {rank: 7, teamName: "Scotland", points: 15, wins: 4, losses: 3, draws: 1},
    {rank: 8, teamName: "Ireland", points: 15, wins: 4, losses: 3, draws: 1},
    {rank: 9, teamName: "Japan", points: 15, wins: 4, losses: 3, draws: 1},
    {rank: 10, teamName: "Argentina", points: 15, wins: 4, losses: 3, draws: 1},
  ];
  
  // Populate the table with the data
  var tbody = document.querySelector("#Rugby-table tbody");
  
  rugbyData.forEach(function(teams) {
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
  
    var winsCell = document.createElement("td");
    winsCell.textContent = teams.wins;
    row.appendChild(winsCell);
  
    var lossesCell = document.createElement("td");
    lossesCell.textContent = teams.losses;
    row.appendChild(lossesCell);
  
    var drawsCell = document.createElement("td");
    drawsCell.textContent = teams.draws;
    row.appendChild(drawsCell);
  
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
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (x && y) { // make sure both x and y exist
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  
        