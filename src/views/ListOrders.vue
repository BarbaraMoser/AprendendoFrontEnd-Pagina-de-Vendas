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
          </tr>          
      </table>
  </div>
</template>

<script>


export default {
    data() {
        return {
            marcas: [],
        }
    },
}
</script>

<style>

</style>