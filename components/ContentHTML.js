import React, { Component } from "react";

function createMarkup(html)
{
    return { __html: html };
}

class ContentHTML extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div className={this.props.contentClass} dangerouslySetInnerHTML={createMarkup(this.props.content)} />
        )
    }
}

export default ContentHTML;