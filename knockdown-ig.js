var mousePosition = {x:0, y:0};
$(document).bind('mousemove',function(mouseMoveEvent){
mousePosition.x = mouseMoveEvent.pageX;
mousePosition.y = mouseMoveEvent.pageY;
});
$(document).on('keydown', function(e) {
	if(e.key.toLowerCase() == 'q' && e.ctrlKey) {
		console.log('ctrl+q pressed');
		var video = $(document.elementFromPoint(mousePosition.x, mousePosition.y)).closest('article').find('video');
		if(video.length==0) {
			console.log('couldnt find article, finding section');
			video = $(document.elementFromPoint(mousePosition.x, mousePosition.y)).closest('section').find('video source');
		}
		console.log(video.length);
		if(typeof video.attr('src') !== 'undefined') {
			window.open(video.attr('src'));
		}
		else {

		}
	}
});
