import React, { Component } from "react";
import $ from 'jquery';
import Head from "../components/Head";
import Header from "../components/Header";

import Template from "../static/js/Template.js";


class Home extends Component
{
    componentDidMount()
    {
        $(function ()
        {
            const TemplateScripts = new Template(window);
        });
    }

    render()
    {
        return(
            <div id="wrapPageContent">
               
                <Head
                    url="/"
                    title="HOME"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    image="#"
                />
                <Header page="Home" />
            </div>
        )
    }
}

export default Home;