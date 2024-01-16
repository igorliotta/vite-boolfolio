<script>

// import ProjectIndex from './pages/projects/index.vue';

export default {
  // components: {
  //   ProjectIndex
  // }
}
</script>

<template>
 <div>
  <!-- <ProjectIndex /> -->
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
