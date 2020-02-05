import React, { Component } from "react";
import Head from "../components/Head";
import Loading from '../components/Loading';
import Error from '../components/Error';
import Header from "../components/Header";
import Imagem from "../components/Imagem";
import ContentHTML from "../components/ContentHTML";
import Footer from '../components/Footer';

const API = 'https://shoppingparklagos.com.br/json/sobre/';

class Home extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            content: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount()
    {
        this.setState({ isLoading: true });

        fetch(API)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Deu erro no carregamento do JSON ...');
            }
        })
        .then(data => this.setState({ content: data.result[0], isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
        
    }    

    render()
    {
        const { content, isLoading, error } = this.state;

        if (error)
        {
            return <Error message={error.message} />;
        }

        if (isLoading)
        {
            return <Loading/>;
        }
        
        return(
            <div id="wrapPageContent">               
                <Head
                    url="/sobre"
                    title="Sobre"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header page="Home" url="/sobre" />
                <main role="main">
                    <article id="pageSobre">
                        <figure>
                            <Imagem 
                                classes="imgLazyLoad"
                                image={content.imagem} 
                                thumbnail={content.thumbnail} 
                                width={content.width}
                                height={content.height} 
                            />
                        </figure>
                        <ContentHTML contentClass="content col-xs-12" content={content.texto} />
                    </article>
                </main>
                <Footer page="/sobre"/>
            </div>
        )
    }
}

export default Home;