<template>

    <div id="app">
    
        <p>Name: </p>
        <input v-model="name">
        <p>Email: </p>
        <input v-model="email">
        <p>Password: </p>
        <input type="password" v-model="senha">
        <p>Phone number: </p>
        <input v-model="telefone">
        <button v-on:click="editUser">Save</button>
        <button v-on:click="deleteAccount">Delete Account</button>
    
    </div>
</template>

<script>
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
      editUser(){ 
        
        const form = { id: localStorage.id, name: this.name, email: this.email,senha: this.senha,telefone: this.telefone}
        fetch('http://localhost:3000/users', {

          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form)
          //mode: 'no-cors'
        })
        alert("Usuario Alterado!")
        console.log(JSON.stringify(form))
        //this.name = ''
        //this.email = ''
      },

      fillAll(){

        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>{
          data.forEach(post=>{
              
            if(localStorage.id == post.id){
                
              this.name = post.name,
              this.email = post.email,
              this.senha = post.senha,
              this.telefone = post.telefone

            }
          })                    
        })
      },

      deleteAccount(){
        fetch('http://localhost:3000/users', {

          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({id: localStorage.id})
          //mode: 'no-cors'
        })

        alert("Account Deleted!")
      }
    },

    mounted() {
      this.fillAll()
    }
    
  }
  
</script>