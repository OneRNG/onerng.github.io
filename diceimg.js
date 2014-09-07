// diceimg.js - display 6 die images in a random order

// Pass an array, returns an array
// * Inspired by https://github.com/coolaj86/knuth-shuffle
function shuffle(a) {

        // Step through the array, index value "i"
        // Pick a 'random' element "ri"
        // Swap the two, using "t" to hold one of the values
        var i = a.length, t, ri;
        while (0 != i) {
                ri = Math.floor(Math.random() * i);
                i -= 1;
                t = a[i];
                a[i] = a[ri];
                a[ri] = t;
        }
        return a;
}

// The dice array, using the icon names as values
var dice = shuffle([10541, 10542, 10543, 10544, 10545, 27626]);

// Output the dice links as per the new array ...
var len = dice.length;
document.write ("<div class='sixd6'>");
for (var i=0; i<len; ++i) {
        // The img filenames are ugly ...
        document.write ("<img src='img/icon_",(dice[i]),"/icon_",(dice[i]),".svg'/>");
}
document.write ("</div>");
