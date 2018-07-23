var mousePosition = {x:0, y:0};
$(document).bind('mousemove',function(mouseMoveEvent){
mousePosition.x = mouseMoveEvent.clientX;
mousePosition.y = mouseMoveEvent.clientY;
});
$(document).on('keydown', function(e) {
	if(e.key.toLowerCase() == 'q' && e.ctrlKey) {
		var video = $(document.elementFromPoint(mousePosition.x, mousePosition.y));
		if(typeof video.attr('src') !== 'undefined') window.open(video.attr('src'));
	}
});
