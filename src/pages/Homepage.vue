<script>
export default {
    data() {
        return {
            title: 'Igor Liotta',
            jobTitle: 'Amatorial Developer'
        }
    },
    mounted() {
        console.log('homepage montata')
    },
    unmounted() {
        console.log('unmounted hompage')
    }
}
</script>

<template>
   <div>
    <div class="container">
        <h1>{{ title }}</h1>
        <h2>{{ jobTitle }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus ratione qui pariatur ipsam commodi explicabo eaque quo aperiam labore.</p>
    </div>
   </div>
</template>

<style lang="scss" scoped></style>