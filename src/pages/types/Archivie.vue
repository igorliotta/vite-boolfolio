<script>
import axios from 'axios';

export default {
    props: {
        slug: String
    },
    data() {
        return {
            type: null,
            projects: [],
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
       fetchTypezedProjects() {
        axios.get(`${ this.BASE_URL }/types/${ this.slug }`)
        .then(res => {
            console.log(res.data)
            this.type = res.data.type
            this.projects = res.data.projects.data
        })
       }
    },
    created() {
        this.fetchTypezedProjects()
    }
}
</script>

<template>
    <div v-if="type">
        <div class="container">
            <h1>{{ type.name }}</h1>
        </div>

        <div class="container">
            <h3>Titoli progetti correlati alla classe e alle tecnologie:</h3>
            <ul>
                <li v-for="project in projects" :key="project.id" class="project-item">
                   <h3>Titolo progetto: {{ project.title }}</h3>
                   <p>Tecnologie correlate: {{ project.technologies.map((technology) => technology.name).join(', ') }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

h3{
   margin-bottom: 30px;
}
.project-item {
    list-style: none;
    margin-bottom: 40px;
}
</style>