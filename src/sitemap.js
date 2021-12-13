export default {

    Company: {
        fqdn: 'westerdao.finance',
        tld: '.finance',
        name: 'westerdao',
        title: 'westerdao.finance',
        slogan: 'Come join West',
        Meta: {
            description: 'Westerdao.finance is a fork of OlympusDAO.',
        }
    },

    PRODUCTS: {

        // 'cit1x': {
        //     fqdn: 'https://www.cit1x.finance',
        //
        //     name: 'Cit1x',
        //     slogan: 'We help Citizens trade.',
        //     description: "Efficient Trade Router",
        //
        //     page: {
        //         href: '/cit1x',
        //         meta: {},
        //         hero: {
        //             strings: ['Citizens 1st', 'Cit1'], suffix: 'x'
        //         },
        //         action: 'Efficient Trade Router'
        //     },
        // },
        //
        // 'cit1s': {
        //     fqdn: 'https://www.cit1s.finance',
        //
        //     name: 'Cit1s',
        //     slogan: 'We help Citizens swap.',
        //     description: "Citizen Swap Shop",
        //
        //     page: {
        //         href: '/cit1s',
        //         meta: {},
        //         hero: {
        //             strings: ['Citizens 1st', 'Cit1'], suffix: 's'
        //         },
        //         action: 'Citizen Swap Shop'
        //     },
        // },
        //
        // 'uusd': {
        //     fqdn: 'https://www.uusd.finance',
        //
        //     name: 'UUSD',
        //     slogan: 'We help Citizens save.',
        //     description: "Meta Stable Coin",
        //
        //     page: {
        //         href: '/uusd',
        //         meta: {},
        //         hero: {
        //             strings: ['Universal', 'UBI', 'U'], suffix: 'USD'
        //         },
        //         action: 'Meta Stable Coin'
        //     },
        // },

    },

    forPage(id) {
        return {
            Company: this.Company,
            Product: this.PRODUCTS[id],
        };
    }
}