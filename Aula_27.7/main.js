const app = Vue.createApp({
    data() {
        return {
            produto: 'Camiseta Próton',
            imagem: 'assets/images/proton_cinza.jpg',
            descricao: 'Camiseta confortável e leve.',
            url: 'https://www.google.com/',
            estoque: 9,
            promocao: true,
            detalhes: [{material:'67% poliéster'},
                {material:'30% algodão'},
                {material:'3% elastano'}],
            cores:[
                {id: 'ED4F13', cor: 'Branca'},
                {id: 'ED4F14', cor: 'Cinza Mescla'}
            ]
        }
    }
});

const mountedApp = app.mount('#app');



