
if(Meteor.isClient){
	Template.publish.events({
		"submit .publish-apartment": function(event){
			// Prevent default browser form submit
			event.preventDefault();

			var doc = {},
				fields = ['name', 'phone', 'picture', 'floor', 'rooms', 'price'];

			fields.forEach(function(field){
				doc[field] = event.target[field].value;
			});

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
		}
	});
}