Apartments = new Mongo.Collection("apartments");
 
if (Meteor.isClient) {

  // This code only runs on the client
  Template.search.helpers({
    searchForm: Session.get("searchForm"),
    apartments: function() {
	var searchForm = Session.get("searchForm");
	if (searchForm) {
		console.log('doing mongo query. Rooms: ' + searchForm.minRooms + ' to ' + searchForm.maxRooms);
		var results = Apartments.find({
			$and: [
				{'info.rooms': {$gte: parseInt(searchForm.minRooms)}},
				{'info.rooms': {$lte: parseInt(searchForm.maxRooms)}}	
			]
		}, {sort: {createdAt: -1}});
		return results;
	} else {
		console.log('returning empty list');
		return [];
	}
    }
  });

  Template.search.events({
    "submit .search-form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element and save it into session
	var searchForm = {}
	_.each(['minRooms', 'maxRooms', 'minFloor', 'maxFloor'], function(field) {searchForm[field] = event.target[field].value})

	Session.set("searchForm", searchForm);

	if (true) return;
 
      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });

}
