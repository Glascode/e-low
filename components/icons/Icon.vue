<template>
    <svg xmlns="http://www.w3.org/2000/svg"
    class="icon"
    :width="width" 
    :height="height" 
    viewBox="0 0 22 22"
    :stroke="stroke"
    :fill="fill">
    <slot />
</svg>

</template>

<script>
export default {
    props: {
        width: {
            type: [Number, String],
            default: 20
        }, 
        height: {
            type: [Number, String],
            default: 20
        },
        fill: {
            type: String,
            default: 'currentColor'
        },
        stroke: {
            type: String, 
            default: 'none'
        }

        }
}
</script>