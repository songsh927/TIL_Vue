<template>
    <h2>{{title}}</h2>
</template>

<script>
export default {

    props: {
        title:{
            type: String,
            default: "페이지 제목입니다."
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
    methods: {}
}
</script>