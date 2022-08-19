<template>
    <div>
        <input type="number" v-model.number="numberModel" />
    </div>
</template>

<script>
export default {
    name:'DataBindingInputNumber',
    components:{},
    data() {
        return {
            numberModel: 3
        };
    }, 
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {}, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnmount() {}, 
    unmounted() {}, 
    methods: {}
}
</script>