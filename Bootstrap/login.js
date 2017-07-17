function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.email.value == "anand@xoriant.com" && form.pwd.value == "anand123")
  {
    window.open("Homepage2.html","_self")/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}