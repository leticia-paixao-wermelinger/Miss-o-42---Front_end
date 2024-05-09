function mudarCor() {
//	const cores = ['#FF00FF', '#FF0000', '#0404B4', '#FFBF00', '#071910', '#01DF01', '#4B088A', '#08088A', '#58D3F7', '#FFFF00'];
	const	randomColor = Math.floor(Math.random() * 16777216).toString(16);
	conteudo.style.backgroundColor = "#" + randomColor;
	iconMenu.style.backgroundColor = "#" + randomColor;
}
