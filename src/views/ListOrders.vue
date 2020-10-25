<template>
    <div>
        <table>
            <tr>
                <th>Number</th>
                <th>DateIssue</th>
                <th>ClientName</th>
            </tr>
            <tr v-for='o in orders' :key="o.name">
                <td>{{m.number}}</td>
                <td>{{m.dateIssue}}</td>
                <td>{{m.clientName}}</td>
            </tr>          
        </table>
    </div>
</template>

<script>


export default {
    data() {
        return {
            orders: [],
        }
    },
    events: {
        'orderProducts'(orders){
            this.orders = orders;
        },
    },
}
</script>

<style>

</style>