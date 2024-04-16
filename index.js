const players = {
    CSK: ["MS Dhoni", "Suresh Raina", "Ravindra Jadeja", "Deepak Chahar", "Faf du Plessis"],
    DC: ["Rishabh Pant", "Shikhar Dhawan", "Kagiso Rabada", "Prithvi Shaw", "Ravichandran Ashwin"],
    GT: ["Glenn Maxwell", "AB de Villiers", "Varun Chakravarthy", "Andre Russell", "Shubman Gill"],
    MI: ["Rohit Sharma", "Jasprit Bumrah", "Quinton de Kock", "Kieron Pollard", "Hardik Pandya"],
    KKR: ["Eoin Morgan", "Sunil Narine", "Shakib Al Hasan", "Pat Cummins", "Nitish Rana"],
    SRH: ["Kane Williamson", "David Warner", "Rashid Khan", "Bhuvneshwar Kumar", "Manish Pandey"],
    PBKS: ["KL Rahul", "Chris Gayle", "Mohammed Shami", "Mayank Agarwal", "Nicholas Pooran"],
    LSG: ["Rohit Sharma", "Jasprit Bumrah", "Quinton de Kock", "Kieron Pollard", "Hardik Pandya"],
    RCB: ["Virat Kohli", "AB de Villiers", "Yuzvendra Chahal", "Glenn Maxwell", "Devdutt Padikkal"],
    RR: ["Sanju Samson", "Jos Buttler", "Chris Morris", "Ben Stokes", "Rahul Tewatia"]
  };
  
  // Function to create player dropdowns based on selected team
  function createPlayerDropdowns(team, playerDropdownsId, impactPlayerSelectId) {
    const playerDropdowns = document.getElementById(playerDropdownsId);
    playerDropdowns.innerHTML = ""; // Clear previous content
  
    // Array to keep track of selected players
    const selectedPlayers = [];
  
    for (let i = 1; i <= 11; i++) {
      const select = document.createElement("select");
      select.className = "playerSelect";
      const defaultOption = document.createElement("option");
      defaultOption.value = `Player ${i}`;
      defaultOption.textContent = `Player ${i}`;
      select.appendChild(defaultOption);
  
      players[team].forEach(player => {
        const option = document.createElement("option");
        option.value = player;
        option.textContent = player;
        select.appendChild(option);
      });
  
      // Add change event listener to each dropdown
      select.addEventListener("change", function(event) {
        const selectedPlayer = event.target.value;
        selectedPlayers.push(selectedPlayer);
  
        // Disable selected player in all subsequent dropdowns
        Array.from(playerDropdowns.querySelectorAll("select")).forEach(dropdown => {
          Array.from(dropdown.querySelectorAll("option")).forEach(option => {
            if (selectedPlayers.includes(option.value)) {
              option.disabled = true;
            } else {
              option.disabled = false;
            }
          });
        });
  
        // Disable selected player in impact player dropdown
        Array.from(document.getElementById(impactPlayerSelectId).querySelectorAll("option")).forEach(option => {
          if (selectedPlayers.includes(option.value)) {
            option.disabled = true;
          } else {
            option.disabled = false;
          }
        });
      });
  
      playerDropdowns.appendChild(select);
    }
  }
  
  // Function to create impact player dropdown for the selected team
  function createImpactPlayerDropdown(team, impactPlayerSelectId) {
    const impactPlayerSelect = document.getElementById(impactPlayerSelectId);
    impactPlayerSelect.innerHTML = ""; // Clear previous content
  
    players[team].forEach(player => {
      const option = document.createElement("option");
      option.value = player;
      option.textContent = player;
      impactPlayerSelect.appendChild(option);
    });
  }
  
  // Event listener for when team is selected
  document.getElementById("teamSelect1").addEventListener("change", function() {
    const selectedTeam = this.value;
    createPlayerDropdowns(selectedTeam, "playerDropdowns1", "impactPlayerSelect1");
    createImpactPlayerDropdown(selectedTeam, "impactPlayerSelect1");
  });
  
  // Event listener for when team is selected
  document.getElementById("teamSelect2").addEventListener("change", function() {
    const selectedTeam = this.value;
    createPlayerDropdowns(selectedTeam, "playerDropdowns2", "impactPlayerSelect2");
    createImpactPlayerDropdown(selectedTeam, "impactPlayerSelect2");
  });
  
  // Initialize player dropdowns and impact player dropdown with default selected team
  const defaultTeam = document.getElementById("teamSelect1").value;
  createPlayerDropdowns(defaultTeam, "playerDropdowns1", "impactPlayerSelect1");
  createImpactPlayerDropdown(defaultTeam, "impactPlayerSelect1");
  
  // Initialize player dropdowns and impact player dropdown with default selected team
  const defaultTeam2 = document.getElementById("teamSelect2").value;
  createPlayerDropdowns(defaultTeam2, "playerDropdowns2", "impactPlayerSelect2");
  createImpactPlayerDropdown(defaultTeam2, "impactPlayerSelect2");


  const scrapButton = document.getElementById('scrapButton');
                const scrapMessage = document.getElementById('scrapMessage');
        
                scrapButton.addEventListener('click', () => {
                    scrapMessage.textContent = 'Scraping in progress...';
                    // Implement scraping functionality here
                    // For example, using Cheerio or Puppeteer
        
                    // After scraping, update the scrapMessage
                    setTimeout(() => {
                        scrapMessage.textContent = 'Scraping completed!';
                    }, 2000);
                });