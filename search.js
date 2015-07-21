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


}
