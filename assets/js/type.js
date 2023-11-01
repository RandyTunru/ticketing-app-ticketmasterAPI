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

console.log(params["category"])

document.getElementById("search-filter").innerHTML = decodeURIComponent(params["category"]);

fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=yNWJpKN0jf1oyoAAIRXYG7mFXZmkvAbf&classificationName=" + params["category"])
.then(response => response.json())
.then(data => {
    console.log(data);
    let events = data._embedded.events;
    console.log(events);
    let eventList = document.getElementById("event-list");
    for (let i = 0; i < events.length;i++) {
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


        let eventSchedule = document.createElement("div");
        eventSchedule.classList.add("event-schedule");

        if (event.dates.start.localDate == null) {
            let eventDate = document.createElement("p");
            eventDate.innerText = "TBD";
            eventSchedule.appendChild(eventDate);
        }
        else if (event.dates.start.localTime == null){
            let eventDate = document.createElement("p");
            eventDate.innerText = event.dates.start.localDate;
            eventSchedule.appendChild(eventDate);

            let eventTime = document.createElement("p");
            eventTime.innerText = "TBD";
            eventSchedule.appendChild(eventTime);
        } else{
            let eventDate = document.createElement("p");
            eventDate.innerText = event.dates.start.localDate;
            eventSchedule.appendChild(eventDate);

            let eventTime = document.createElement("p");
            eventTime.innerText = event.dates.start.localTime;
            eventSchedule.appendChild(eventTime);
        }

        eventItem.appendChild(eventSchedule);
        
        let eventInfo = document.createElement("div");
        eventInfo.classList.add("event-info");
        let eventName = document.createElement("h3");
        eventName.innerText = event.name;
        eventInfo.appendChild(eventName);
        
        let eventVenue = document.createElement("p");
        if (event._embedded.venues[0].name == null) {
            eventVenue.innerText = "TBD";
        } else {
            eventVenue.innerText = event._embedded.venues[0].name;
        }
        eventInfo.appendChild(eventVenue);

        eventItem.appendChild(eventInfo);
        eventList.appendChild(eventItem);
    }
})

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