# mnozina
Helper za JavaScript, ki vrne pravilno obliko besede glede na števnost (kot npr. (1) uporabnik, (2) uporabnika, (5) uporabnikov).

# Primer uporabe
```
var n = 18;
n.mnozina("tekmovalka", "tekmovalki", "tekmovalke", "tekmovalk");   // vrne "tekmovalk"
n = 2;
n.mnozina("tekmovalka", "tekmovalki", "tekmovalke", "tekmovalk");   // vrne "tekmovalki"
```