import React, { Component } from "react";
import $ from 'jquery';
import Global from "../Global";
import Mainmenu from './Mainmenu.js';

// import Link from 'next/link';
// import HeaderScripts from "../_static/js/Header.js";

import img_logo_src from '../_static/images/logo-park-lagos.png';

class Header extends Component
{
    componentDidMount()
    {
        this._init_js();
    }

    constructor(props) 
    {
        super(props);
    }

    //region [Private]
    _h1() 
    {
        let h1 = null;
        // Logo
        if (this.props.ishome) {
            h1 = <a href="/" title="Voltar para o início">
                    <span className="hide">
                        {this.props.page} - {Global.settings.name}
                    </span>
                    <img src={img_logo_src} />
                </a>;
        }
        else {
            if (this.props.icon)
            {
                h1 = <a href={this.props.url} title={this.props.page} className="title"><i className={this.props.icon}></i> {this.props.page}</a>;
            }
            else {
                h1 = <a href={this.props.url} title={this.props.page} className="title">{this.props.page}</a>;
            }
        }
        return h1;
    }

    _init_js()
    {
        let header = $('#mainHeader');
		let openMenu = $('#mainHeader #menuComponent .action span.open');
		let closeMenu = $('#mainHeader #menuComponent .action span.close');
		let altura = $(window).height();

		$('#mainHeader #menuComponent nav').height(50);

		openMenu.on('click',function()
		{
			$(this).removeClass('activated');
			
			header.addClass('opened');
			closeMenu.addClass('activated');
			
			$('main').css({ 'overflow': 'hidden' });
			$('#mainHeader #menuComponent nav').height(altura);
		});

		closeMenu.on('click', function()
		{
			$(this).removeClass('activated');
			
			header.removeClass('opened');
			openMenu.addClass('activated');
			
			$('main').css({ 'overflow': 'auto' });
			$('#mainHeader #menuComponent nav').height(50);
		});

    }
    //endregion

    //region [Main]
    render()
    {
        return (
            <header id="mainHeader">
                <h1>{this._h1()}</h1>
                <h2 className="hide">{Global.settings.description}</h2>
                <Mainmenu />
            </header>
        )
    }
    //endregion
}

export default Header;