var mousePosition = {x:0, y:0};
$(document).bind('mousemove',function(mouseMoveEvent){
mousePosition.x = mouseMoveEvent.pageX;
mousePosition.y = mouseMoveEvent.pageY;
});
$(document).on('keydown', function(e) {
	if(e.key.toLowerCase() == 'q' && e.ctrlKey) {
		var video = $(document.elementFromPoint(mousePosition.x, mousePosition.y)).parent().parent().find('video source');
		if(typeof video.attr('src') !== 'undefined') window.open(video.attr('src'));
	}
});
