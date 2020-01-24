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
            {slug: '/',                title: 'home'},
            {slug: '/cinema',          title: 'Cinema'},
            {slug: '/lojas',           title: 'Lojas'},
            {slug: '/alimentacao',     title: 'Alimentação'},
            {slug: '/eventos',         title: 'Eventos'},
            {slug: '/estacionamento',  title: 'Estacionamento'},
            {slug: '/promocoes',       title: 'Promoções' },
            {slug: '/park-lounge',     title: 'Park Lounge'},
            {slug: '/meus-cupons',     title: 'Meus Cupons'},
            {slug: '/qr-code',         title: 'QR Code'}
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