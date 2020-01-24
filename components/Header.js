import Global from "../Global";
import Link from 'next/link';

const Header = (props) => (
    <header id="mainHeader">
        <h1>
            <Link href='/'>
                <a>
                    <span className="hide">
                        {props.page} - {Global.settings.name}
                    </span>
                </a>
            </Link>
        </h1>
        <h2 className="hide">{Global.settings.description}</h2>
        <nav id="navigation">
            <div className="main-menu">
                <ul>
                    {
                        Global.pages.menu_principal.map((item, key) => (
                            <li key={key}><Link href={item.slug}><a>{item.title}</a></Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="second-menu">
                <ul>
                    {
                        Global.pages.menu_secundario.map((item, key) => (
                            <li key={key}><Link href={item.slug}><a>{item.title}</a></Link></li>
                        ))
                    }
                </ul>
                <div className="social">
                    Siga nossas redes:
                    <ul className="profiles">
                        {
                            Global.pages.menu_social.map((item, key) => (
                                <li key={key}><Link href={item.slug}><a><i className={item.icon} aria-hidden="true"></i><span className="hide">{item.title}</span></a></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;