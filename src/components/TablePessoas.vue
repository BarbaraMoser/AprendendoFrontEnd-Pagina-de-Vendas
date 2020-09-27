<template>
    <div>
        <table class="tableSorteio">
            <tr>
                <th>
                    Nome
                    <img src="../images/asc.png" width="20px" height="20px" @click="ordenarPessoa('asc')">
                    <img src="../images/desc.png" width="20px" height="20px" @click="ordenarPessoa('desc')">
                </th>
                <th>Email</th> 
                <th>Ações</th>      
            </tr>
            <tr class='tabelaPessoa' v-for="(p,index) in pessoas" :key="index">
                <td id='nome' :class="{'destacar': pessoaSorteada(p.nome)}">{{p.nome}}</td>
                <td id='email' :class="{'destacar': pessoaSorteada(p.nome)}">{{p.email}}</td>
                <td>
                    <img class="botaoImagem" src="../images/delete.png" width="20px" height="20px" @click="delPessoa(index)">
                    <img class="botaoImagem" src="../images/alterar.png" width="20px" height="20px" @click="alterarPessoa(index)">
                </td>
            </tr>
        </table>
    </div>    
</template>

<script>
export default {
    props: {
        pessoas: Array,
        nomeSorteado: String,
    },
    methods: {
        pessoaSorteada(nome) {
            return this.nomeSorteado === nome
        },
        delPessoa(index) {
            console.log('Entrou no método deletaPessoa')
            this.$emit('deletar', index)
        },
        ordenarPessoa(ordem) {
            console.log('Entrou no método ordenarPessoa')
            this.$emit('ordenar', ordem)
        },
        alterarPessoa(index) {
            console.log('Entrou no método alterarPessoa')
            this.$emit('alterar', index)
        }
    },
}
</script>

<style scoped>

.destacar {
    background-color: lightblue;
}

.botaoImagem {
    padding: 5px;
}

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