
if(Meteor.isClient){
	var picture;
	Template.publish.events({
		"change #picture": function(event){
			var file = event.target.files[0],
				reader = new FileReader();

			reader.onload = function(e){
				picture = reader.result;
				Session.set("picture", reader.result);
			};

			reader.readAsDataURL(file);
		},
		"submit .publish-apartment": function(event){
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
					picture: picture,
					floor: event.target.floor.value != null ? parseInt(event.target.floor.value) : null,
					rooms: event.target.rooms.value != null ? parseInt(event.target.rooms.value) : null,
					price: event.target.price.value != null ? parseInt(event.target.price.value) : null
				}
			});

			event.target.reset();
		}
	});

	Template.publish.helpers({
		picture: function(){
			return Session.get("picture");
		}
	});
}