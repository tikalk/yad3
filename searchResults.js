
if (Meteor.isClient) {

  // This code only runs on the client
  Template.searchResults.helpers({

    searchForm: Session.get("searchForm"),
    apartments: function() {
	return Apartments.find({
			$and: [
				{'info.rooms': {$gte: parseInt(this.queryParams.minRooms)}},
				{'info.rooms': {$lte: parseInt(this.queryParams.maxRooms)}},	
				{'info.floor': {$gte: parseInt(this.queryParams.minFloor)}},	
				{'info.floor': {$lte: parseInt(this.queryParams.maxFloor)}},	
				{'info.price': {$gte: parseInt(this.queryParams.minPrice)}},	
				{'info.price': {$lte: parseInt(this.queryParams.maxPrice)}},	
				{'address.geohash': {$regex: '^' + this.queryParams.geohash}}
			]
		}, {sort: {createdAt: -1}})/*.hint({"address.geohash" : 1})*/;
    }
  });

}
