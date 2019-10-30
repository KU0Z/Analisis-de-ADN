<template>
  <v-layout row class="justify-center" style="background-image: linear-gradient(to right, #6200ea, #e94057, #8a2387)">
      <v-flex xs4 >
        <v-container style="position: relative;" class="text-xs-center">
          <v-card flat>
          <a @click="gologin()" target="_blank">Volver</a>
          <v-img
            src="https://media1.giphy.com/media/YlmI36YAWe7KScC7hK/giphy.gif"
            class="my-3"
            contain
            height="200"
          ></v-img>
            <v-card-title class="justify-center" primary-title >
              <h4>¿Sómos familia? - Análisis de ADN</h4>
              <h4>Registro</h4>
            </v-card-title>
            <v-form>
            <v-text-field v-model="name" name="Name" label="Nombre Completo"></v-text-field>
            <v-text-field v-model="email" name="Mail" label="Correo electrónico" :rules="[rules.required, rules.email]"></v-text-field>
            <v-text-field  v-model="password" name="Password" label="Contraseña" type="password"></v-text-field>
            <!--Boton inicio-->
            <v-card-actions>
              <v-btn primary large block color="#c2a0f2" @click="submit()" >Registrate</v-btn>
            </v-card-actions>
            <h1>'</h1>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        name: '',
        password: '',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
    methods: {
      gologin(){
        this.$router.push({
          path: '/'
        })
      },
      submit(){
        self = this 
        this.$http.post('/signUp',{
          'name': this.name,
          'email': this.email,
          'password': this.password
        })
        .then(function(r){
          self.$router.push({path: '/'});
        })
        .catch(function(e){
          console.log(e)
          self.validForm = false
        })
      }
    }
  }
  </script>