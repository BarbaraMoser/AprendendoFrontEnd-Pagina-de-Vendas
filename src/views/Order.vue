<template>
  <div id="order">
    <h1>Please, make your purchase order!!</h1>
    <form v-on:submit.prevent = "save()">
      <input type="text" placeholder="Order number" required v-model="newOrder.number"/>
      <div class="items">
          <label for="date">Issuance date</label>
          <input type="date" id="date" required v-model="newOrder.dateIssue"/>
          <label for="date">Choose a client</label>
          <select required v-model="newOrder.clientName">
              <option v-for="(c, idx) in clients" :key="idx">{{c.name}}</option>
          </select>
      </div>
      <new-product :products='orderProducts' @addProduct='addProductToOrder'/>
      <table-products :products='orderProducts' @delete='delProduct' @alter='alterProduct'/>
      <div class="totals">
        <p> Total Pedido: R$ {{total}} </p>
        <p> Quantidade Itens: {{itens}} </p>
      </div>  
      <div>
        <v-btn type="submit"  class='orderButtons' color="primary" dark>Save</v-btn>
        <v-btn class='orderButtons' color="primary" dark @click="addCompleteOrder">Save/New</v-btn>
      </div>     
    </form>
    <!-- <form-order :clients='clients' @newOrder='addNewOrder'></form-order> -->
  </div>
</template>


<script>

// import FormOrder from '../components/FormOrder'
import TableProducts from '../components/TableProducts'
import NewProduct from '../components/NewProduct'

export default {
  components: {
    // FormOrder,
    TableProducts,
    NewProduct,
  },

  data() {
    return {
      orderProducts: [],
      orders: [],
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
        total: product.total,
      } 
      this.orderProducts.push(newProduct)
    },
    delProduct(index) {
      let productName = this.orderProducts[index].name
      let deleteConfirm = confirm('Você realmente quer apagar o produto: ' + productName);

      if (deleteConfirm == true) {
        this.orderProducts.splice(index, 1)
      }
    },
    alterProduct(index) {
      let campo = prompt('Deseja alterar nome ou email?');

      if (campo.toLowerCase() == 'nome') {
          let nomeAntigo = this.pessoas[index].nome
          this.pessoas[index].nome = prompt('Digite o novo nome', nomeAntigo);
      } else {
          let emailAntigo = this.pessoas[index].email
          this.pessoas[index].email = prompt('Digite o novo email', emailAntigo);
      }
    },
    save() {
      if (this.validateFields() == false) {
        alert('Todos os campos devem ser preenchidos e conter no mínimo 1 produto cadastrado')
      } else {
        alert('Validado com sucesso!')
      }
    },
    validateFields() {
      if (this.newOrder.number == '' || this.newOrder.dateIssue == '' || this.newOrder.clientName == '' || this.orderProducts.length == 0) {
        return false
      } else {
        return true
      }
    },
    addCompleteOrder() {
      if (this.validateFields() == false) {
        alert('Todos os campos devem ser preenchidos e conter no mínimo 1 produto cadastrado')
      } else {
        const newOrder = {
          order: this.newOrder,
          products: this.orderProducts,
        } 
        this.orders.push(newOrder)
        alert('Pedido salvo com sucesso!')
        this.$dispatch('orderProducts', this.orders);
      }
    },
  },
  events: {
    'orderProducts'(orders) {
        this.$broadcast('orderProducts', orders);
    },
  },
  computed: {
    total: function () { return this.orderProducts.length === 0 ? 0 : this.orderProducts.reduce((a, b) => ({ total: a.total + b.total })).total },
    itens: function () { return this.orderProducts.length}  
  }
}
</script>

<style scoped>

.orderButtons {
  display:inline;
  text-align: center;
  margin-top: 3%;
}

p {
  color: orangered;
  font-size: 20px;
  font: bolder;
}

.buttonType {
    padding: 2em;
}

button {
    margin: 0 6px;
}

label {
    padding: 4px;
    font-size: small;
}

div {
    padding: 10px;
    width: 100%;
}

.items {
    display: flexbox;
    flex-wrap: wrap;
    flex-basis: 100%;
}

</style>
