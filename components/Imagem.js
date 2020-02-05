import React, { Component } from "react";
import $ from 'jquery';

// Progressive Image DOC
// https://www.npmjs.com/package/react-progressive-image

class Imagem extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this._init_js();
    }

    //region [Private]
    _init_js()
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
    //endregion

    render()
    {
        return (
            <div className={this.props.classes} data-img={this.props.image}>
                <img src={this.props.thumbnail} className="thumbnail" />
                {this.props.width
                    ? <img src={"https://fakeimg.pl/" + this.props.width + "x" + this.props.height + "/f2f2f2/ecac4f/?text=...&font=%22Yanone%20Kaffeesatz%22"} className="fakeimage" />
                    : ''
                }                
            </div>
        );
    }
};

export default Imagem;