<template>
    <div>
        <img v-bind:src="imgSrc">
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            imgSrc: "https://vuejs.org/images/logo.png"
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