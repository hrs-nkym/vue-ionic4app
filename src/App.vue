<template>
  <div id="app">
    <ion-app>
      <ion-page class="show-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Ionic Vue!</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item v-for="user of users" v-bind:key="user.id">
              <ion-label full>
                {{user.name}}
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-page>
    </ion-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js Ionic App.'
      users : []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.users = response.data)
  }
}
</script>

<style>
</style>
