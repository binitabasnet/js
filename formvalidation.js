function fnameValidate(params) {
    let first_name=document.getElementById('firstname').value
    if (first_name==""){
        displayMsg("firstname is required","fnamemsg","red")
        return false
    }
    else if(first_name.length<3){
        displayMsg("firstname must me more than 3 characters","fnamemsg","red")
        return false

    }
    else{
        displayMsg("valid firstname","fnamemsg","green")
        return true
    }
}

function displayMsg(msg,id,colorValue) {
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorValue
    
}

function lnameValidate(params) {
    let last_name=document.getElementById('lastname').value
    if (last_name==""){
        displayMsg("lastname is required","lnamemsg","red")
        return false
    }
    else if(last_name.length<3){
        displayMsg("firstname must me more than 3 characters","lnamemsg","red")
        return false

    }
    else{
        displayMsg("valid lastname","lnamemsg","green")
        return true
    }
}

function emailValidate(params) {
    
}