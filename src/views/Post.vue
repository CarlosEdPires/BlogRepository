<template>
    <div id="app">

    <p>Title: </p>
    <input v-model="title">
    <p>Description: </p>
    <input v-model="descr">
    <p>Select Image: </p>
    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpg, image/gif">
    </div>
    <button v-on:click="makePost">Post</button>
    <div class ="post-list row"></div>
    
</template>

<script>
export default {
    
    data(){
      return{
        
        title: '',
        descr: '',
        
        //task: []
        
       }
    },

    methods:{
      makePost(){ 

        var fileInput = document.getElementById('avatar');   
        var filename = fileInput.files[0].name   
        const form = {title: this.title, descr: this.descr, image: filename}
        const postList = document.querySelector('.post-list')
        let output = ''
        
        if(this.title == ''|| this.descr == ''){
          alert("Preencha os campos vazios!")
        }
        else{
          fetch('http://localhost:3000/posts', {
          
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form)
          
          })
        }
        

        output += `
        <div class="card" style="width: 18rem;">
          <img src="img/${filename}" class="card-img-top" >        
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.descr}</p>
          </div>  
        </div>`
        postList.innerHTML = output
        console.log(JSON.stringify(form))
        //this.name = ''
        //this.email = ''
      }
    }
}
</script>