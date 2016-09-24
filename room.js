var room = {
	uid: 'vineshkannan',
	videoId: 'EaDh0BVLxpo',
	timeString: '2m11s'
}

var Room = function(uid){
	return {
		id: uid,
		stream: {
			id: null,
			time: null
		},
		getStream: function(){
			//Fast-forward time?
			return this.stream;
		},
		requests: []
	}
}

var db = firebase.database();
var room = Room('vineshkannan');

var requestsRef = db.ref('rooms/' + room.id + '/requests');
requestsRef.on('child_added', function(snapshot){
	var request = snapshot.val();
	db.ref('rooms/' + request.requester + '/responses').push({
		responder: room.uid,
		stream: room.getStream()
	});
});

var responsesRef = db.ref('rooms/' + request.requester + '/responses');
responsesRef.on('child_added', function(snapshot){
	var response = snapshot.val();
	//handle response
});