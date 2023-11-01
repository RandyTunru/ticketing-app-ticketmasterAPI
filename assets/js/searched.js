function getParams() {
    console.log(document.URL);
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

document.getElementById("search-filter").innerHTML = decodeURIComponent(params["search"]);

let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-bar");
searchButton.addEventListener("click", function() {
  let search = searchInput.value;
  console.log(search);
  window.location.href = "searched.html?search=" + search;
});

async function getResponse() {
    const res = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=yNWJpKN0jf1oyoAAIRXYG7mFXZmkvAbf&keyword=" + params["search"]);

    return res.json();
}


const obj = getResponse()

obj.then(data => {
    document.getElementById("result-number").innerHTML = data.page.totalElements;
    if (data.page.totalElements == 0) {
        document.getElementById("result-number").innerHTML = "No";
    }
})


obj.then(data => {
    console.log(data);
    let events = data._embedded.events;
    console.log(events);
    let eventList = document.getElementById("event-list");
    for (let i = 0; i < events.length;) {
        let eventRow = document.createElement("div");
        eventRow.classList.add("event-row");
        for (let j = 0; j < 4; j++) {
            if (i >= events.length) {
                continue;
            }
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
            if (event.name.length > 30) {
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

            if (event._embedded.venues[0].city.name) {
                let eventCity = document.createElement("p");
                eventCity.innerText = event._embedded.venues[0].city.name;
                eventInfo.appendChild(eventCity);
            }

            eventItem.addEventListener("click", function() {
                window.location.href = "event.html?id=" + event.id;
            });

            eventItem.appendChild(eventInfo);
            eventRow.appendChild(eventItem);
            i++;
        }
        eventList.appendChild(eventRow);
    }
})

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