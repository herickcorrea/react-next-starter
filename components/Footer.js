import React, { Component } from "react";
import Link from 'next/link';
import Global from "../Global";


class Footer extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div id="mainFooter" className={this.props.classe}>
                <div className="wrapMenu">
                    <ul>
                        {
                            Global.pages.menu_principal.map((link, key) =>
                                {
                                    if (link.isFooter == true)
                                    {
                                        if (this.props.page == link.slug)
                                        {
                                            return <li key={key} className="active">
                                                <Link href={link.slug}>
                                                    <a title={link.title}>
                                                        <i className={link.icon}></i>
                                                        <span>{link.title}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        }
                                        else
                                        {
                                            return <li key={key}>
                                                <Link href={link.slug}>
                                                    <a title={link.title}>
                                                        <i className={link.icon}></i>
                                                        <span>{link.title}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        }
                                    }
                                }
                            )                            
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;