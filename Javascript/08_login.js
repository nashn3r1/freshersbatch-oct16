function check()
{
	uid = document.getElementById("userid").value;
	pwd = document.getElementById("pswrd").value;
	
	if( uid != " ninad " || pwd != "deshpande")
	{
		alert(" user-id or password is incorrect. you hav 2 chances left!");
	}