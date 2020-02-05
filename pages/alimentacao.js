import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Head from "../components/Head";
import Loading from '../components/Loading';
import Error from '../components/Error';
import Header from "../components/Header";
import Imagem from "../components/Imagem";
import ContentHTML from "../components/ContentHTML";
import Footer from '../components/Footer';

const API = 'https://shoppingparklagos.com.br/json/alimentacao/';


class Lojas extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            lojas: [],
            isLoading: false,
            error: null,
        };
    }

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
            .then(data => this.setState({ lojas: data.result, isLoading: false }))
            .catch (error => this.setState({ error, isLoading: false }));
    }

    render()
    {
        const { lojas, isLoading, error } = this.state;

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
                    url="/alimentacao"
                    title="Alimentação"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header
                    url="/alimentacao"
                    page="Alimentação"
                    icon="icon-food"
                />
                <main role="main">
                    <section id="nossasLojas">
                        <h2 className="hide">Nossos Restaurantes</h2>
                        <ul>
                            {
                                lojas.map(loja =>
                                    <li key={loja.nid}>
                                        <figure>
                                            <Imagem
                                                classes="imgLazyLoad"
                                                image={loja.imagem}
                                                thumbnail={loja.thumbnail}
                                                width={loja.width}
                                                height={loja.height}
                                            />
                                        </figure>
                                        <h3>{loja.titulo}</h3>
                                        {loja.telefone ? (<p><strong>Telefone:</strong> {loja.telefone}</p>) : ''}
                                        {loja.piso ? (<p><strong>Piso:</strong> {loja.piso}</p>) : ''}
                                        {loja.loja ? (<p><strong>Loja:</strong> {loja.loja}</p>) : ''}
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