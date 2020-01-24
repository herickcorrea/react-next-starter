import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Head from "../components/Head";
import Header from "../components/Header";
import Imagem from "../components/Imagem";

const API = 'https://shoppingparklagos.com.br/json/lojas/busca/';

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
            return <p>{error.message}</p>;
        }
        
        if (isLoading)
        {
            return <p>Loading ...</p>;
        }

        return(
            <div>
                <Head
                    url="/lojas"
                    title="Lojas"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header page="Lojas" />
                <main role="main">
                    <section>
                        <h2>Main Content</h2>
                        <ul>
                            {
                                lojas.map(loja =>
                                    <li key={loja.nid}>
                                        <Imagem classes="imgLazyLoad" img={loja.imagem} blank={loja.imagem} />
                                        {loja.titulo}
                                    </li>
                                )
                            }                            
                        </ul>
                    </section>
                </main>
            </div>
        )
    }
}

export default Lojas;