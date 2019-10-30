<template>
<div>
  <Header></Header>
  <div class="row">
    <div class="column left" style="background-image: radial-gradient(circle, #ba92f0, #ba92f0, #20004d)">
      <HelloWorld></HelloWorld>
      <Loader ></Loader>
    </div>
    <div class="column right" style="background-color: #20004d">
      <DNA></DNA>
    </div>
  </div>  
</div>
</template>

<style> 
* {
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;
}
.left {
  width: 82%
}

.right {
  width: 18%
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 1360px) {
  .row {
    width: 100%;
  }
  .column {
    width: 100%;
  }
}

</style>

<script>
import HelloWorld from '../components/HelloWorld';
import Header from '../components/Header';
import Loader from '../components/Loader';
import DNA from '../components/DNA';


export default {
  components: {
    HelloWorld,
    Header,
    Loader,
    DNA
  },
};
</script>
