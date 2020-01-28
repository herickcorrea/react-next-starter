
import $ from 'jquery';


class Template
{
	ImageLazyLoad()
	{
		$('.imgLazyLoad').each(function () {
			if (!$(this).hasClass('responsiveImage')) {
				if ($(this).find('.img').length > 0) {
					$(this).addClass('loaded');
					$(this).find('.img').css({ 'background-image': 'url(' + $(this).data('img') + ')' });
				}
				else {
					$(this).addClass('loaded');
					$(this).prepend('<div class="img" style="background-image:url(' + $(this).data('img') + ')"></div>');
				}
			}
		});
	}

	constructor($)
	{
		let self = this;

		this.ImageLazyLoad($);
	}
}

export default Template;