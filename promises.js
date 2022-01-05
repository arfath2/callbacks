const posts = [
    { title: "post one", body:"this is post one"},
    { title: "post two", body:"this is post two"},
]

function getPosts(){
    setTimeout(()=>{
        let output='';
         posts.forEach((post,index)=>{
          output += `<li>${post.title}</li>`
         })
         document.body.innerHTML = output;
    },1000)
}

function creatPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();

            }else{
                reject('error: something went wrong')
            }
        },2000)
    })
   
}
function deletePost(){
    setTimeout(()=>{
        return new Promise((resolve,reject)=>{
        posts.pop(posts)
        const error = false;
            if(!error){
                resolve();

            }else{
                reject('error: something went wrong')
            }
    },1000)
})
}

creatPost({title: 'post three', body: 'this is post three'}).then(getPosts).catch(err=> console.log(err));

deletePost();
deletePost();
// deletePost().then(getPosts).catch(err=> console.log(err));
     