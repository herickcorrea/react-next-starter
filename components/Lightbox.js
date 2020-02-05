import React, { Component } from "react";
import $ from 'jquery';

class Lightbox extends Component
{
    constructor(props) 
    {
        super(props);
        
        this._Lightbox = this._Lightbox.bind(this);
    }

    //region [Private]
    _htmlSlideImages(item)
    {
        return `<li>${item}</li>`;
    }

    _htmlSlideVideo(gallery)
    {
        var htmlSlide = '';

        $.map(gallery, function (value, index)
        {
            if (value.type == 'video')
            {
                htmlSlide += `
                    <li class="swiper-slide">
                        <div class="videoWrapper">
                            <iframe allowfullscreen="" allow="autoplay; fullscreen" src="//www.youtube-nocookie.com/embed/${value.id_video}?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>
                        </div>
                    </li>
                `;
            }
        });

        return htmlSlide;       
    }

    _openLightbox() {
        $('#GM5ligthbox').css({ 'display': 'block' })
        $('#GM5ligthbox .overlay').stop().animate({ opacity: 1 }, 200, function () {
            $(this).find('.swiper-container').stop().animate({ opacity: 1 }, 200);
        });
    }   

    _closeLightbox()
    {        
        $('#GM5ligthbox .overlay, #GM5ligthbox .overlay .swiper-container').stop().animate({ opacity : 0 },300,function()
        {
            $('#GM5ligthbox').remove();
        });

        $(document).unbind('mouseup');
    }    

    _Lightbox()
    {
        let self = this;
        
        var htmlSlide = `
            <div id="GM5ligthbox">
                <div class="overlay">
                    <a href="#" class="GM5lightboxClose">
                        <svg x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve">
                            <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667 149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333"/>
                        </svg>
                    </a>
                    <div class="swiper-container">
                        <ul class="swiper-wrapper">
                            ${self._htmlSlideVideo( this.props.gallery )}                    
                        </ul>
                    </div>
                    <i class="icon-spin4 animate-spin" aria-hidden="true"></i>
                </div>
            </div>`;

        $('#__next').append(htmlSlide);

        self._openLightbox();

        $('#GM5ligthbox a.GM5lightboxClose').on('click',function()
        {
            self._closeLightbox();
        });

        if( $('#GM5ligthbox') )
        {
            $(document).mouseup(function(e)
            {
                var container = $('#GM5ligthbox .overlay .swiper-container');

                if (!container.is(e.target) && container.has(e.target).length === 0)
                {
                    self._closeLightbox();
                }
            });
        }
    }

    componentDidMount()
    {
       
    }
    //endregion

    //region [Main]
    render()
    {
        return (
            <a href="#" title={this.props.label} className="gm5-lightbox-ignite" onClick={this._Lightbox}>
                {this.props.label}
            </a>
        )
    }
    //endregion
}

export default Lightbox;