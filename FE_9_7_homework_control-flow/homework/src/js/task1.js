// Your code goes here
const login=prompt('enter login');
const date=new Date().getHours();
console.log(date);
if(login==='' || login === null){
    alert('canceled')
}else{
    if (login.length<4){
        alert('I don\'t know any users having name length less than 4 symbols')
    }else{
        if(login!=='User'){
            alert('I don’t know you')
        }else{
            const password= prompt('enter password');
            if(password==='' || password === null) {
                alert('canceled')
            }else{
                if(password!=='SuperUser'){
                    alert('Wrong password')
                }else{
                    if(date<20){
                        alert('Good day')
                    }else if(date>=20){
                        alert('Good evening')
                    }
                }
            }
        }
    }
}
