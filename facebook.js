// ================================= FACEBOOK API SIMULATION USING PROMISE ASYNC AWAIT ================================

// use prompt for user and pass
// if correct return these datas
// friends object return as array [{id:1, name:"haerin"}] => ["haerin"]
// videos object return as array
// picture object return as array
// function to combine the picture and videos in an album < pictures:[], videos:[] >

// messages as random 12 numbers starts at 09
// messages as setInterval every 1 second for every friends < haerin: "message1" >

// console at the end
// user: robin
// friends: [...]
// album: {...}


const prompt = require("prompt-sync")();        // npm install prompt-sync
const color = require('colors');                // npm install colors


// ================================================= API SIMULATION ===================================================
const friendsAPI = [ // id, Full Name, Age, Stage Name, Native Name, Birthday, Country of Birth, Height, Zodiac Sign, Emoji
    {
        "id":1,
        "Full Name":"Kim Minji",
        "Age": 18,
        "Stage Name": "Minji",
        "Native Name": "김민지",
        "Birthday": "May 7, 2004",
        "Country of Birth": "South Korea",
        "Height": "169 cm (5'7)",
        "Zodiac Sign": "Taurus",
        "Emoji":"🐻"
    },
    {   "id":2,
        "Full Name":"Phạm Ngọc Hân",
        "Age": 18,
        "Stage Name": "Hanni",
        "Native Name": "Phạm Ngọc Hân",
        "Birthday": "Oct 6, 2004",
        "Country of Birth": "Vietnam",
        "Height": "161.7 cm (5'4)",
        "Zodiac Sign": "Libra",
        "Emoji":"🐰"
    },
    {
        "id":3,
        "Full Name":"Danielle Marsh",
        "Age": 17,
        "Stage Name": "Danielle",
        "Native Name": "모지혜",
        "Birthday": "Apr 11, 2005",
        "Country of Birth": "South Korea",
        "Height": "165 cm (5'5)",
        "Zodiac Sign": "Aries",
        "Emoji": "🐶"
    },

    {
        "id":4,
        "Full Name": "Kang Haerin",
        "Age": 17,
        "Stage Name": "Haerin",
        "Native Name": "강해린",
        "Birthday": "May 15, 2006",
        "Country of Birth": "South Korea",
        "Height": "164.5 cm (5'5)",
        "Zodiac Sign": "Taurus",
        "Emoji": "🐹"
    },

    {
        "id":5,
        "Full Name": "Lee Hyein",
        "Age": 15,
        "Stage Name": "Hyein",
        "Native Name": "이혜인",
        "Birthday": "Apr 21, 2008",
        "Country of Birth": "South Korea",
        "Height": "170 cm (5'7)",
        "Zodiac Sign": "Taurus",
        "Emoji": "🐣"
    },
]
const videosAPI = [ // video1, video2, video3, video4, video5
    {video1: "The Good Bad Mother"},
    {video2: "All of us Are Dead"},
    {video3: "Backstreet Rookie"},
    {video4: "Doctor Romantic"},
    {video5: "My Hero Academia"}
]
const picturesAPI = [ //picture1, picture2, picture3, picture4, picture5
    {picture1: "Selfies"},
    {picture2: "Graduation"},
    {picture3: "Photobooth"},
    {picture4: "Drawings"},
    {picture5: "Kpop"}
]

const password = "123"              // <========= DEFAULT PASSWORD

// ================================================= AUTHENTICATE ====================================================
function getAuthenticate(user, pass){  // [{id:1, name:"qoli"}] => ["qoli"]
    return new Promise((resolve, reject) => {
        console.log("Authenticating...")
        let authenticated = false;
        setTimeout(()=> {
            if(pass !== password){
                console.log(" ")
                reject("Wrong Password!".red)
            }
            else{
                authenticated = true
                console.log(`\nHello, ${user}! Welcome Back.`.green)
                resolve(authenticated)
            }

        }, 2000)
    })
}

// ============================================= FETCH FRIENDS DATA ==================================================
function getFriends(authenticated){  // [{id:1, name:"qoli"}] => ["qoli"]
    try{
        return new Promise((resolve, reject) => {
            console.log("\nFetching Data...🚀")
            setTimeout(()=> {
                if(authenticated){
                    let names = friendsAPI.map(friend => friend["Full Name"])
                    resolve(names)
                }
                else{
                    console.log(" ")
                    reject("!Authentication Issue: Not Authenticated!".red)
                }

            }, 4000)
        })
    }
    catch(Error) {
        console.log("!Server Error: Failed to fetch!".red)
        console.log((Error.message).red)
    }

}

