import data from '../data/skills.data.json';

const interests = document.querySelector('.interests');

function createSkills(item) {
    var list = document.createElement('ul');
    list.classList.add('interests__list');
    
    item.forEach(element => {
        var li = document.createElement('li');
        li.classList.add('interests__item');

        var blockLogo = document.createElement('div');
        blockLogo.classList.add('interests__item-circle');
        var blockText = document.createElement('div');
        blockText.classList.add('interests-block');

        var logoImg = document.createElement('img');
        logoImg.setAttribute('url', element.imageURL);
        logoImg.setAttribute('alt', 'pictures logo');
        logoImg.classList.add('interests__item-svg');

        var title = document.createElement('h4');
        title.classList.add('interests-block__heading');

        var subtitle = document.createElement('span');
        subtitle.classList.add('interests-block__desc');

        var text = document.createElement('p');
        text.classList.add('interests-block__info');

        list.appendChild(li);
        li.appendChild(blockLogo);
        li.appendChild(blockText);
        blockText.appendChild(title);
        blockText.appendChild(subtitle);
        blockText.appendChild(text);
        blockLogo.appendChild(logoImg);
        title.textContent = element.title;
        subtitle.textContent = element.subtitle;
        text.textContent = element.text;
    });
    interests.appendChild(list);
    console.log(list);

}

createSkills(data);

