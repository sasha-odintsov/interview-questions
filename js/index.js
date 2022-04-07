fetch('http://localhost:3005')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const result = data.map(x => 
            `<li class="main_item">${x.question}<span class="btns-wrap"><button class="btn">&#10004;</button><button class="btn">&#10008;</button><button class="btn so-so-btn">&plusmn;</button></span></li>`)
            .join('');
        document.querySelector('.main').innerHTML = result;
    });


    // const some = document.querySelector('.header');
    // some.style.backgroundColor = 'red';


// document.querySelector('.btn').addEventListner('click', () => {
//     document.querySelector('.main_item').style.color = 'red'
// })