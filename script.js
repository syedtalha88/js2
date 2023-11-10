(function() {
    const form = document.querySelector('#form1');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const message=document.querySelector('#input-id');
        const error=document.querySelector('.feedback');
        const passed=document.querySelector('.passed');

        if(message.value === '')
        {
            error.classList.add('show');
            document.body.style.backgroundImage='linear-gradient(to right bottom, #ff9a9a, #ff7f7b, #ff625a, #ff4035, #ff0000)';
            setTimeout(function(){
                error.classList.remove('show');
                document.body.style.backgroundImage='linear-gradient(to right bottom, #c8c5ea, #9993c8, #6c62a6, #403584, #080862)';
            }, 2000);
        }
        else{
            passed.textContent=message.value;
            message.value='';
        }
    })
})()