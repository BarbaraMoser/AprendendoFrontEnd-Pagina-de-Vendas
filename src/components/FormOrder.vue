<template>
  <div>
    <form v-on:submit.prevent = "setOrder()">
        <input type="text" placeholder="Order number" required v-model="newOrder.number"/>
        <div class="items">
            <label for="date">Issuance date</label>
            <input type="date" id="date" required v-model="newOrder.issuanceDate"/>
            <label for="date">Choose a client</label>
            <select v-if="clientFilter == ''">
                <option v-for="(c, idx) in clients" :key="idx" value="c">{{c.name}}</option>
            </select>
        </div>
        <!-- <input type="text" required v-model= "clientFilter" placeholder="Set the cliente name"/> -->
        <!-- <div>
            <label for="date">Choose a client</label>
            <select v-if="clientFilter == ''">
                <option v-for="(c, idx) in clients" :key="idx" value="c">{{c.name}}</option>
            </select>
        </div> -->

        <!-- <select v-else>
            <option @change="clientFiltered">{{c.name}}</option>
        </select> -->

        <!-- <v-select v-model="teste" @change="clientFiltered" :items="clients"  label="Client" :clearable="true"></v-select> -->
    </form>
  </div>
</template>

<script>
export default {
    props: {
        clients: Array,
    },

    data() {
        return {
            clientFilter: '',
            teste:'',
            newOrder: {
                number: '',
                issuanceDate: '',
            },
        }
    },
    methods: {
        setOrder() {
            this.$emit('set', this.newOrder)
        },
        clientFiltered() {
            return this.clients.filter(c => {
                return c.nome.toUpperCase().startsWith(this.clientFilter.toUpperCase()) 
            })
            // return this.clients.filter((value) => value == this.clientFilter)
        }
    }
}
</script>

<style scoped>
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
