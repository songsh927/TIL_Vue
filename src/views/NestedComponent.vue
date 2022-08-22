<template>
    <div>
        <PageTitle title="Page Title"/>
    </div>
    <h4>Nested Page</h4>
</template>

<script>

import PageTitle from '../components/PageTitle.vue';

export default {
    components:{PageTitle},
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