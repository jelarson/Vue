<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false,
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You have unsaved changes');
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>