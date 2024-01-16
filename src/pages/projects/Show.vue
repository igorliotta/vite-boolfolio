<script>
import axios from 'axios';

export default {
    // Modo per recuperare il progetto passando come props al componente la proprietà slug
    props: {
        slug: String
    },
    data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        fetchProject() {
            // axios.get(`${this.BASE_URL}/projects/${this.$route.params.slug}`)
            axios.get(`${this.BASE_URL}/projects/${this.slug}`)
            .then(res => {
                // console.log(res)
                this.project = res.data.project;
            }).catch((error) => {
                console.log('project non found', error.response)

                if (error.response.status === 404) {
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    // Modo per recuperare il progetto tramite rotta parametrica
    created() {
        // const slug = this.$route.params.slug;
        // console.log('rotta:', this.$route)
        // console.log(slug);

        this.fetchProject()
    }
}
</script>

<template>
    <div v-if="project">
        <div class="container">
            <h1>Titolo progetto: {{ project.title }}</h1>
            <p>Slug: {{ project.slug }}</p>
            <p>Prop slug: {{ slug }}</p>
            <p>Type: {{ project.type?.name }}</p>
            <ul>Technologies:
                <li v-for="technology in project.technologies" :key="technology.id">
                    {{ technology.name }}
                </li>
            </ul>
        </div>

        <div class="container" v-html="project.content">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
li {
    text-align: center;
    list-style: none;
}

ul {
    margin-top: 20px;
}

p {
    margin-top: 20px;
}
</style>