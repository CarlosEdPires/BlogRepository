<template>
      
  <div class ="post-list row"></div>

  <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <!-- <a class="page-link" href="#" aria-label="Previous"> 
              <span aria-hidden="true">&laquo;</span>
            </a> -->
          </li>
          <li class="page-item"><a class="page-link" @click="loadPosts(0)" >1</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(1)" >2</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(2)" >3</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(3)" >4</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(4)" >5</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(5)" >6</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(6)" >7</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(7)" >8</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(8)" >9</a></li>
          <li class="page-item"><a class="page-link" @click="loadPosts(9)" >10</a></li>
          <li class="page-item">
            <!-- <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a> -->
          </li>
        </ul>
  </nav>
</template>

<script>

export default {

  name: 'Home',
  data () {
    return {

      logged: false,
      userId: 0  
    }

  },
  methods: {
    loadPosts(range){
      var postList = document.querySelector('.post-list')
      var output = ''
      var offset = 10 * range + 1
      var counter = 0
      var limit = offset + 9
      
      fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data =>{
          data.forEach(post=>{
  
            if(counter == 0){
              output +=` 
                <div class="card mb-3">
                  <img class="card-img-top" src="img/${post.image}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.descr}</p>
                  </div>
                </div>
              `
            }
            else{

              if(counter >= offset & counter < limit){
                output += `
                  <div class="card" style="width: 18rem;">
                    <img src="img/${post.image}" class="card-img-top" >        
                    <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.descr}</p>
                    </div>  
                  </div>
                `
              }
              
            }            
            counter++
          })
          postList.innerHTML = output
        })
    }
  },
  computed: {

  },
  mounted () {
    this.loadPosts(0)
  }
  
  
 
}

</script>

<style>

  
body{
    background-color: black;
    color: white;
}

.card{
  color: black;
}

</style>