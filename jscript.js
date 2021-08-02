function validate(){

    const fname = document.getElementById("text")
    const password = document.getElementById("pass")
    const passconf = document.getElementById("passcon")
    const mobile = document.getElementById("mobile")
    

        if(fname.value.length < 3){
            document.getElementById("div1").innerHTML = "Please enter valid name";
            return false;
        }
        else if(password.value.length < 5) {
            
             document.getElementById("div2").innerHTML = "Password should contain atleast 5 characters";
             return false;
        }
        else if(password.value.length != passconf.value.length) {
           
            document.getElementById("div3").innerHTML = "Password should match";
            return false;
        }
        else if(mobile.value.length < 10) {
            
            document.getElementById("div4").innerHTML = "Please enter valid mobile number";
            return false;
        }
        
        else {
           return true
        }
    
}

function details() {
    const weight = document.getElementById("weight")
    const height = document.getElementById("height")
    const age = document.getElementById("age")
    const health = document.getElementById("health")

    if(weight.value.length < 1 ) {
        document.getElementById("div5").innerHTML = "Please enter your weight";
        return false;
        
    }
    else if(height.value.length < 1){
        document.getElementById("div6").innerHTML = "please enter your height";
        return false;
    }
    else if (age.value.length < 1) {
        document.getElementById("div7").innerHTML = "Please enter valid age";
        return false;
    }
    else if(health.value.length === "") {
        document.getElementById("div8").innerHTML = "Please enter your health issues, if none then type none";
        return false;
    }
    else {
       return true
    } 
}