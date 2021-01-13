<template>
  <p>Users</p>
      
  <div class ="post-list"></div>
</template>

<script>

export default {

  name: 'Users',
  data () {

  },
  methods: {
    loadPosts(){
      var postList = document.querySelector('.post-list')
      var output = ''

      fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>{
          data.forEach(post=>{
            output += `
            <div>
            Nome: ${post.name} | Email: ${post.email} | Phone Number: ${post.telefone}
            </div>                        
            `
          })
          postList.innerHTML = output
        })
    }
  },
  computed: {

  },
  mounted () {
    this.loadPosts()
  }
  
  
 
}

</script>