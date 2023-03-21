<template>
  <div>
    <nav class="nav p-4 justify-content-between" v-if="isLoggedIn">
      <div class="d-flex align-items-center">
        <img :src="loggedUser.avatar" alt="avatar" width="30" class="me-2">
        <span> {{ loggedUser.name }} </span>
      </div>
      <button @click="authInstance.logout" class="btn btn-danger"> Logout </button>
    </nav>
    <router-view v-if="loaded" />
  </div>
</template>

<script>
import Auth from "@/classes/Auth";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      loaded: false,
      authInstance: new Auth(),
    };
  },
  computed:{
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      loggedUser: 'auth/loggedUser',
    })
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsersList",
      setUserLogged: "auth/setUserLogged",
      setUserObject: "auth/setUserObject",
    }),
  },
  async mounted() {
    if (this.authInstance.getUserLocal()) {
      this.setUserLogged();
      this.setUserObject(this.authInstance.getUserLocal());
    }
    await this.getUsers();
    this.loaded = true;
  },
};
</script>
