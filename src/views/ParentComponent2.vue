<template>
    <child-component @send-message="sendMessage" ref="child_component"/>
</template>

<script>
import ChildComponent from './ChildComponent2.vue';
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
    mounted() {
        this.$refs.child_component.callFromParent();
    }, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnmount() {}, 
    unmounted() {}, 
    methods: {}
}
</script>