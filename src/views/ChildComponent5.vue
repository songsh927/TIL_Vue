<template>
    <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            msg : 'message'
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
        childFunc(){
            this.msg = 'changed message';
        }
    }
}
</script>