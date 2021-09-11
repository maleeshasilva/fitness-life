function passwordValidator(password, rePassword){

    let msg = 0;

    if(password == rePassword){
        if(password.length < 6){
            msg = 1;
        } else{
            msg = 0;
        }
    }else{
        msg = 2;
    }

    return msg;
}

export default passwordValidator;