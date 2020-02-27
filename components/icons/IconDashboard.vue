<template>
    <Icon stroke="currentColor" fill="none">
        <rect x="0.65" y="0.65" width="19.1" height="16.7" rx="3.35" stroke-width="1.3" stroke-linecap="square"/>
        <line y1="5.35" x2="20.4" y2="5.35" stroke-width="1.3"/>
        <line x1="5.44978" y1="5.99409" x2="5.55884" y2="17.9941" stroke-width="1.3"/>
    </Icon>
</template>

<script>
import Icon from './Icon'

export default {
    components: {
        Icon
    },
    props: {
        width: {
            type: [Number, String],
            default: 20
        }, 
        height: {
            type: [Number, String],
            default: 20
        }
        }
}
</script>