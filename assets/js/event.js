var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
      let search = searchBar.value;
      console.log(search);
      window.location.href = "searched.html?search=" + search;
    }
});

let concert = document.getElementById("concert");
concert.addEventListener("click", function() {
  window.location.href = "type.html?category=Concert";
});

let sports = document.getElementById("sports");
sports.addEventListener("click", function() {
  window.location.href = "type.html?category=Sports";
});

let arts = document.getElementById("arts");
arts.addEventListener("click", function() {
  window.location.href = "type.html?category=Arts";
});

let family = document.getElementById("family");
family.addEventListener("click", function() {
  window.location.href = "type.html?category=Family";
});