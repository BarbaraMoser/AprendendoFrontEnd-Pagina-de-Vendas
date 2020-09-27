<template>
  <div>
    <form v-if="pessoas.length != qtdePessoas" v-on:submit.prevent = "adicionarPessoa()">
      <label>Nome</label>
      <input type="text" placeholder="Informe seu nome" required v-model="novaPessoa.nome"/>
      <label>Email</label>
      <input type="email" placeholder="Informe seu email" required v-model="novaPessoa.email"/>   
      <br>
      <button class="button" type="submit">Adicionar</button>  
    </form>
    <p v-else>A quantidade de pessoas foi atingida!</p>
  </div>
</template>

<script>
export default {
  props: {
    pessoas: Array,
    qtdePessoas: Number,
  },
  data() {
    return {
      novaPessoa: {
        nome: '',
        email: '',
      }
    }
  },
  methods: {
    adicionarPessoa() {
      this.$emit('adicionar', this.novaPessoa)
    }
  }
}
</script>

<style>
p {
  color: orangered;
  font-size: 20px;
  font: bolder;
}

</style>
