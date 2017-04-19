/*
Primer uporabe:
var n = 18;
n.mnozina("tekmovalka", "tekmovalki", "tekmovalke", "tekmovalk");   // vrne "tekmovalk"
n = 2;
n.mnozina("tekmovalka", "tekmovalki", "tekmovalke", "tekmovalk");   // vrne "tekmovalki"
*/

Number.prototype.mnozina = function(ena, dve, tri, pet) {
	if(this % 100 == 1)
		return ena;     // 1, 101, 1001 tekmovalka

	if(this % 100 == 2)
		return dve;     // 2, 202, 2002 tekmovalki

	if(this % 100 == 3 || this % 100 == 4)
		return tri;     // 3, 4, 103, 104 tekmovalke

	return pet;         // 5, 6, 105, 106, 107 tekmovalk
}