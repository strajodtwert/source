API.on(API.ADVANCE, callback);

function callback () {

	var a = API.getMedia().cid;
	setTimeout(function() {
	    var b = API.getMedia().cid;
	    if (a === b) {
	        API.sendChat("Pesma zabagala, skipujem!");
	        API.moderateForceSkip();
	    }
	}, (API.getMedia().duration * 1000) + 5000);

}

API.chatLog("Ukljucujem pametno glasanje, Refreshuj stranicu da iskljucis");

/* Basically, this will only force skip if the track is definately stuck
   It uses the duration of the track + 5 seconds to ensure the track has
   finished playing and does need a skip to get it changed.              */
