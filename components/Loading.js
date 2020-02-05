import React, { Component } from "react";

class Loading extends Component
{
    render()
    {
        return (
            <div id="preloader"><i className="icon-spin4 animate-spin" aria-hidden="true"></i></div>
        );
    }
};

export default Loading;