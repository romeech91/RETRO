

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => response.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
}

var li = document.createElement('li');
li.textContent = getPosts;
document.body.appendChild(li);

getPosts();
