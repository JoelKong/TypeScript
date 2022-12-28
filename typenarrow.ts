function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

//Truthiness guard
const el = document.getElementById("#idk");
if (el) {
}


const printLetters = (word?: string) {
    if(word) {
        for(let char of word) {
            console.log(char)
        }
    } else {
        console.log('sdfds')
    }
}

//Equality Narrowing (less common)
function someDemo(x:string | number, y: string | boolean) {
    if (x === y) {
        x
        y
    }
}

//in operation narrowing
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }
    return media.duration
}
getRuntime({title: 'amadues',duration: 140})


//instanceof Narrowing
function printFullDate(date: string | Date) {
    if(date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        new Date(date).toUTCString()
    }
}

class User {
    constructor(public username: string){}
}
class Company {
    constructor(public name: string) {}
}
function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity
    }
}