<template>
  <Navbar></Navbar>
  <main role="main" class="container">
    <router-view/>
  </main>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'App',
  components: { 
    Navbar 
  }
  
  
}
</script>

<style>
body {
  padding-top: 5rem;
}

.starter-template {
  padding: 3rem 1.5rem;
  text-align: center;
}
</style>