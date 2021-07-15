<template>
    <span class="loading-anim"></span>
</template>

<script>
    export default{
        name:"LoadingIcon"
    }
</script>


<style scoped>
   .loading-anim {
    width: 35px;
    height: 35px;
    display: inline-block;
    border: 5px solid rgba(189, 189, 189, 0.25);
    border-left-color: rgba(3, 155, 229, 1);
    border-top-color: rgba(3, 155, 229, 1);
    border-radius: 50%;
    animation: rotate 600ms infinite linear;
}

@keyframes rotate {
    to {
        transform: rotate(1turn)
    }
}
</style>
