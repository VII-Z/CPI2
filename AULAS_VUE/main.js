const app = Vue.createApp({
    data() {
        return {
            carrinho: 0,
            produto: 'Camiseta Próton',
            marca: 'GV Varejo',
            produtoSelecionado: 0,
            detalhes: ['67% poliéster', '30% algodão', '3% elastano'],
            cores: [
                { id: 'ED4F13', cor: '#ffffff', imagem: './assets/images/proton_branca.jpg',quantidade: 50, promocao: true },
                { id: 'ED4F14', cor: '#a4a4a6', imagem: './assets/images/proton_cinza.jpg',quantidade: 0, promocao: false}
              ]
        }
    },
    methods: {
        addCarrinho() {
            this.carrinho++
        },
        minusCarrinho(){
            if(this.carrinho > 0) {
                this.carrinho--
        }
    },
        atualizaProdutoSelecionado(indice){
            this.produtoSelecionado = indice
        }
    },
    computed: {
        titulo() {
            return this.produto + ' - ' + this.marca
        },
        imagem(){
            return this.cores[this.produtoSelecionado].imagem
        },
        estoque(){
            return this.cores[this.produtoSelecionado].quantidade
        },
        promocao(){
            return this.cores[this.produtoSelecionado].promocao
        }
    }
})

const mountedApp = app.mount('#app')
