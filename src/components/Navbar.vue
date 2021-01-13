<template>
  
  <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="/post">Post Here</a>
            <!-- <div class ="post"></div>  -->
          </div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="/">Home</a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            

            <a class="btn btn-sm btn-outline-secondary" href="/users">All Users</a>
            <a class="btn btn-sm btn-outline-secondary" href="/account">Account</a>
             <!-- <div class ="account"></div>  -->
            <a class="btn btn-sm btn-outline-secondary" href="/signin">Sign in</a>
            <a class="btn btn-sm btn-outline-secondary" href="/signup">Sign up</a>
            <a class="btn btn-sm btn-outline-secondary" @click="signout" href="/">Logout</a> 
            <!-- <div class ="logout"></div>  -->
          </div>
        </div>
  </header>
  
</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    loadUserNavbar(){
      var post = document.querySelector('.post')
      var account = document.querySelector('.account')
      var logout = document.querySelector('.logout')
      var output = ''
      var output2 = ''
      var output3 = ''
      if(localStorage.logged == 1){
        output +=`<a class="text-muted" href="/post">Post</a>`
        output2 +=`<a class="btn btn-sm btn-outline-secondary" href="/account">Account</a>`
        output3 +=`<a class="btn btn-sm btn-outline-secondary" @click="signout" href="/">Logout</a>`
        
      }
      post.innerHTML = output
      account.innerHTML = output2
      logout.innerHTML = output3
    },

    signout(){
      //localStorage.logged = 0
      localStorage.id = 0
      //alert(localStorage.logged)
    }
  },

  mounted () {

    //this.loadUserNavbar()

  }
}
</script>