<template>
  <v-layout row>
      <v-img
          :src="require('../assets/Momo.jpg')"
          class="my-3"
        ></v-img>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;" class="text-xs-center">
          <v-card flat>
          <v-img
            :src="require('../assets/Mr_adn.png')"
            class="my-3"
            contain
            height="200"
          ></v-img>
            <v-card-title class="justify-center" primary-title >
              <h4>¿Sómos familia? - Análisis de ADN</h4>
              <h4>Iniciar Sesión</h4>
            </v-card-title>
            <v-form>
            <v-text-field name="Mail" label="Correo electrónico" :rules="[rules.required, rules.email]"></v-text-field>
            <v-text-field  name="Password" label="Contraseña" type="password"></v-text-field>
            <!--Boton inicio-->
            <v-card-actions>
              <v-btn primary large block>Iniciar sesión</v-btn>
            </v-card-actions>
            <h4>También puedes iniciar sesión con: </h4>
            <v-card-actions>
              <v-btn primary large block color="info">Facebook</v-btn>
            </v-card-actions>
            <h4>¿No tienes una cuenta aún? </h4>
            <a @click="goregistro()" target="_blank">¡Registrate!</a>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
</template>
<script>
  export default{
    data () {
      return {
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
    computed: {},
    methods: {
      goregistro(){
        this.$router.push({
          path: '/register'
        })
      }
    }
  }
</script>