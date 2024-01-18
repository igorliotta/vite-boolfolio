<script>

import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

// Comment just for commit

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            // nextUrl: null,
            // prevUrl: null,
            lastPage: 0,
            currentPage: 1,
            projects: [],
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.BASE_URL}/projects`, { 
            params: {
                page: this.page
                }
            })
            .then((res) => {
                // console.log(res)
                this.projects = res.data.results.data
                // this.nextUrl = res.data.results.next_page_url
                // this.prevUrl = res.data.results.prev_page_url
                this.lastPage = res.data.results.current_page
                this.lastPage = res.data.results.last_page
            })
        },
        setPage(n) {
            this.page = n

            this.fetchProjects()
        }
    },
    created() {
            this.fetchProjects(`${this.BASE_URL}/projects`)
        },
    mounted() {
        console.log('projects.index montato')
    },
    unmounted() {
        console.log('unmounted projects.index')
    }
}
</script>

<template>
    <div class="container">
        <h1>I miei progetti</h1>
    </div>
    <section>
        <div class="container">
            <div class="row">
                <!-- <div class="col" v-show="prevUrl" @click="fetchProjects(prevUrl)">Prev</div> -->
                <div>
                    <ul class="paginate">
                        <li class="item" v-for="n in lastPage" :class="{ 'active' : n === page }" @click="setPage(n)">
                            <span>{{ n }}</span>
                        </li>
                    </ul>
                </div>
                <!-- <div class="col" v-show="nextUrl" @click="fetchProjects(nextUrl)">Next</div> -->
            </div>
        </div>
    </section>
    <div class="container">
        <div class="grid">
            <ProjectCard class="card card-project" v-for="project in projects" :project="project" :key="project.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid {
    margin-top: 30px;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4,1fr);
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.col {
    width: 50px;
    aspect-ratio: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border: 2px solid lightseagreen;
}

.paginate {
    list-style: none;
    display: flex;
    gap: 22px;
}

.item {
    width: 50px;
    aspect-ratio: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border: 2px solid lightseagreen;
}

.active {
    background-color: yellow;
}

</style>