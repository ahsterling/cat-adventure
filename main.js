// Write a cat model HERE!

var Cat = function(name, escape_points) {
  this.name = name;
  this.escape_points = escape_points
}

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
  this.label = new_name.toLowerCase().replace(" ", "-");
  this.description = new_description;
  this.exits = new_exits;
  this.points = new_points;
  this.getDescription = function(){
    return this.name + ": " + this.description;
  };
};

//
// Begin fixture data!
//

var starbuck = new Cat("Starbuck", 5);

var kitchen = new Room(
  "Kitchen",
  "A nice roomy kitchen. Not very safe. There may be dogs nearby.",
  ["Living Room", "Dining Room"],
  0
);

var living_room = new Room(
  "Living Room",
  "Lots of perches, but frequently full of dogs. Kind of safe, but not a good spot for naps!",
  ["Kitchen"],
  2
);

var dining_room = new Room(
  "Dining Room",
  "There's a big table and some chairs and OH NO IT'S A DOG",
  ["Kitchen", "Bedroom"],
  -4
);


var bedroom = new Room(
  "Bedroom",
  "YAY! We finally found the nice toasty warm sunbeam!",
  ["Stairs"],
  20
);

var roomClick = function(room) {
  starbuck.escape_points = starbuck.escape_points + room.points;
  document.getElementById("escape-points").innerHTML = "Starbuck has " + starbuck.escape_points + " escape points"
  var runRoom = document.getElementById( "run-" + room.label );
  var lookRoom = document.getElementById( "look-"+ room.label );
  var currentLocation = document.getElementById("current-location");
  currentLocation.innerHTML = "Oh no! Starbuck is trapped in the " + room.name;
  var exits = room.exits
  document.getElementById("dining-room").setAttribute("style", "display: none");
  document.getElementById("living-room").setAttribute("style", "display: none");
  document.getElementById("kitchen").setAttribute("style", "display: none");
  document.getElementById("bedroom").setAttribute("style", "display: none");

  for (var exit in exits ) {
    roomLabel = exits[exit].toLowerCase().replace(" ", "-");
    var newRoom = document.getElementById(roomLabel);
    newRoom.setAttribute("style", "display: visible");
  }
}

var build_room = function(room) {
  console.log("building " + room.name + "...");
  var options = document.getElementById("options");
  console.log(options);
  var roomElement = document.createElement("div");
  roomElement.setAttribute("class", "room");
  roomElement.setAttribute("id", room.label);
  options.appendChild(roomElement);

  var runElement = document.createElement("span");
  runElement.setAttribute("class", "run");
  runElement.setAttribute("id", "run-"+ room.label);
  runElement.innerHTML = "Run towards the " + room.name + " ";

  var lookElement = document.createElement("span");
  lookElement.setAttribute("class", "look");
  lookElement.setAttribute("id", "look-" + room.label);
  lookElement.innerHTML = "Look at the " + room.name + " ";

  roomElement.appendChild(runElement);
  roomElement.appendChild(lookElement);

}

//
// End fixture data!
//

// don't forget to populate this with data!
// var starbuck = new Cat();

$(document).ready(function(){
  // should be replaced with your beginning/end game logic

  build_room(bedroom);
  build_room(kitchen);

  var myDiningRoom = document.getElementById("dining-room");
  var myLivingRoom = document.getElementById("living-room");
  var myKitchen = document.getElementById("kitchen");
  var myBedroom = document.getElementById("bedroom");

  var runDiningRoom = document.getElementById("run-dining-room");
  var runLivingRoom = document.getElementById("run-living-room");
  var runBedroom = document.getElementById("run-bedroom");
  var runKitchen = document.getElementById("run-kitchen");

  myKitchen.setAttribute("style", "display: none");
  myBedroom.setAttribute("style", "display: none");

  document.getElementById("escape-points").innerHTML = "Starbuck has " + starbuck.escape_points + " escape points"


  var play = true;
  var win = false;

    runDiningRoom.onclick = function() {
      roomClick(dining_room);
      if (starbuck.escape_points < 0) {
        alert("Starbuck ran out of escape points!  You lose.  Let's start again.")
        starbuck.escape_points = 5;
        myKitchen.setAttribute("style", "display: none");
        myBedroom.setAttribute("style", "display: none");
        myLivingRoom.setAttribute("style", "display: visible");
        myDiningRoom.setAttribute("style", "display: visible");

        var currentLocation = document.getElementById("current-location");
        currentLocation.innerHTML = "Oh no! Starbuck is trapped in the kitchen!";
        var escapePoints = document.getElementById("escape-points");
        escapePoints.innerHTML = "Starbuck has " + starbuck.escape_points + " escape points"

      }
    };

    runLivingRoom.onclick = function() {
      roomClick(living_room);
      if (starbuck.escape_points < 0) {
        alert("Starbuck ran out of escape points!  You lose.  Let's start again.")
        starbuck.escape_points = 5;
        myKitchen.setAttribute("style", "display: none");
        myBedroom.setAttribute("style", "display: none");
        myLivingRoom.setAttribute("style", "display: visible");
        myDiningRoom.setAttribute("style", "display: visible");

        var currentLocation = document.getElementById("current-location");
        currentLocation.innerHTML = "Oh no! Starbuck is trapped in the kitchen!";
        var escapePoints = document.getElementById("escape-points");
        escapePoints.innerHTML = "Starbuck has " + starbuck.escape_points + " escape points"

      }

    };

    runBedroom.onclick = function() {
      alert("win!  Let's start over :)");
      starbuck.escape_points = 5;
      myKitchen.setAttribute("style", "display: none");
      myBedroom.setAttribute("style", "display: none");
      myLivingRoom.setAttribute("style", "display: visible");
      myDiningRoom.setAttribute("style", "display: visible");

      var currentLocation = document.getElementById("current-location");
      currentLocation.innerHTML = "Oh no! Starbuck is trapped in the kitchen!";
      var escapePoints = document.getElementById("escape-points");
      escapePoints.innerHTML = "Starbuck has " + starbuck.escape_points + " escape points"

    };

    runKitchen.onclick = function() {
      roomClick(kitchen);
      if (starbuck.escape_points < 0) {
        alert("Starbuck ran out of escape points!  You lose.  Let's start again.")
        starbuck.escape_points = 5;
        myKitchen.setAttribute("style", "display: none");
        myBedroom.setAttribute("style", "display: none");
        myLivingRoom.setAttribute("style", "display: visible");
        myDiningRoom.setAttribute("style", "display: visible");

        var currentLocation = document.getElementById("current-location");
        currentLocation.innerHTML = "Oh no! Starbuck is trapped in the kitchen!";
        var escapePoints = document.getElementById("escape-points");
        escapePoints.innerHTML = "Starbuck has " + starbuck.escape_points + " escape points"

      }

    $("#look-kitchen").click(function() {
      alert( kitchen.getDescription() );
    });

    $("#look-bedroom").click(function() {
      alert( kitchen.getDescription() );
    });

    $("#look-living-room").click(function() {
      alert( living_room.getDescription() );
    });

    $("#look-dining-room").click(function() {
      alert( dining_room.getDescription() );
    });

  };

  if ( (play == false) && ( win == true ) ) {
    alert("You escape and win!");
  } else if ( ( play == false ) && ( win == false ) ) {
    alert("You lose!");
  };



});
