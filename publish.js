
if(Meteor.isClient){
	Template.publish.events({
		"submit .publish-apartment": function(event){
			// Prevent default browser form submit
			event.preventDefault();

			Apartments.insert({
				contact: {
					name: event.target.name.value,
					phone: event.target.phone.value
				},
				address: {
					info: 'Ben-Gurion 17',
					geohash: 'a554hd7'
				},
				info: {
					picture: 'image',
					floor: parseInt(event.target.floor.value),
					rooms: parseInt(event.target.rooms.value),
					price: parseFloat(event.target.price.value)
				}
			});

			event.target.reset();
		}
	});
}