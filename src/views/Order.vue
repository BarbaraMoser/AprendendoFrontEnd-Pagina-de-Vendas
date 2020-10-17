<template>
  <div id="order">
    <h1>Please, make your purchase order!!</h1>
    <form-order :clients='clients'></form-order>
    <!-- <div v-if="add">
      <v-dialog v-model="dialog" width="100%">
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
      <iframe style="width:100%" src="https://vuetifyjs.com"></iframe>
      </v-card>
      </v-dialog>
    </div> -->
    <new-product @addProduct='addProductToOrder'/>
    <table-products :products='orderProducts' @delete='delProduct' @alter='alterProduct'/>
  </div>
</template>


<script>

import FormOrder from '../components/FormOrder'
import TableProducts from '../components/TableProducts'
import NewProduct from '../components/NewProduct'

export default {
  components: {
    FormOrder,
    TableProducts,
    NewProduct,
  },

  data() {
    return {
      orderProducts: [],
      clients: [
        {name: 'José Silva'},
        {name: 'Maria Souza'},
        {name: 'João Antunes'},
      ],
      newOrder: {
        number: '',
        dateIssue: '',
        clientName: '',
      },
    }
  },
  methods: {
    addProductToOrder(product) {
      const newProduct = {
        name: product.name,
        amount: product.amount,
        unit_cost: product.unit_cost,
        discount: product.discount,
      } 
      this.orderProducts.push(newProduct)
    },
    delProduct(index) {
      this.orderProducts.splice(index, 1)
    },
    // alterProduct(index) {
    //   let campo = prompt('Deseja alterar nome ou email?');

    //   if (campo.toLowerCase() == 'nome') {
    //       let nomeAntigo = this.pessoas[index].nome
    //       this.pessoas[index].nome = prompt('Digite o novo nome', nomeAntigo);
    //   } else {
    //       let emailAntigo = this.pessoas[index].email
    //       this.pessoas[index].email = prompt('Digite o novo email', emailAntigo);
    //   }
    // }
  }
}
</script>

<style>


</style>
