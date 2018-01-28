function Application (){
	return(
<div>
<h1>Hello from React</h1>
<p>I was rendered from the Application component!</p>
</div>
		);
}

ReactDOM.render(<Application />, document.getElementById('container'));
// 2 arguments: 1. virtual dom element 2. real dom element where we want to place the virtual dom
