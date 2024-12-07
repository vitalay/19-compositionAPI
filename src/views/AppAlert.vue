<template>
    
    <div class="alert" :class="type" @click="$emit('close')">
        <p class="alert-text">{{ text }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing. ipsum dolor sit amet, consectetur </p>
    </div>

</template>

<script>
export default {
    emits: ['close'],
    props: ['text', 'type']
}
</script>

<style scoped> 
</style>