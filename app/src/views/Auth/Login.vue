<template>
  <div
    class="login-page vh-100 w-100 d-flex justify-content-center align-items-center"
  >
    <div class="col-md-6">
      <div class="text-bg-warning p-4">
        <h6 class="h1 text-center mb-4"> Login </h6>
        <h6 class="h6"> Please Select Your Account </h6>
        <ul class="list-group mb-4">
            <li class="list-group-item" v-for="(user, index) in users" :key="user.id">
                <input v-model="form.user" :value="user" class="form-check-input me-1" type="radio" name="listGroupRadio" :id="`radio${index}`">
                <label class="form-check-label" :for="`radio${index}`">
                <div class="d-flex align-items-center">
                    <img width="30" :src="user.avatar" alt="user avatar"/>
                    <span> {{ user.name }} </span>
                </div>
            </label>
            </li>
        </ul>
        <template v-if="form.user">
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label h6"
                    >Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Please enter your password"
                    v-model="form.password"
                />
                <small class="text-danger" v-show="invalidPassword"> Password is incorrect </small>
            </div>
            <button @click="submit()" class="btn btn-secondary"> Login </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Login",
  data(){
    return{
        form:{
            user: null,
            password: null
        },
        invalidPassword: false,
        mappedUsersPasswords:[
            {
                username: 'zucker',
                password: '123456',
            },
            {
                username: 'felon',
                password: '123123',
            },
            {
                username: 'robon',
                password: 'secret',
            },
        ]
    }
  },
  computed:{
    ...mapGetters({
        users: "users/users"
    })
  },
  methods:{
    ...mapActions({
        login: "auth/login"
    }),
    submit(){
        if(this.form.user && this.form.password){
            const checkUserPreviliges = this.mappedUsersPasswords.some(item=> item.username === this.form.user.username && item.password === this.form.password);
            if(!checkUserPreviliges ){
                this.invalidPassword = true;
                return
            }
            this.login({...this.form.user, password: this.form.password});
        }
    }
  },
};
</script>
