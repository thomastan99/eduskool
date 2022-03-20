<template>
    <div id="main">
        <div v-on:click="isOpen = !isOpen" class="header">&#8226; {{ title }}</div>
        <div class="child" v-bind:style="[isOpen ? {'display': 'block'} : {'display': 'none'}]">
            <slot>&#8226; </slot>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isOpen: false
        }
    },
    props: {
        title: String,
    }
}
</script>

<style scoped>
#main {
    text-align: left;
    font-size: 24px;
    width: 400px;
    line-height: 1.5;
    font-weight: bold;
}

.header {
    cursor: pointer;
}

.child {
    padding-left: 100px;
}
</style>