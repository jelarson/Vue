<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>  
  </li>
</template>
<script>
export default {
  data() {
    return {
      showDetails: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
      // this.friendIsFavorite = !this.friendIsFavorite;
    },
    deleteFriend() {
        this.$emit('delete', this.id);
    }
  },
  // props: [
  //     'name', 'phoneNumber', 'emailAddress', 'isFavorite'
  // ]
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function (value) {
        return value === "1" || value === "0";
      },
    },
  },
  emits: ['toggle-favorite', 'delete'],
//   emits: {
//     "toggle-favorite": function (id) {
//       if (id) {
//         return true;
//       } else {
//         console.warn("missing id");
//         return false;
//       }
//     },
//   },
};
</script>