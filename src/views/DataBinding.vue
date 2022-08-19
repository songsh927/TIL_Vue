<template>
    <div>{{htmlstring}}</div>
    <div v-html="htmlstring"></div>
</template>

<script>
export default {
    name:'DataBinding',
    components:{},
    data() {
        return {
            htmlstring:'<p style="color:red;"> This is red string </p>'
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