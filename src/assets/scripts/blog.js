let user1 = "https://jsonplaceholder.typicode.com/users/1/posts";
let user2 = "https://jsonplaceholder.typicode.com/users/2/posts";
let user3 = "https://jsonplaceholder.typicode.com/users/3/posts";
let photos = "https://jsonplaceholder.typicode.com/photos";

function getPosts(user) {
    fetch(user)
        .then(response => response.json())
        .then(posts => {
            showPosts(posts)
        })
        .catch(err => console.log(err))    
}

function getPhoto(photos) {
    fetch(photos)
        .then(response => response.json())
        .then(photos => {
            showPhoto(photos)
        })
        .then(url => showPosts(url))
        .catch(err => console.log(err))    
}

function showPosts(param, url) {
    param.forEach((element, index) => {
        if (index > 0 && index <= 2) {
            createPost(element, url);
        }
    });
}

function showPhoto(param) {
    for (const iterator of param) {
        let photo = iterator.thumbnailUrl;
        return photo;
    }
}

getPosts(user1);
getPosts(user2);
getPosts(user3);
getPhoto(photos);

const articlesList = document.querySelector('.articles__list');

function createPost(obj, url) {
    
    const li = document.createElement('li');
    li.classList.add('articles__item');
    
    const article = document.createElement('article');
    article.classList.add('article');

    const partPhoto = document.createElement('div');
    partPhoto.classList.add('part__photo');

    const partContent = document.createElement('div');
    partContent.classList.add('part__content');

    let imgUrl = url;
    const img = document.createElement('div');
    img.classList.add('part__photo-img');
    img.style.backgroundImage = imgUrl;

    const h4 = document.createElement('h4');
    h4.classList.add('article__heading');
    h4.textContent = obj.title;

    const date = document.createElement('div');
    date.classList.add('article__date');
    date.textContent = obj.id;

    const dateLh = document.createElement('div');
    dateLh.classList.add('article__date-lh');
    const dateRh = document.createElement('button');
    dateRh.classList.add('article__date-rh');

    const postDate = document.createElement('time');
    postDate.classList.add('post-date');
    const postUser = document.createElement('div');
    postUser.textContent = obj.userId;
    postUser.classList.add('post-user');
    const postHashtags = document.createElement('div');
    postHashtags.classList.add('post-hashtags');

    const line = document.createElement('div');
    line.classList.add('article__line');

    const paragraph = document.createElement('p');
    paragraph.classList.add("article__text");
    paragraph.textContent = obj.body;

    articlesList.appendChild(li);
    li.appendChild(article);
    
    partPhoto.appendChild(img);
    partContent.appendChild(h4);
    partContent.appendChild(date);
    partContent.appendChild(line);
    partContent.appendChild(paragraph);
    article.appendChild(partPhoto);
    article.appendChild(partContent);
    
    date.appendChild(dateLh, dateRh);
    dateLh.appendChild(postDate);
    dateLh.appendChild(postUser);
    dateLh.appendChild(postHashtags);

    console.log(li);
    
}

