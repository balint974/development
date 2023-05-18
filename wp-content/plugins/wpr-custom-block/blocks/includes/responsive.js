(function ($) {
	let blockWidth = $(".wp-block-wpriders-grid-posts").width() - 15; //substract gap
	let blockHalf = blockWidth / 2;
	let blockQuarter = blockHalf / 2;
	// console.log(blockWidth + "/" + blockHalf + "/" + blockQuarter);

	let mainPost = $(
		".wp-block-wpriders-grid-posts .wpr-grid-post.wpr-grid-main-post"
	);
	let secPosts = $(
		".wp-block-wpriders-grid-posts .wpr-grid-post:not(.wpr-grid-main-post)"
	);
	// console.log($(document).width());

	// if ($(document).width() > 600) {
	mainPost.width(blockHalf + 5);
	mainPost.height(blockHalf + 5);
	$.each(secPosts, function () {
		$(this).width(blockQuarter);
		$(this).height(blockQuarter);
	});
	// }

	// console.log(mainPost);
	// console.log(secPosts);
})(jQuery);
