<template>
    <child-component @send-message="sendMessage"/>
</template>

<script>
import ChildComponent from './ChildComponent4.vue';
export default {
    components:{ChildComponent},
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
        sendMessage(data){
            console.log(data);
        }
    }
}
</script>