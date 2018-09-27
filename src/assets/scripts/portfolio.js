import data from '../data/portfolio.data.json';

const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.browse-all__btn');

function createItems(item) {
    var list = document.createElement('ul');
    list.classList.add('gallery__list');

    item.forEach((element, index) => {

        let li = document.createElement('li');
        li.classList.add('gallery__item');
        li.style.backgroundImage = "url(" + element.imageURL + ")";
        let block = document.createElement('div');
        block.classList.add('bottom-block');

        let desc = document.createElement('span');
        desc.classList.add('bottom-block__name');
        desc.textContent = element.title;

        let circle = document.createElement('div');
        circle.classList.add('bottom-block__circle');
        
        let circleImg = document.createElement('img');
        circleImg.classList.add('bottom-block__img');
        circleImg.setAttribute('src', element.iconURL);

        list.appendChild(li);
        li.appendChild(block);
        block.appendChild(desc);
        block.appendChild(circle);
        circle.appendChild(circleImg);

        if (index > 7) {
            li.classList.add('visually-hidden');
        }
        
        btn.addEventListener('click', function() {
            if (index > 7 && index <= 16) {
                li.classList.toggle('visually-hidden');
                
            }           
        })
        
    });
    
    gallery.appendChild(list);
    console.log(list);
}

createItems(data);

const container = document.querySelector('.portfolio');
const close = document.querySelector('.close-btn');

gallery.addEventListener('click', function(e) {
    var path = e.target.style.backgroundImage;
    var bigWindow = document.createElement('div');
    bigWindow.classList.add('big-image');
    var close = document.createElement('div');
    close.classList.add('close-btn');
    bigWindow.appendChild(close);
    container.appendChild(bigWindow);
    bigWindow.style.backgroundImage = path;

    close.addEventListener('click', function() {
        container.removeChild(bigWindow);
    })

});
