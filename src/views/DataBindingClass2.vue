<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">
        Class Binding
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-red'
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
<style scoped>
container {
    width: 100%;
    height: 200px;
}

.active {
    background-color: yellow;
    font-weight: bold;
}

.text-red{
    color: red;
}
</style>