import React, { Component } from "react";
import Head from "../components/Head";
import Loading from '../components/Loading';
import Error from "../components/Error";
import Header from "../components/Header";
import SimpleSwiper from "../components/swiper";
import Footer from '../components/Footer';

const API = 'https://shoppingparklagos.com.br/json/home/';

class Home extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            banners: [],
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
        .then(data => this.setState({ banners: data.result.banner, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render()
    {
        const { banners, isLoading, error } = this.state;

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
                    url="/"
                    title="HOME"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header 
                    ishome="true"
                    page="Home"
                />
                <div id="bannerDestaques">
                    <SimpleSwiper slide={banners}/>
                </div>
                <Footer classe="big" page="/"/>
            </div>
        )
    }
}

export default Home;