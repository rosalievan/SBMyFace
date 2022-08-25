
function whenClicked() {

  let posts = document.getElementsByClassName("post")
  console.log(posts)

  for (let post of posts){
    post.style.background = 
    
     `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  }
  
};
