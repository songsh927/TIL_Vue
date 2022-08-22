<template>
<div></div>
</template>

<script>
export default {
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
        callFromParent(){
            console.log('부모 컴포넌트에서 직접 호출한 함수');
        }
    }
}
</script>