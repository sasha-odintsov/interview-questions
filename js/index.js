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
                
            if (x.status === 1) {
                render('main_item-status1');
            } else if (x.status === 2) {
                render('main_item-status2');
            } else if (x.status === 3) {
                render('main_item-status3');
            } else {
                render('')
            };   
        });    
    })
    .then(() => {
        async function getListWithFetch(url, route, method, body) {
            const response = await fetch(url + '/' + route, {
                method,
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            document.location.reload();  
        };
    
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

        // function changeStatus(clss, status, url, method) {
        //     const elements = document.querySelectorAll(clss);
        //     elements.forEach(function(button) {
        //         button.onclick = function() {
        //             const body = {
        //                 status,
        //                 _id: this.dataset.questionid
        //             }
        //             fetch(url, {
        //                 method,
        //                 body: JSON.stringify(body),
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 }
        //             })
        //             .then((response) => response.json())
        //             .then((result) => {
        //                 console.log(result)
        //                 // location.reload();
        //             });
        //         }; 
        //     });
        // };
  
        // changeStatus('.btn-ok', 1, 'http://localhost:3005/status', "PATCH");
        // changeStatus('.btn-not-ok', 2, 'http://localhost:3005/status', "PATCH");
        // changeStatus('.btn-so-so', 3, 'http://localhost:3005/status', "PATCH");
        // changeStatus('#reset', 0, 'http://localhost:3005', "PATCH");