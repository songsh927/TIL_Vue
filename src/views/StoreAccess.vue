<template>
    <p>Count : {{count}}</p>
    <button type="button" @click="increment"> Increment </button>
</template>

<script>
export default {
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    components:{},
    data() {
        return {
            sampleData: ''
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
        increment(){
            this.$store.commit('increment')
        }
    }
}
</script>