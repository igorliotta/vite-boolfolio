<script>
export default {
    // Modo per recuperare il progetto passando come props al componente la proprietà slug
    props: {
        slug: String
    },
    // Modo per recuperare il progetto tramite rotta parametrica
    created() {
        const slug = this.$route.params.slug;
        console.log('rotta:', this.$route)
        console.log(slug);
    }
}
</script>

<template>
    <div>
        <div class="container">
            <h1>Titolo del progetto</h1>
            <p>Slug: {{ $route.params.slug }}</p>
            <p>Prop slug: {{ slug }}</p>
            <p>Type del progetto</p>
        </div>

        <div class="container">
            Contenuto del progetto
        </div>
    </div>
</template>

<style lang="scss" scoped></style>