// ============================================= FETCH VIDEOS DATA ====================================================
// [{video1: "The Good Bad Mother"}] => ["The Good Bad Mother"]
function getVideos(authenticated){
    try{
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                if(authenticated){
                    const videosData = videosAPI.map(video => `${Object.values(video)}`)
                    resolve(videosData)
                }
                else{
                    console.log(" ")
                    reject("!Authentication Issue: Videos were not fetch!".red)
                }
            }, 2000)
        })
    }
    catch(Error) {
        console.log("!Server Error: Failed to fetch!".red)
        console.log((Error.message).red)
    }


}

// ============================================= FETCH PICTURES DATA ==================================================
 // [{picture1: "Selfies"}] => ["Selfies"]
function getPictures(authenticated){
    try{
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                if(authenticated){
                    const picturesData = picturesAPI.map(picture => `${Object.values(picture)}`)
                    resolve(picturesData)
                }
                else{
                    console.log(" ")
                    reject("!Authentication Issue: Pictures were not fetch!".red)
                }
            }, 2000)
        })
    }
    catch(Error) {
        console.log("!Server Error: Failed to fetch!".red)
        console.log((Error.message).red)
    }

}

// ================================================== ALBUM MAKER ====================================================
function makeAlbum(videos, pictures){
    try{
        return new Promise((resolve, reject) =>{
            if(videos === undefined|| pictures === undefined){
                reject("!Fetching Issue: Pictures and Videos were not fetch!".red)
            }
            else{
                console.log("\nCreating an Album, Please wait...📥")
                setTimeout(()=> {
                    const newAlbum = [...pictures, ...videos]
                    resolve(newAlbum)
                }, 4000)
            }
        })
    }
    catch(Error) {
        console.log("!Server Error: Failed to fetch!".red)
        console.log((Error.message).red)
    }

}

// ================================================== MESSAGE GENERATOR ===============================================
function random() {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 9);
      numbers.push(randomNumber);
    }

    return numbers.join("");
}

// messages as random 11 numbers starts at 09 <Haerin has a message: "09109151041">
function getMessages(authenticated){
    try{
        if(authenticated){
            setTimeout(()=> {
                console.log(`\nYou Have ${friendsAPI.length} messages!`.red)
                const names = friendsAPI.map(friendObj => friendObj["Stage Name"])
                let currentIndex = 0;

                const notif = setInterval(() => {
                    if (currentIndex >= names.length) {
                        clearInterval(notif);
                        return;
                    }

                    const friend = names[currentIndex];
                    console.log(`📍 ${friend.yellow}` ,`has a message:`.blue, `Call me 09${random()}`.green);
                    currentIndex++;
                }, 1500);
            }, 1000)

        }
        else{
            console.log("!Authentication Issue: You're not logged in!".red)
        }
    }
    catch(Error) {
        console.log("!Server Error: Failed to fetch!".red)
        console.log((Error.message).red)
    }

}

// ================================================== PRINT DETAILS ====================================================
function printDetails(string, checker){
    if(checker === undefined){
        console.log(`${string} not fetched!`.red)
    }
    else{
        console.log(`\nYour ${string}:`.yellow,`${checker}`.blue);
    }
}

// ================================================== ASYNC AWAIT ====================================================
async function display(username, password){
    const authenticate = await getAuthenticate(username, password).catch(err => console.log(err));
    if(authenticate === false || authenticate === undefined){
        ask()
    }
    else{
        const friends = await getFriends(authenticate).catch(err => console.log(err));
        printDetails("Friends",friends)
        const videos = await getVideos(authenticate).catch(err => console.log(err));
        printDetails("Videos", videos)

        const pictures = await getPictures(authenticate).catch(err => console.log(err));
        printDetails("Pictures", pictures)

        const album = await makeAlbum(videos, pictures).catch(err => console.log(err));
        printDetails("Album", album)

        getMessages(authenticate)
    }

}

// ================================================== PROMPT INPUT ====================================================
function ask(){
    while(true){
        console.log(" ")
        const username = prompt("Username: ".yellow);
        const password = prompt("Password: ".yellow);

        if(username == "" || password == ""){
            console.log("Missing inputs!".red)
        }
        else{
            display(username, password)
            return
        }
    }
}
ask()
