<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{i+1}}</td>
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>            
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            productList:[]
        };
    }, 
    beforeCreate() {}, 
    created() {
        this.getList();
    }, 
    beforeMount() {}, 
    mounted() {}, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnmount() {}, 
    unmounted() {}, 
    methods: {
        async getList(){
            this.productList = await this.$api("https://6bcc1019-0f2e-4c35-8802-bbe2bd933353.mock.pstmn.io/list","get");
        }
    }
}
</script>

<style scoped>
    table{
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>