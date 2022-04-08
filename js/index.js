fetch('http://localhost:3005')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach(function (x) {
            document.querySelector('.main').insertAdjacentHTML(
                "beforeend",
                `<li class="main_item">${x.question}
                <span id="btns">
                <button class="btn-ok">&#10004;</button>
                <button class="btn-not-ok">&#10008;</button>
                <button class="btn-so-so">&plusmn;</button>
                </span>
                </li>`
            );
        });
        // document.querySelector('.btn').addEventListener('click', function(){
        //     document.querySelector('.main_item').style.color = 'green';
        // });
        // btns.onclick = function(event) {  
        //     if (event.target.className != 'btn' ) return;
        //     document.querySelector('.main_item').style.color = 'green';
        // }
        function changeColor(a, b, color) {
            let elements = document.querySelectorAll(a);
            // for (let i = 0; i < elements.length; i++) {
            //     elements[i].onclick = function() {
            //     let el = document.querySelectorAll(b);
            //         for (let v = 0; v < el.length; v++) {
            //             el[v].style.color = color;
            //         };
            //     };
            // };
            elements.forEach(function (x) {
                x.onclick = function() {
                    let el = document.querySelectorAll(b);
                    el.forEach(x => x.style.color = color);
                    // let item = document.querySelectorAll(a);
                    // item.forEach(x => {
                    //     x.style.color = color;
                    //     x.style.fontSize = '25px'
                    // });

                    // let item = document.querySelector(a);
                    // item.style.color = color;
                };
            });
        };
        changeColor('.btn-ok', '.main_item', '#03914e');
        changeColor('.btn-not-ok', '.main_item', '#bd0000');
        changeColor('.btn-so-so', '.main_item', '#e9ab00');
    });         


// document.li.className.add('main_item');