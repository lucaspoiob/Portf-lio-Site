var loadImages;

$(document).ready(function(){
	$(document).on("scroll",function(){
		loadImages();
	});
	(loadImages = function(){
		$.each($(".lazy-img"), function(){
			var block = $(this);
			var image = block.find("img");
			if(isOnScreen(block)){
				var url = image.data("url");
				if(image.attr("src") != url){
					image.attr("src", url);
				};
			}
		});
	})();
});
