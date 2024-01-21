<template>
   <NabBar></NabBar>
    <Header></Header>
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
  <router-view></router-view>
  </div>
  </section>
  <Footer></Footer>
</template>

<script>
import NabBar from './components/Layout/NavBar';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

export default {
  name: 'App',
  components:{
    NabBar,
    Header,
    Footer
   }
}
</script>

<style>

</style>
