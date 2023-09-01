var nameerror=document.getElementById('name-error');
var emailerror=document.getElementById('mail-error');
var submiterror=document.getElementById('submit-error');
function valname(){
    var name=document.getElementById('name').value;
    if(name.length==0){
        nameerror.innerHTML='name required';
        return false;
    }
    
}
function valemail(){
    var email=document.getElementById('email').value;   
    if(email==0){
        emailerror.innerHTML='email required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailerror.innerHTML='invalid email';
        return false;
    }
   
    emailerror.innerHTML='valid';
    return true;
    
}
