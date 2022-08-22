<template>
    <h1>Full Name : {{fullName}}</h1>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            firstName : 'Seungwon',
            lastName : 'Go'
        };
    },
    computed:{
        fullName(){
            return this.firstName + ' ' + this.lastName;
        }
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