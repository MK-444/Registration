const inputs = document.querySelectorAll('.input');
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");

}
function relmcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", adcl);
	input.addEventListener("blur", remcl);
});