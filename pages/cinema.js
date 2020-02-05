import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Head from "../components/Head";
import Loading from '../components/Loading';
import Error from '../components/Error';
import Header from "../components/Header";
import Imagem from "../components/Imagem";
import EllipsisText from "react-ellipsis-text";
import Lightbox from '../components/Lightbox';
import Footer from '../components/Footer';

const API = 'https://shoppingparklagos.com.br/json/cinema/';


class Lojas extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            filmes: [],
            isLoading: false,
            error: null,
        };
    }

    //region [Private]
    _Expand() 
    {
        
    }
    //endregion
    
    //region [Private]
    componentDidMount()
    {
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
            .then(data => this.setState({ filmes: data.result, isLoading: false }))
            .catch (error => this.setState({ error, isLoading: false }));
        
        this._Expand();
    }
    //endregion

    render()
    {
        const { filmes, isLoading, error } = this.state;

       if (error)
        {
            return <Error message={error.message} />;
        }

        if (isLoading)
        {
            return <Loading/>;
        }

        return(
            <div>
                <Head
                    url="/cinema"
                    title="Cinema"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header
                    url="/cinema"
                    page="Cinema"
                    icon="icon-cinema"
                />
                <main role="main">
                    <section id="cinema">
                        <h2 className="hide">Todas as Seções</h2>
                        <ul>
                            {
                                filmes.map((filme,key) =>
                                    <li key={key} className="filme">
                                        <figure className="col-xs-5">
                                            <Imagem
                                                classes="imgLazyLoad"
                                                image={filme.capa}
                                                thumbnail={filme.capa}
                                                width={filme.width}
                                                height={filme.height}
                                            />
                                        </figure>
                                        <div className="content col-xs-7">
                                            <h3>{filme.titulo}</h3>
                                            <div className="colapse colapsed">
                                                <p className="fade">{filme.sinopse}</p>
                                            </div>
                                            <p>
                                                <a href="#" title="Mais Informações" className="seeMore"><i className="icon-plus-2" aria-hidden="true"></i> Mais Informações</a>
                                            </p>
                                            <div className="trailer">
                                                <Lightbox 
                                                    label="Assistir Trailer"
                                                    gallery={
                                                        [
                                                            {
                                                                id_video: filme.video_id,
                                                                type: 'video'
                                                            }
                                                        ]
                                                    }
                                                />
                                            </div>                                                
                                        </div>
                                        <div className="col-xs-12 colapse">
                                            <div className="movieInfo">
                                                <ul>
                                                    <li>
                                                        <strong>Gênero</strong>
                                                    </li>
                                                    <li>
                                                        <strong>Classificação</strong>
                                                    </li>
                                                    <li>
                                                        <strong>Duração</strong>
                                                    </li>
                                                </ul>
                                                <p className="genero">
                                                    <strong>Gênero</strong>
                                                </p>                                                
                                            </div>
                                        </div>                                        
                                    </li>
                                )
                            }                            
                        </ul>
                    </section>
                </main>
                <Footer page="/lojas" />
            </div>
        )
    }
}

export default Lojas;