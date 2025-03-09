//your JS code here. If required.

function toupercase{

	let word = document.getElementbyID(fname);
	word.addEventListner("input" , function()  {
		this.value = this.value.toUpperCase();
		
	})
}
