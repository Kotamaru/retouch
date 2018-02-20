var all = document.querySelectorAll('.switch input');
var spText = document.querySelectorAll('.setting-param p');

document.addEventListener('change', checker);
function checker(){
for (var i = 0; i <= all.length; i++)
	{
	if(all[i].checked)
		{
			spText[i].textContent = 'MAX';
		}
	else
		{

			spText[i].textContent = 'NORM';
		}
	
	}
}

/*--------------------------------------------------------*/
var els = document.querySelectorAll('.round-img');
body.els.addEventListener('click', YB);

function YB(){

var parentElement = document.querySelectorAll('.setting-row');
var theFirstChild = parentElement.firstChild;
var newElement = document.createElement("img");
parentElement.insertBefore(newElement, theFirstChild);


}