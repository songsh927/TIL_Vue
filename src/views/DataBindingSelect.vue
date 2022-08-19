<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="064">제주</option>
            <option value="21">부산</option>
        </select>
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            city: "064"
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