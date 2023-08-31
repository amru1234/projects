const girlNames = [
    "Chhakuli Sanjay Pote",
    // ... (add all 30 girl names here)
"Prayusha Dilip Nimje",
"Snehal Sunil Kanhekar",
"Mrunali Raosaheb Gore",
"Renuka M. Pohokar",
"Sanjana Sanjay Gadhekar",
"Priti Jageshwar Wanjari",
"Shweta Vilasrao Darwai",
"Janhvi Suresh Shende",
"Amruta Sewakram Bagde",
"Samiksha Sudhir Khadke",
"Nidhi Sewakram Bagde",
"Rupali Sureshrao Rewatkar",
"Saba Anjum Mohammad Ayaz",
"Arpita Nilesh belsare",
"Snehal Anil Yemurle",
"Prachi aghgate",
"Sakshi Gajanan Paraskar",
"Sejal Shashikumar Pachaghare",
"Sakshi Badusing Wadte",
"Vaishnavi Vinod Bahale",
"Shital Babanji Dhote",
"Vaishali Vilasrao Nandane",
"Kanchan Shende",
"Tejashri Rajendra Aware",
"Shital Govardhan Khadse",
"Gayatri Vinayak Bhagwat",
"Sakshi Govardhan Mankar",
"Kajal Chavan",
"Shital Bharat Karpate",
"Shraddha Devidas Bawangade",
"Shubhangi Vinay Wankhade",
"Sakshi Sanjay Singh Bais"
  ];
  
  const roomsContainer = document.getElementById("roomsContainer");
  const shuffleButton = document.getElementById("shuffleButton");
  
  shuffleButton.addEventListener("click", shuffleAndAssignRooms);
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function shuffleAndAssignRooms() {
    const shuffledGirls = [...girlNames];
    shuffleArray(shuffledGirls);
  
    roomsContainer.innerHTML = "";
  
    for (let i = 0; i < shuffledGirls.length; i += 3) {
      const room = document.createElement("div");
      room.classList.add("room");
      for (let j = i; j < i + 3 && j < shuffledGirls.length; j++) {
        const girl = document.createElement("p");
        girl.textContent = shuffledGirls[j];
        room.appendChild(girl);
      }
      roomsContainer.appendChild(room);
    }
  }