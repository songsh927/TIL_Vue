<template>
    <input @keyup.enter="increaseCounter">
    <p>{{counter}}</p>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            counter:0
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
    methods: {
        increaseCounter(){
            this.counter = this.counter + 1;
        }
    }
}
</script>