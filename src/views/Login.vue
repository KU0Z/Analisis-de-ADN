<template>
  <v-layout row class="justify-center" style="background-image: linear-gradient(to right, #6200ea, #e94057, #8a2387)">
      <v-flex xs4 >
        <v-container style="position: relative;" class="text-xs-center">
          <v-card flat>
          <v-img
            src= "https://media1.giphy.com/media/YlmI36YAWe7KScC7hK/giphy.gif"
            class="my-3"
            contain
            height="200"
          ></v-img>
            <v-card-title class="justify-center" primary-title >
              <h4>¿Sómos familia? - Análisis de ADN</h4>
              <h4>Iniciar Sesión</h4>
            </v-card-title>
            <v-form>
            <v-text-field v-model="email" name="Mail" label="Correo electrónico" :rules="[rules.required, rules.email]"></v-text-field>
            <v-text-field v-model="password" name="Password" label="Contraseña" type="password"></v-text-field>
            <!--Boton inicio-->
            <v-card-actions>
              <v-btn primary @click="login()" large block color="#c2a0f2">Iniciar sesión</v-btn>
            </v-card-actions>
            <h4>También puedes iniciar sesión con: </h4>
            <v-card-actions>
              <v-btn primary large block color="#c2a0f2" @click="loginFacebook()">Facebook</v-btn>
            </v-card-actions>
                <facebook-login class="button"
                  appId="536085350536644"
                  @login="onLogin"
                  @logout="onLogout"
                  @sdk-loaded="sdkLoaded">
                </facebook-login>
            <h4>¿No tienes una cuenta aún? </h4>
            <a @click="goregistro()" target="_blank">¡Registrate!</a>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
</template>
<script>
import Vue from 'vue';
import facebookLogin from 'facebook-login-vuejs';
  export default{
    
    data () {
      return {
        email: '',
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
     created() {
    },
    components: { facebookLogin},
    computed: {},
    methods: {
      goregistro(){
        this.$router.push({
          path: '/register'
        })
      },
      loginFacebook(){
        this.FB.login(function(response) {
        if (response.authResponse) {
        console.log(result.authResponse.accessToken);
        this.FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
        } else {
        console.log('User cancelled login or did not fully authorize.');
        }
    });

      },
      login(){
        self = this 
        console.log(this)
        console.log(this.axios)
        this.$http.post('/logIn',{
          'email': this.email,
          'password': this.password
        })
        .then(function(r){
          self.$router.push({path: '/home'});
        })
        .catch(function(e){
          console.log(e)
          self.validForm = false
        })
      },
      getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          console.warn("data api",userInformation)
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    }
      
    }
  }
</script>