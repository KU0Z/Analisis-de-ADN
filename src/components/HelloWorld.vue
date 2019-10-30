<template>
<div>
    <v-col cols="12" sm="9" offset-sm="2">
      <v-card color="grey lighten-2">
        <v-container fluid>
          <v-row>
            <v-col :key="0" class="d-flex child-flex" cols="6">
              <v-card flat tile class="d-flex" >
                <UploadPhoto></UploadPhoto>
              </v-card>
            </v-col>
            <v-col :key="1" class="d-flex child-flex" cols="6">
              <v-card flat tile class="d-flex">
                <UploadPhoto></UploadPhoto>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
</div>
</template>

<script>
import UploadPhoto from '../components/UploadPhoto';

export default {
  components: {
    UploadPhoto
  },
};
</script>