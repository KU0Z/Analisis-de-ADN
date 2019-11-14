<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Análisis de ADN - ¿Somos familia? {{user.name}}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn color = "#3b1070" @click="onLogout()" style='box-shadow: 5px 3px #20004d'>Cerrar sesión</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Vue from 'vue';
  export default{
    
    data () {
      return {
        isConnected: false,
        email: this.$store.state.email,
        password: '',
        user: this.$store.state.user,
      }
    },
     created() {
       console.log('/')
        console.log(this.$store.state.user.name)
    },
    components: {},
    computed: {},
    methods: {
    onLogout() {
      
      self=this
      
      FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            FB.logout(function(response) {
                self.$router.push({
                  path: '/'
                })
            });
        }
      });
      
    }
      
    }
  }
</script>
