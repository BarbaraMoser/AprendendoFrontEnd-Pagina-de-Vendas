<template>
  <div id="app">
    <h1>PESSOA DE SORTE - SORTEIO</h1>

    <div class="qtdePessoas">
      <label>Qtde de pessoas para o sorteio</label>
      <input class="qtdePessoasSorteio" type="number" required v-model.number = "qtdePessoasNecessarias" />
    </div>

    <form-pessoas :pessoas='pessoas' :qtdePessoas='qtdePessoasNecessarias' @adicionar='adicionarPessoa'></form-pessoas>
    <button class="button" @click="sortearPessoa">Sortear</button>
    <br>
    <br>
    Filtro por nome
    <input type="text" required v-model = "filtroPessoa" />
    
    <br>
    <table-pessoas :pessoas='filtrarPessoa' :nomeSorteado='nomeSorteado' @deletar='deletaPessoa' @ordenar='ordenarPessoa' @alterar='alterarPessoa'></table-pessoas>

  </div>
</template>


<script>

import TablePessoas from './components/TablePessoas'
import FormPessoas from './components/FormPessoas'

export default {
  components: {
    TablePessoas,
    FormPessoas,
  },

  data() {
    return {
      pessoas: [],
      nomeSorteado: '',
      filtroPessoa: '',
      novaPessoa: {
        nome: '',
        email: '',
      },
      qtdePessoasNecessarias: 1,
    }
  },
  methods: {
    adicionarPessoa(pessoa) {
      const novaPessoa = {
        nome: pessoa.nome,
        email: pessoa.email,
      } 
      const jaExiste = this.pessoas.some(p => p.nome == novaPessoa.nome)
      if (jaExiste == true) {
        alert('Essa pessoa já foi adicionada.')
      } else {
        this.pessoas.push(novaPessoa)
      }
    },
    sortearPessoa() {
      this.nomeSorteado = this.pessoas[Math.round((Math.random() * this.qtdePessoasNecessarias))].nome;
    },
    deletaPessoa(index) {
      this.pessoas.splice(index, 1)
    },
    alterarPessoa(index) {
      let campo = prompt('Deseja alterar nome ou email?');

      if (campo.toLowerCase() == 'nome') {
          let nomeAntigo = this.pessoas[index].nome
          this.pessoas[index].nome = prompt('Digite o novo nome', nomeAntigo);
      } else {
          let emailAntigo = this.pessoas[index].email
          this.pessoas[index].email = prompt('Digite o novo email', emailAntigo);
      }
    },
    ordenarPessoa(ordem) {
      let teste = []
      if (ordem == 'asc') {
        teste = this.pessoas.sort(function(a, b) {
          if(a.nome < b.nome) return -1;
          if(a.nome > b.nome) return 1;
          return 0;
        });
      }
      
      if (ordem == 'desc') {
        teste = this.pessoas.sort(function(a, b) {  
          if(a.nome > b.nome) return -1;
          if(a.nome < b.nome) return 1;
          return 0;   
        });
      }
      
      console.log(teste)
    },

  },
  computed: {
    filtrarPessoa() {
      console.log(this.filtroPessoa)
      return this.pessoas.filter(p => {
        return p.nome.toUpperCase().startsWith(this.filtroPessoa.toUpperCase()) 
      })
    },
  },
  


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;

}

input[type="text"], [type="email"], label {
  padding: 0.3em;
}

.qtdePessoas {
  padding: 30px;
  border: 2px solid black;
  width: 20%;
  margin-left: 37%;
  margin-bottom: 5%;
  background: cadetblue;
}

.qtdePessoas input {
  border: 1px solid black; 
  text-align: center;
  width: 20%;
  padding: 10px;
  font-size: 15px;
}

h1 {
  color: blueviolet;
  font-style: italic;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.button {
  margin-top: 1%;
  vertical-align: middle;
  padding: 5px 15px;
  text-align: center;
  background-color: cadetblue;
}

.button:hover {
  background-color: darkseagreen;
}

</style>
