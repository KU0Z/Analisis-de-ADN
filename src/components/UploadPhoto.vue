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
            <v-card-title class="headline" >¡Sube tu fotografía!</v-card-title>
            <v-card-actions>
                <v-file-input accept="image/*" label="Cargar desde archivo" @click="dialog = false"></v-file-input>
            </v-card-actions>
            <v-card-actions class="justify-center">
                <v-btn class="white--text" color="#6200ea" @click="dialog2 = !dialog2">Tomar con dispositivo</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent max-width="450">
      <v-card>
        <v-card-actions class="justify-center">
          <Webcam></Webcam>
        </v-card-actions class="justify-center">
        <v-card-actions class="justify-center">
          <v-btn color="#6200ea" text @click="dialog = false; dialog2 = false">Cerrar</v-btn>
        </v-card-actions class="justify-center">
      </v-card>
      </v-dialog>
  </v-row>
</template>

<script>
  import Webcam from '../components/Webcam';
  export default {
    components: {
      Webcam
    },
    data () {
      return {
        dialog: false,
        dialog2: false,
      }
    },
  }
</script>