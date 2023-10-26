<template>
    <TheHeader title="RememberMe"/>
    <!-- <StoredResources :resources="storedResources"/> -->
    <the-resources></the-resources>
</template>

<script>
// import LearningResource from './components/learning-resources/LearningResource.vue';
// import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  // data() {
  //   return {
  //     storedResources: [
  //       {
  //         id: 'official-guide',
  //         title: 'Official Guide',
  //         description: 'The official Vue.js documentation.',
  //         link: 'https://vuejs.org',
  //       },
  //       {
  //         id: 'google',
  //         title: 'Google',
  //         description: 'Learn to google...',
  //         link: 'https://google.com',
  //       },
  //     ],
  //   };
  // },
  components: {
    // StoredResources,
    TheHeader,
    TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>