function login() {
    alert("Login feature coming soon!");
  }
  
  function filterBy(category) {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      if (category === "All" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  function searchQuery() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  }
  
  function showPanic() {
    alert("Your exam hall is Block A, Room 204 🏫");
  }
  