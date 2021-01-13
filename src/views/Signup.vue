<template>
   
  <div id="app">
    

    <p>Name: </p>
    <input v-model="name">
    <p>Email: </p>
    <input type="email" v-model="email">
    <p>Password: </p>
    <input type="password" v-model="senha">
    <p>Phone number: </p>
    <input v-model="telefone">
    <button v-on:click="createUser">Submit</button>
    
  </div>
 
</template>

<script>
  //import {setId} from '../loggedUser'
  //import {setLogged} from '../loggedUser'
  //import {getId} from '../loggedUser'
  export default{
    data(){
      return{
        
        name: '',
        email: '',
        senha: '',
        telefone: ''
        
       }
    },

    methods:{
      createUser(){ 
        
        //localStorage.logged = false
        const form = {name: this.name, email: this.email,senha: this.senha,telefone: this.telefone}
        if(this.name == ''|| this.email == ''|| this.senha == '' || this.telefone == ''){
          alert("Preencha os campos vazios!")
        }
        else{
          
          fetch('http://localhost:3000/users', {

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form),
            //mode: 'no-cors'
            })
      
            alert("Welcome!! Go to Signin!")
     
            //this.name = ''
            //this.email = ''
                   
        }
       
      },

      
    }
  }
    
</script>