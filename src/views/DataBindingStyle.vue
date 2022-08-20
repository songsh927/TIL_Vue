<template>
    <div v-bind:style="styleObject"> 인라인 스타일 바인딩 </div>
    <div v-bind:style="[baseStyle, addStyle]"> 배열을 이용한 인라인 스타일 바인딩</div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            styleObject: {
                color:'red',
                fontSize: '13px'
            },
            baseStyle: 'background-color:yellow; width:100%: height:200px;',
            addStyle: 'color:red;font-weight:bold'
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