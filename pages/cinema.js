import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Head from "../components/Head";
import Header from "../components/Header";


class Cinema extends Component
{
    render()
    {
        return(
            <div>
                <Head
                    url="/"
                    title="Cinema | APP Shopping Park Lagos"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header page="Cinema" />
            </div>
        )
    }
}

export default Cinema;