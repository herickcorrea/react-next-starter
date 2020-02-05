import React, { Component } from "react";
import Link from 'next/link';
import Global from "../Global";

const API = 'https://shoppingparklagos.com.br/json/default/';

class Mainmenu extends Component
{
    _ehCompoAtivo = false;

    constructor(props)
    {
        super(props);

        this.state = {
            redes: [],
            error: null,
        };
    }

    componentDidMount()
    {
        this._ehCompoAtivo = true;
        this.setState({ isLoading: true });

        fetch(API)
            .then(response => {
                if (response.ok)
                {
                    return response.json();
                }
                else
                {
                    throw new Error('Deu erro no carregamento do JSON ...');
                }
            })
            .then(data => 
            {
                if(this._ehCompoAtivo)
                {
                    this.setState({ redes: data.result[0].redes_sociais, isLoading: false })
                }
            })
            .catch (error => 
            {
                if(this._ehCompoAtivo)
                {
                    this.setState({ error, isLoading: false });
                }
            });
    }

    componentWillUnmount()
    {
        this._ehCompoAtivo = false;
    }

    render()
    {
        const { redes, error } = this.state;

        return (
            <div id="menuComponent">
                <nav id="navigation">
                    <div className="wrapMenu">
                        <h3>Menu</h3>
                        <div className="main-menu">
                            <ul>
                                {
                                    Global.pages.menu_principal.map((link, key) =>
                                        <li key={key}><Link href={link.slug}><a title={link.title}><i className={link.icon}></i> {link.title}</a></Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="second-menu">
                            <ul className="institucional">
                                {
                                    Global.pages.menu_secundario.map((link, key) =>
                                        <li key={key}><Link href={link.slug}><a title={link.title}><i className={link.icon}></i> {link.title}</a></Link></li>
                                    )
                                }
                            </ul>
                            <h4>Siga nossas redes:</h4>
                            <ul className="social">
                                {
                                    redes.map((rede, key) =>
                                        <li key={key}><Link href={rede.url}><a title={rede.name} target="_blank"><i className={rede.icon}></i><span className="hide">{rede.name}</span></a></Link></li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="action">
                    <span className="open activated"><i className="icon-menu"></i></span>
                    <span className="close"><i className="icon-close"></i></span>
                </div>
            </div>
        )
    }
}

export default Mainmenu;