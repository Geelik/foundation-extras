$(document).ready(function(){
	const aValidSizes = ['small', 'medium', 'large'];
	$(window).on('changed.zf.mediaquery', function(oEvent, sNewSize, sOldSize) {
		if (aValidSizes.includes(sNewSize) && aValidSizes.includes(sOldSize))
		{
			$(window).trigger('mq:change:'+sNewSize, [sOldSize]);
		}
	});
});