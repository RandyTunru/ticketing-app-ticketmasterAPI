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

function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Object();
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
        for (var i=0; i<pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}

params = getParams();

let id = params["id"];

const obj = fetch("https://app.ticketmaster.com/discovery/v2/events/" + id + ".json?apikey=yNWJpKN0jf1oyoAAIRXYG7mFXZmkvAbf").then(response => response.json())

obj.then(data => {
    let eventDetail = document.getElementById("event-detail");
    let event = data;
    console.log(event);

    let eventPicture = document.createElement("img");
    eventPicture.src = event.images[0].url;
    eventPicture.classList.add("event-picture");

    let eventInfo = document.createElement("div");
    eventInfo.classList.add("event-specific-info");

    let eventName = document.createElement("h2");
    eventName.innerText = event.name;
    eventInfo.appendChild(eventName);

    let eventSpecific = document.createElement("div");
    eventSpecific.classList.add("event-specific");

    let eventDate = document.createElement("p");
    eventDate.innerText = event.dates.start.localDate;
    eventSpecific.appendChild(eventDate);

    let eventTime = document.createElement("p");
    eventTime.innerText = event.dates.start.localTime;
    eventSpecific.appendChild(eventTime);

    let eventVenue = document.createElement("p");
    eventVenue.innerText = event._embedded.venues[0].name + " - " + event._embedded.venues[0].city.name;
    eventSpecific.appendChild(eventVenue);

    eventInfo.appendChild(eventSpecific);

    let eventPromoterContainer = document.createElement("div");
    eventPromoterContainer.classList.add("event-promoter-container");

    let eventPromoter = document.createElement("div");
    eventPromoter.classList.add("event-promoter");

    let diselenggarakanOleh = document.createElement("p");
    diselenggarakanOleh.innerText = "Diselenggarakan oleh";
    eventPromoter.appendChild(diselenggarakanOleh);

    let eventPromoterName = document.createElement("p");
    if (event.promoter){
        eventPromoterName.innerText = event.promoter.name;
    } else {
        eventPromoterName.innerText = "TBD";
    }
    eventPromoter.appendChild(eventPromoterName);

    eventPromoterContainer.appendChild(eventPromoter);

    eventInfo.appendChild(eventPromoterContainer);

    eventDetail.appendChild(eventPicture);
    eventDetail.appendChild(eventInfo);
})

obj.then(data => {
    let event = data;
    console.log(event);

    let eventDescription = document.getElementById("event-description");
    if (event.description == null) {
        eventDescription.innerText = "Tidak ada deskripsi";
    } else {
        eventDescription.innerText = event.description;
    }

    let eventName = document.getElementById("event-name");
    eventName.innerText = event.name;
})

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

    eventItem.addEventListener("click", function() {
      window.location.href = "event.html?id=" + event.id;
    });
    
    eventList.appendChild(eventItem);
  }
})