<script></script>

<template>
    <header>
        <div class="container">
            <nav>
                <ul>
                    <li>
                       <router-link :to="{ name: 'home' }">HOME</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects.index' }">PORTFOLIO</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }">CONTATTI</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
li {
    text-align: start;
    list-style: none;
}
</style>