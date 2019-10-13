<template>
<div>
  <Header></Header>
  <HelloWorld></HelloWorld>
</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Header from '../components/Header';

export default {
  components: {
    HelloWorld,
    Header
  },
};
</script>
