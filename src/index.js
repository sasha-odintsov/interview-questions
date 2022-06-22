import getListWithFetch from './lib/getListWithFetch';

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
                    <button data-questionId="${x._id}" class="btn-ok">&#10004;</button>
                    <button data-questionId="${x._id}" class="btn-not-ok">&#10008;</button>
                    <button data-questionId="${x._id}" class="btn-so-so">&plusmn;</button>
                    </span>
                    </li>`
                );
            };   
            
            switch(x.status) {
                case 1:
                    render('main_item-status1');
                    break;
                case 2: 
                    render('main_item-status2');
                    break;
                case 3:
                    render('main_item-status3');
                    break;
                default:
                    render('');
            }   
        });    
    })
    .then(() => {
        function changeStatus(clss, status) {
            const elements = document.querySelectorAll(clss);
            elements.forEach(function(button) {
                button.onclick = function() {
                   let id = this.dataset.questionid;
                   getListWithFetch('http://localhost:3005', 'status', "PATCH", {status, _id: id});
                }; 
            });
        };
        
        changeStatus('.btn-ok', 1);
        changeStatus('.btn-not-ok', 2);
        changeStatus('.btn-so-so', 3);
    })

    document.querySelector('#reset').onclick = function() {
       (confirm('Очистить все ответы?')) ? 
            getListWithFetch('http://localhost:3005', 'reset', "PATCH", {status: '', status: 0}) : false;
    }