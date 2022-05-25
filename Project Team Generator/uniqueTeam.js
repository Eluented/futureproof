const diren = [
    "Aafthab",
    "Trina",
    "Yusra",
    "Andrew",
    "Dan (student dan)",
    "Robyn",
    "Amarachi",
    "Khari",
    "Libby",
    "Thayaan",
    "Albert",
    "Alfie",
    "David"
]

const teamGenerator = (name) => {
    let arr = name 

    let team = [] 

    for (let i = 1; i < 5; i ++) {
        for (let j = 1; j < 4; j ++) { 
            let random = Math.floor(Math.random() * arr.length); 
            let member = arr[random]; 
            team.push([member, i, j])  
    
            let takeOutMemberFromOriginalArray = arr.slice(0, random).concat(arr.slice(random + 1)); 
            arr = takeOutMemberFromOriginalArray; 
        }
    }

    console.log(arr)
    return team
}

console.log(teamGenerator(diren))

