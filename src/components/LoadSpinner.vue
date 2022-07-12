<template>
    <div style="margin-top: 15px;">
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            {{ msg }}
        </div>
    </div>
</template>

<script>

export default {
    name: "LoadSpinner",
    props: {
        msg: String
    }
}
</script>