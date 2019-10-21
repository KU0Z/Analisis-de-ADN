<template>
  <div class="text-center">
    <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="deep-purple accent-4" dense dark
      @click="dialog = true; component='ResultsTable'"
    >
      Realizar Análisis
    </v-btn>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card color="deep-purple accent-4" dense dark>
        <v-card-text>
          Comparando carácteristicas fisiológicas
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <component v-bind:is="component"></component>
  </div>
</template>
<script>
import ResultsTable from '../components/ResultsTable';
  export default {
    components: {
      'ResultsTable': ResultsTable
    },
    data () {
      return {
        dialog: false,
        component: '',
      }
    },

    watch: {
      dialog (val) {
        if (!val) return
        setTimeout(() => (this.dialog = false), 4000)
      },
    },
  }
</script>