const onur = ["Aafthab",
    "Naomi",
    "Trina",
    "Yusra",
    "Andrew",
    "Dan (student dan)",
    "Amarachi",
    "Prishal",
    "Thayaan",
    "Albert",
    "Alfie",
    "David",
    "Doreen"
]

const teamGenerator = (name) => {
    let arr = name // I want a COPY of the input array

    let team = [] // I want an empty array to populate with new random members

    for (let i = 0; i < 3; i ++) { // I want to loop this code below 3 times 

        let random = Math.floor(Math.random() * arr.length); // selects a random INDEX for the array 
        let member = arr[random]; // uses the random index to get a random member 
        console.log(member)
        team.push(member)  // push this random member to the 

        let takeOutMemberFromOriginalArray = arr.slice(0, random).concat(arr.slice(random + 1)); // make new array WITHOUT the selected person in it
        arr = takeOutMemberFromOriginalArray; // reassign the copy array to the array WITHOUT the selected person

        console.log(arr)
         
    }

    return team
}

console.log(teamGenerator(onur))

