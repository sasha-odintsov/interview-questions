fetch('http://localhost:3005')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach(function (x) {
            function render(clss) {
                document.querySelector('.main').insertAdjacentHTML(
                    "beforeend",
                    `<li class="main_item ${clss}">${x.question}
                    <span id="btns">
                    <button class="btn-ok">&#10004;</button>
                    <button class="btn-not-ok">&#10008;</button>
                    <button class="btn-so-so">&plusmn;</button>
                    </span>
                    </li>`
                );
            };           
            if (x.status == 1) {
                render('main_item-status1');
            } else if (x.status == 2) {
                render('main_item-status2');
            } else if (x.status == 3) {
                render('main_item-status3');
            } else {
                render('')
            };   
        });

        function clickBtn(clss, color) {
            let elements = document.querySelectorAll(clss);
            elements.forEach(function(x) {
                x.onclick = function() {
                    this.style.color = color;
                }; 
            });
        };

        clickBtn('.btn-ok', '#03914e');
        clickBtn('.btn-not-ok', '#bd0000');
        clickBtn('.btn-so-so', '#e9ab00');

        // document.querySelector('.btn').addEventListener('click', function(){
        //     document.querySelector('.main_item').style.color = 'green';
        // });
        // btns.onclick = function(event) {  
        //     if (event.target.className != 'btn' ) return;
        //     document.querySelector('.main_item').style.color = 'green';
        // }

        // function changeColor(a, b, color) {
        //     let elements = document.querySelectorAll(a);
        //     elements.forEach(function (x) {
        //         x.onclick = function() {
        //             this.style.color = color;
        //             this.style.fontSize = '25px'
        //             let el = document.querySelectorAll(b);
        //             el.forEach(x => x.style.color = color);
        //         };
        //     });
        // };
        
        // changeColor('.btn-ok', '.main_item', '#03914e');
        // changeColor('.btn-not-ok', '.main_item', '#bd0000');
        // changeColor('.btn-so-so', '.main_item', '#e9ab00');
    });         


// document.li.className.add('main_item');