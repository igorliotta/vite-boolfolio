<script>

// import ProjectIndex from './pages/projects/index.vue';
import AppHeader from './components/AppHeader.vue'
export default {
  // components: {
  //   ProjectIndex
  // }
  components: {
    AppHeader
  }
}
</script>

<template>
 <div>
  <!-- <ProjectIndex /> -->
  <AppHeader />
  <router-view></router-view>
 </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.container {
  width: 1200px;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
  background-color: lightblue
}
</style>
