<template>
<div></div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            msg: '자식 컴포넌트로부터 보내는 메세지'
        };
    }, 
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {
        this.$emit('send-message', this.msg)
    }, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnmount() {}, 
    unmounted() {}, 
    methods: {}
}
</script>