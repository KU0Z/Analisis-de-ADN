<template>
  <v-row justify="center">
      <v-img :src="require('../assets/Add.png')" aspect-ratio="1" class="grey lighten-2"  @click="dialog = true">
	      <template v-slot:placeholder>
		      <v-row class="fill-height ma-0" align="center" justify="center">
			      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
		      </v-row>
	      </template>
      </v-img>  

    <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">¡Sube tu fotografía!</v-card-title>
            <v-card-actions>
                <v-btn class="white--text" color="#6200ea" >Cargar desde archivo</v-btn>
            </v-card-actions>
            <v-card-actions>
                <v-btn class="white--text" color="#6200ea">Tomar con dispositivo</v-btn>
            </v-card-actions>
            <v-card-actions>
                <v-btn color="#6200ea" text @click="dialog = false"> Cancelar </v-btn>
                <v-btn color="#6200ea" text @click="dialog = false"> Aceptar </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>