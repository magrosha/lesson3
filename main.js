function completeAndRedirect(){
    var form = document.forms['myform'];
    text.innerHTML="Веденні вами дані: <br> Fist Name: : "+ form.elements.login.value + "<br> Email: : " + form.elements.email.value + "<br> ПОвідомлення : " + form.elements.messenger.value;
}