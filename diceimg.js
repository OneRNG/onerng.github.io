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

// The dice array
var dice = shuffle([1,2,3,4,5,6]);

// Output the dice links as per the new array ...
var len = dice.length;
document.write ("<div class='sixd6'>");
for (var i=0; i<len; ++i) {
        // Construct image filenames from each die face value
        document.write ("<img src='/img/die_face_",(dice[i]),".svg' title='",(dice[i]),"'/>");
}
document.write ("</div>");
