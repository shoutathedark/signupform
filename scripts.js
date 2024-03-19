function createAccount(){
   if(document.getElementById("password").value !== document.getElementById("confirmpassword").value){
    alert("Passwords do not match.")
   }
}