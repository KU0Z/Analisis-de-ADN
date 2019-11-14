<template>
    <v-container fluid>
        <v-data-iterator hide-default-footer no-data-text="">
            <template v-slot:header>
                <v-toolbar class="mb-2" color="#20004d" dark flat>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>Resultados</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </template>
        </v-data-iterator>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Parentesco</th>
                            <th class="text-left">Porcentaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="Resultado">
                            <td>Hermanos</td>
                            <td>65.48%</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        <v-data-iterator hide-default-footer no-data-text="">
            <template  v-slot:header>
                <v-toolbar class="mt-2" color="#20004d" dark flat>
                    
                    <social-sharing url="https://media1.giphy.com/media/YlmI36YAWe7KScC7hK/giphy.gif"
                    description="Análisis de ADN - ¿Somos familia?"
                    quote="Su porcentaje de parentesco es "
                    inline-template>
                    
                    <div>
                        <network network="facebook">
                            <v-btn color = "#3b1070" style='box-shadow: 5px 3px #20004d'>Compartir en Facebook</v-btn>
                        </network>
                    </div>
                    </social-sharing>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>Análisis de ADN - ¿Somos familia?</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color = "#3b1070" style='box-shadow: 5px 3px #20004d'>Enviar a mi correo</v-btn>
                </v-toolbar>
            </template>
        </v-data-iterator>
  </v-container>
</template>

<script>
  import SocialSharing from 'vue-social-sharing';
  export default {
    components: {
      SocialSharing
    },
    data () {
      return {
      }
    },
  }
</script>
