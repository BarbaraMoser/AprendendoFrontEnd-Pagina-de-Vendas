<template>
    <div>
        <table class="tableSorteio">
            <tr>
                <th>
                    Product
                    <!-- <img src="../images/asc.png" width="20px" height="20px" @click="ordenarPessoa('asc')">
                    <img src="../images/desc.png" width="20px" height="20px" @click="ordenarPessoa('desc')"> -->
                </th>
                <th>Amount</th> 
                <th>Unit Cost</th> 
                <th>Discount</th> 
                <th>Total</th>  
                <th>Action</th>    
            </tr>
            <tr v-for="(p,index) in products" :key="index">
                <td id='name'>{{p.name}}</td>
                <td id='amount'>{{p.amount}}</td>
                <td id='unit_cost'>{{p.unit_cost}}</td>
                <td id='discount'>{{p.discount}}</td>
                <td id='total'>{{(p.amount * p.unit_cost)-p.discount}}</td>
                <td>
                    <img class="botaoImagem" src="../images/delete.png" width="20px" height="20px" @click="delProduct(index)">
                    <img class="botaoImagem" src="../images/alterar.png" width="20px" height="20px" @click="alterProduct(index)">
                </td>
            </tr>
        </table>
    </div>   
</template>

<script>
export default {
    props: {
        products: Array,
    },
    methods: {
        delProduct(index) {
            this.$emit('delete', index)
        },
        alterProduct(index) {
            this.$emit('alter', index)
        }
    },
}
</script>

<style>
table, th, td {
  border: 3px solid black;
  border-collapse: collapse;
  position: f;
}

td {
    margin-left: 1px;
}

table {
  width: 40%;
  margin-left: 30%;
  margin-top: 1%;
}
</style>