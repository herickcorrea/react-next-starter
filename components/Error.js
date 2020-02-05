import React, { Component } from "react";

class Error extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div id="preloader" className="error"><div className="content">{this.props.message}</div></div>
        );
    }
};

export default Error;