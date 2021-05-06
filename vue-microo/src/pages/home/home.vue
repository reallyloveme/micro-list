<template>
    <div>
        子应用主页
        <Button />
    </div>
</template>

<script>
export default {
    components: {
        Button: window.__POWERED_BY_QIANKUN__ ? window.commonComponent.Button : ''
    }
}
</script>