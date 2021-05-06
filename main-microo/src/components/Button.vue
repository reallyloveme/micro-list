<template>
    <el-button @click="homeB">主应用按钮</el-button>
</template>

<script>
export default {
    name: 'button',
    methods: {
        homeB() {
            console.log('主应用打印', 1213)
        }
    }
}
</script>
