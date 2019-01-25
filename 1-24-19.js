// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//  function conjunction (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
//  }
// conjunction("Master", "Card")


// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }
// const HTMLRepresentation = `${<h1>The Mod Squad</h1>}`
// ModSquad.members.forEach(member => {
//     let currentMod += `<div>${member}</div>`
// }
// }
// document.querySelector(".show-info").innerHTML = HTMLRepresentation

//1.
// - Create three new files: an `index.html`, a JavaScript file, and a CSS file
// - Copy and paste the following code into your `index.html` file:
{/* <article id="container"></article> */}
// 
// - Write a function called buildSection that accepts two arguments: `text` and `style`

// function buildSection(text, style){
//     document.querySelector("#container").innerHTML = `<h2 class=${style}>${text}</h2>`
// }
// - The function should return an HTML component of a section element with whatever text and class (`style`) you pass in. 

// - Go ahead and add some CSS rules to whatever style you pass in so you can see if it worked or not.

// - Call the function and insert your section into the DOM

// buildSection("About $3.50", "boogers")

const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}
let htmlString = ""
for (i = 0; i < students.length; i++) {
    let studentComponent = ""
    if (students[i].score < 60) {
       studentComponent = `${h1(students[i].name, "failing", "xx-large")}`   
       console.log(studentComponent)
}
    else {
       studentComponent = `${h1(students[i].name, "passing", "xx-large")}`
       console.log(studentComponent)
    }
    studentComponent += `${section(students[i].class, "bordered dashed section--padded")} ${aside(students[i].info, "pushRight")}`
    htmlString += studentComponent
}

document.querySelector("#container").innerHTML = htmlString

// const container = document.querySelector("#container")
// container.innerHTML = student("Marcus Fulbright", "Algebra", "Not a bright student")