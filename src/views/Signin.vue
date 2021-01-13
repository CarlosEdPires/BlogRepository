<template>
  <body class="text-center">

        <!-- <form class="form-signin">  -->
            <img class="mb-4" src="img/login.png" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="senha">
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" v-on:click="loginValidation">Sign in</button>
            
        <!-- </form>  -->
        <!--

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        -->


    </body>
</template>

<script>
//import {setId} from '../loggedUser' 
//import {setLogged} from '../loggedUser'
//import {getLogged} from '../loggedUser'

export default {
  
  name: 'Signin',
  data () {
    
    return{
      email: '',
      senha: ''
      
    }
  },
  methods: {
    
    loginValidation(){
      var logged = false
      //var userId = 0
      //localStorage.logged = false
      console.log(`Input Name: ${this.email} | Input Email: ${this.senha} `)  
      fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>{
          data.forEach(post=>{
            console.log(` Email: ${post.email} | Phone Number: ${post.senha}`)
            if(this.email == post.email && this.senha == post.senha){
              
              //console.log("ok")
              logged = true
              //console.log(logged)
              //alert("Logged!")
              localStorage.id = post.id
              //localStorage.logged = 1
              //localStorage.logged = true
              //setId(post.id)
              //setLogged(true)
              //userId = post.id              
              
            }
          })
          if(logged == true){
            alert("Logged!")
          }else{
            alert("Wrong email or password")
          }
                    
        })
        
    }
  },
  computed: {

  },
  mounted () {
    
  }
  
  
 
}
</script>