<template>
    <div data-app>
        <v-row justify="center">
            <v-dialog v-if="true" v-model="dialog" persistent max-width="400px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Add Product</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Add New Product</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field placeholder="Product name*" required v-model="product.name"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field placeholder="Amount*" required v-model="product.amount"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field placeholder="Unit cost*" required v-model="product.unit_cost"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field placeholder="Discount*" required v-model="product.discount"></v-text-field>
                                </v-col>
                            </v-row>
                            <small>*indicates required field</small>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="dialogBTN" color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn class="dialogBTN" color="blue darken-1" text @click="addProduct">Add</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>



<script>
  export default {
    props: {
        products: Array,
    },

    data() {
        return {
            dialog: false,
            product: {
                name: '',
                amount: 1,
                unit_cost: '',
                discount: '',
                total: '',
            }
        }
    },
    methods: {
        addProduct() {
            const alreadyExist = this.products.some(p => p.name == this.product.name)
            if (alreadyExist == true) {
                alert('Essa pessoa já foi adicionada.')
            } else if (this.product.name != '' && this.product.amount != '' && this.product.unit_cost != '' && this.product.discount != '') {
                this.product.total = (this.product.amount * this.product.unit_cost) - this.product.discount
                this.$emit('addProduct', this.product)
            } else {
                alert('Todos os campos são obrigatórios')
            }
        },
    }
  }
</script>



<style>
.v-btn {
  display:inline;
  text-align: center;
}

element.style {
    transform-origin: center center;
    max-width: 600px;
}

.template {
    padding: 2em;
}

.v-col {
    width: 100%;
}

.v-dialog {
    border-radius: 4px;
    margin: 24px;
    pointer-events: auto;
    transition: .3s cubic-bezier(.25,.8,.25,1);
    width: 100%;
    height: 19em;
    z-index: inherit;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
}

.v-dialog__content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transition: .2s cubic-bezier(.25,.8,.25,1),z-index 1ms;
    width: 100%;
    z-index: 6;
    outline: none;
}

.theme--light.v-card {
    background-color: rgb(231, 228, 228);
    color: rgba(0,0,0,.87);
}

.v-btn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    margin: 0 auto;
}

.v-dialog>.v-card>.v-card__title {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: .0125em;
    padding: 16px 24px 10px;
}

.v-dialog>.v-card>.v-card__subtitle, .v-dialog>.v-card>.v-card__text {
    padding: 20px;
}

.theme--light.v-card .v-card__subtitle, .theme--light.v-card>.v-card__text {
    color: rgba(0,0,0,.6);
}

.v-card__subtitle, .v-card__text {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071428571em;
}

.v-card__text {
    height: 190px;
}

.container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
    height: 17em;
}

.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-right: -19px;
    margin-left: -12px;
}

.col{
    padding: 4px;
}

.v-text-field {
    padding-top: 2px;
    margin-top: 8px;
}

.dialogBTN {
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: 0.0892857em;
    justify-content: center;
    outline: 0px;
    position: relative;
    text-decoration: none;
    text-indent: 0.0892857em;
    text-transform: uppercase;
    transition-duration: 0.28s;
    transition-property: box-shadow, transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    background-color: rgb(30, 136, 229);
    padding: 5px;
}

.v-input__slot {
    align-items: center;
    color: inherit;
    display: flex;
    margin-bottom: 5px;
    min-height: inherit;
    position: relative;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    width: 100%;
    padding: 0.1em;
}

.v-text-field input {
    flex: 1 1 auto;
    line-height: 20px;
    padding: 8px 0px;
    max-width: 100%;
    min-width: 0px;
    width: 100%;
}

</style>