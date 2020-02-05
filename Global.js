const App = {
    settings : {
        url         : 'https://localhost:3000',
        type        : 'app',
        location    : 'pt_BR',
        color       : '#fff',
        name        : 'Aplicativo Web Shopping Park Lagos',
        description : 'Aplicativo Web do Shopping Park Lagos',
    },
    pages : {
        menu_principal : [
            {slug: '/',                icon: 'icon-home',                       title: 'Home',              isFooter : true},
            {slug: '/cinema',          icon: 'icon-cinema',                     title: 'Cinema',            isFooter : true},
            {slug: '/lojas',           icon: 'icon-shopping-bag',               title: 'Lojas',             isFooter : true},
            {slug: '/alimentacao',     icon: 'icon-food',                       title: 'Alimentação',       isFooter : true},
            {slug: '/eventos',         icon: 'icon-calendar',                   title: 'Eventos',           isFooter : true},
            {slug: '/estacionamento',  icon: 'icon-cab',                        title: 'Estacionamento',    isFooter : false},
            {slug: '/promocoes',       icon: 'icon-gift',                       title: 'Promoções',         isFooter : false},
            {slug: '/park-lounge',     icon: 'icon-shopping-support-online',    title: 'Park Lounge',       isFooter : false},
            {slug: '/meus-cupons',     icon: 'icon-ticket',                     title: 'Meus Cupons',       isFooter : false},
            {slug: '/qr-code',         icon: 'icon-qrcode',                     title: 'QR Code',           isFooter : false}
        ],
        menu_secundario : [
            {slug: '/como-chegar',     title: 'Como Chegar'},
            {slug: '/comodidades',     title: 'Comodidades'},
            {slug: '/sobre',           title: 'Sobre'},
        ],
        menu_social : [
            {slug: '#',     icon: 'icon-facebook',     title: 'Facebook'},
            {slug: '#',     icon: 'icon-instagram',    title: 'Instagram'},
        ],
    },
}

export default App;