$(document).ready(function() {

	$("#view").click(function(){
		$("#addProjects").slideToggle();
		$(document.body).animate({
			"scrollTop": $("#projects").offset().top
		}, 500);
	})

});
