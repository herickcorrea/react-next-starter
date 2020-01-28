import React, { Component } from "react";
import Template from "../_static/js/Template.js";

class Imagem extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const TemplateScripts = new Template();
    }

    render()
    {
        return (
            <div className={this.props.classes} data-img={this.props.img}>
                <img src={this.props.img} />
            </div>
        );
    }
};

export default Imagem;