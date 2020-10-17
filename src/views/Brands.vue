<template>
  <div>
      <table>
          <tr>
              <th>Id</th>
              <th>Nome</th>
          </tr>
          <tr v-for='m in marcas' :key="m.id">
              <td>{{m.id}}</td>
              <td>{{m.nome}}</td>
              <img src="../images/alterar.png" width="20px" height="20px" @click="alterBrands(m.id)">
          </tr>          
      </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            marcas: [],
        }
    },
    mounted() {
        axios.get('https://carros-app-example.herokuapp.com/marca').then(response => {
            this.marcas = response.data
        })
    },
    methods : {
        alterBrands(id) {
            this.$router.push({ path: '/brands/new', query: { id: id } }, )
        }
    }
}
</script>

<style>

</style>