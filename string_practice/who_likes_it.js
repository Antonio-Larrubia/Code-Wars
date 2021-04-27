//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

// For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
    str = "likes this"
    let strOfNames = ""
    if (Array.isArray(names) && names.length) {
        if (names.length === 1) {
            str = names[0] +" "+ str;
        }
        else if (names.length > 1 && names.length < 4) {
            let i = 0;
            while (i < names.length) {
                strOfNames += names[i]
                if (i != names.length-1) {
                    strOfNames += ", "
                }
                i++
            }
            strOfNames += " and " + names[names.length-1]
            str = strOfNames + str
        }
        else {
            str = names[0] +", " + names[1] +" and "+(names.length-2).toString()+ " others " +str
        }
    }
    else {
        str = "no one "+str;
    }
    return str;
}

console.log(likes ([])) //-- must be "no one likes this"
console.log(likes (["Peter"])) //-- must be "Peter likes this"
console.log(likes (["Jacob", "Alex"])) //-- must be "Jacob and Alex like this"
console.log(likes (["Max", "John", "Mark"])) //-- must be "Max, John and Mark like this"
console.log(likes (["Alex", "Jacob", "Mark", "Max"])) //-- must be "Alex, Jacob and 2 others like this"
