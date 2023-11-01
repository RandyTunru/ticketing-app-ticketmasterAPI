fetch("https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=yNWJpKN0jf1oyoAAIRXYG7mFXZmkvAbf")
.then(response => response.json())
.then(data => {
  console.log(data);
  let events = data._embedded.events;
  console.log(events);
  let eventList = document.getElementById("suggested-list");
  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let eventItem = document.createElement("div");
    eventItem.classList.add("event-item");

    let picture = document.createElement("img");
    picture.src = event.images[0].url;
    picture.classList.add("event-picture");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.appendChild(picture);
    eventItem.appendChild(imgContainer);

    let eventInfo = document.createElement("div");
    eventInfo.classList.add("event-info");
    let eventName = document.createElement("h2");
    if (event.name.length > 20) {
      eventName.innerText = event.name.slice(0, 20) + "...";
    }
    else {
      eventName.innerText = event.name;
    }
    eventInfo.appendChild(eventName);

    let eventDate = document.createElement("p");
    eventDate.innerText = event.dates.start.localDate;
    eventInfo.appendChild(eventDate);

    let eventTime = document.createElement("p");
    eventTime.innerText = event.dates.start.localTime;
    eventInfo.appendChild(eventTime);

    eventItem.appendChild(eventInfo);
    eventList.appendChild(eventItem);
  }
})

fetch("https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=yNWJpKN0jf1oyoAAIRXYG7mFXZmkvAbf")
.then(response => response.json())
.then(data => {
  console.log(data);
  let events = data._embedded.attractions;
  console.log(events);
  let eventList = document.getElementById("attraction-list");
  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let eventItem = document.createElement("div");
    eventItem.classList.add("event-item");

    let picture = document.createElement("img");
    picture.src = event.images[0].url;
    picture.classList.add("event-picture");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.appendChild(picture);
    eventItem.appendChild(imgContainer);

    let eventInfo = document.createElement("div");
    eventInfo.classList.add("event-info");
    let eventName = document.createElement("h2");
    if (event.name.length > 20) {
      eventName.innerText = event.name.slice(0, 20) + "...";
    }
    else {
      eventName.innerText = event.name;
    }
    eventInfo.appendChild(eventName);

    eventItem.appendChild(eventInfo);
    eventList.appendChild(eventItem);
  } 
})

// let searchButton = document.getElementById("search-button");
// let searchInput = document.getElementById("search-bar");
// searchButton.addEventListener("click", function() {
//   let search = searchInput.value;
//   console.log(search);
//   window.location.href = "searched.html?search=" + search;
// });

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


// Path: assets/js/searched.js
