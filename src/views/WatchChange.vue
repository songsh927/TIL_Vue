<template>
    <h1>Full Name : {{fullName}}</h1>
    <button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            firstName : 'Seungwon',
            lastName : 'Go',
            fullName : ''
        };
    }, 
    watch:{
        firstName(){
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        lastName(){
            this.fullName = this.firstName + ' ' + this.lastName;
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
    methods: {
        changeName(){
            this.firstName = 'Eunsol';
        }
    }
}
</script>