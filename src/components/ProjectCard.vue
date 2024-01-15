<script>

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
    
</script>

<template>
    <div class="card card-project">
        Titolo progetto: <h3> {{ project.title }}</h3>
        <p v-if="project.type">Classe: {{ project.type.name }}</p>
    </div>
</template>

<style lang="scss" scoped>


.card.card-project {
    padding: 25px;
    border-radius: 10px;
    background-color: lightseagreen;
    border: 2px solid blue;
}
</style>