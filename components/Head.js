import Global from "../Global";
import { Helmet } from "react-helmet";

import "../_static/less/theme.less";

const Head = (props) => (
    <div>
        <Helmet>
            <title>{props.title}</title>
            
            <meta charset="UTF-8"></meta>

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <meta property="og:locale" content={Global.settings.location} />
            <meta property="og:type" content={Global.settings.type} />
            
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={Global.settings.url + props.url} />
            <meta property="og:site_name" content={Global.settings.name} />
            <meta property="og:image" content={props.image} />
            <meta property="og:image:secure_url" content={props.image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:image" content={props.image} />

            <meta name="theme-color" content={Global.settings.color} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content={Global.settings.color} />
            <meta name="msapplication-navbutton-color" content={Global.settings.color} />

            <link rel="canonical" href={Global.settings.url + props.url} />
        </Helmet>
    </div>
);

export default Head;