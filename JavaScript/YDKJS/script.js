

var d = 3

function foo (a) {
	var b = a * 2
	
		function bar(c){

			console.log(a,b,c,d)
		}

		bar(b*3)


}

foo(2)