
    function Place(name, location, landmarks, timeOfYear, notes) {
      this.name = name;
      this.location = location;
      this.landmarks = landmarks;
      this.timeOfYear = timeOfYear;
      this.notes = notes;
    }

    var seattle = new Place("Seattle", "Wa State", ["Space needle", "Pike Place"], "Summer","aweful traffic");
    var deathValley  = new Place("Death Valley", "CA State",["Sand", "Big valley"],"Spring", "Gets over 100 regularly");
    var LasVagas = new Place("Las Vagas", "Nevada", ["Golden Nugget Casino", "New York New York Hotel", "Luxor Hotal"], "Fall - Spring", "bring rollerblades")

    // var LasVagas = {
    //   location: "Nevada",
    //   landmarks: ["Golden Nugget Casino"],
    //   timeOfYear: "Fall - Spring",
    //   notes: "bring rollerblades"
    // }
    var Tacoma = {
      location: "Washington",
      landmarks: ["Tacoma Dome"],
      timeOfYear: "any",
      notes: "stay in the light"
    }

    Place.prototype.all = function() {
      return "name: " + this.name + ", Location: " + this.location + ", Landmarks: " + this.landmarks
      + ", Best time of year: " + this.timeOfYear +
      ", Notes: " + this.notes;
    }

    var x = []
    for (var i in Tacoma){
      x.push(Tacoma[i]);
    }


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    //var inputtedFirstName = $("input#new-first-name").val();
  //  var inputtedLastName = $("input#new-last-name").val();

  //  var newContact = new Contact(inputtedFirstName, inputtedLastName);

    //$("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

  //  $("input#new-first-name").val("");
  //  $("input#new-last-name").val("");

  $("p.outPut1").text(seattle.all());
  $("p.outPut2").text(deathValley.all());
  $("p.outPut3").text(LasVagas.all());
  $("p.outPut4").text(x);
  });
});
