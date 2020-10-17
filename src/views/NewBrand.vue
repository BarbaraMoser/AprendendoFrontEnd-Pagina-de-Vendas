<template>
    <div>
        <form v-on:submit.prevent = "AddBrand()">
            <input type="text" placeholder="Brand name" required autofocus v-model="newBrand.nome"/>
            <br>
            <button class="button" type="submit">Send</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            newBrand: {
                id: '',
                nome: '',
            }
        }
    },
    methods: {
        AddBrand() {
            axios.post('https://carros-app-example.herokuapp.com/marca', this.newBrand).then(response => {
                this.newBrand.id = response.data
                alert('New brand was created')
            }).catch(error => alert('Error:' + error))
        }
    }
}
</script>

<style>

</style>