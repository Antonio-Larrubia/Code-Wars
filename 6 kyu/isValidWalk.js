// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let dx = 0;
    let dy = 0;
    for (let index = 0; index < walk.length; index++) {
        let e = walk[index];
        switch (e) {
            case 'n': dx++
            case 's': dx--
            case 'w': dy++
            case 'e': dy--
        }
    }
    return walk.length === 10 && dx === 0 && dy === 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //false
console.log(isValidWalk(['w'])) //false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //false