var xmlHttp

function showResults () {
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp ==null)
	{
		alert("Browser does not support HTTP Request");
		return
	}
	var url="favorites_search.php";
	xmlHttp.onreadystatechange=stateChanged ;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	 {
	 // Firefox, Opera 8.0+, Safari
	 	xmlHttp=new XMLHttpRequest();
	 }
		catch (e)
	 	{
		 //Internet Explorer
		 try
		  {
		  	xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		  }
		 	catch (e)
		  {
		 	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		 }
	return xmlHttp;
}
function stateChanged()
{
	if (xmlHttp.readyState== 4 || xmlHttp.readyState=="complete")
		 { 
		 	
		 	document.getElementById("favorite_movies").innerHTML=xmlHttp.responseText 
		 } 
}

