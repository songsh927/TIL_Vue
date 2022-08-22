<template>
    <div>
        <button type="button" @click="increaseCounter"> Add 1 </button>
        <button type="button" @click="resetCounter">Reset</button>
        <p>The counter is : {{counter}}</p>
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            counter : 0
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
        },
        resetCounter(){
            this.counter = 0;
        }
    }
}
</script>