<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted () {
   window.fbAsyncInit = function() {
    FB.init({
      appId            : '536085350536644',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v5.0'
      });
    };
  }
  
};
</script>
