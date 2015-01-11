// Write a cat model HERE!

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
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

//
// End fixture data!
//

// don't forget to populate this with data!
// var starbuck = new Cat();

$(document).ready(function(){
  // should be replaced with your beginning/end game logic
  // while (true) {
  var runDiningRoom = document.getElementById("run-dining-room");
  runDiningRoom.onclick = function() {
    var currentLocation = document.getElementById("current-location");
    currentLocation.innerHTML = "Oh no! Starbuck is trapped in the dining room!"
    console.log(dining_room.exits);
    var room = runDiningRoom.parentElement;
    var nextRoom = document.getElementsByClassName('room')[1];
    // console.log("nextRoom is" + nextRoom);
    room.removeChild(document.getElementById("run-dining-room"));
    room.removeChild(document.getElementById("dining-room"));
    nextRoom.removeChild(document.getElementById("run-living-room"));
    nextRoom.removeChild(document.getElementById("living-room"));
    // var rooms = room.children;
    // console.log(rooms);
    // for (var i in rooms) {
    //   i.remove();
    //   // console.log(room);
    // };
    var exits = dining_room.exits;
    for (var exit in exits) {
      console.log(room);
      console.log(exit);
      var element = document.createElement("span");
      element.setAttribute("class", "run");
      element.setAttribute("id", "run-"+ exits[exit] );
      element.innerHTML = "Run towards the " + exits[exit];
      console.log(element)
      room.appendChild(element);
      // room.appendChild("<span class='run' id='run-" + exit + "'>Run towards the dining room</span>");
      // room.appendChild("<span class='look' id='" + exit + "'>Look at the " + exit + "</span>");
    }
    // for (var i = 0; i < new_rooms.length; i++) {
    //   new_room = new_rooms[i];
    //   room.removeChild(".run");
    //   room.removeChild(".look");
    //   room.appendChild("<span class='run' id='run-" + new_room[i] + "'>Run towards the dining room</span>");
    //   room.appendChild("<span class='look' id='" + new_room[i] + "'>Look at the " + new_room[i] + "</span>");
      // document.createElement("<span class='run' id='run-" + new_room[i] + "'>Run towards the dining room</span>")
      // document.createElement("<span class='look' id='" + new_room[i] + "'>Look at the " + new_room[i] + "</span>")

    // }

  };

  document.getElementById("run-living-room").onclick = function() {
    console.log("run living room");
  };

  // document.getElementById("run-kitchen").onclick = function() {
  //   console.log("run kitchen");
  // }
  //
  // document.getElementById("run-dining-room").onclick = function() {
  //   console.log("run bedroom");
  // }




    $("#kitchen").click(function() {
      alert( kitchen.getDescription() );
    })

    $("#bedroom").click(function() {
      alert( kitchen.getDescription() );
    })

    $("#dining-room").click(function() {
      alert( dining_room.getDescription() );
    });

    $("#living-room").click(function() {
      alert( living_room.getDescription() );
    });
    // Add more!
  // }
});
