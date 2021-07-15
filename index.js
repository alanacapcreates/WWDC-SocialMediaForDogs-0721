const dogBasket = document.getElementById("dog-basket")
const dogProfile = document.getElementById("dog-profile")

const dogs = [
    {
        name: 'Stella',
        thumbnail: 'img/thb_stella.png',
        age: "4 years old",
        favoriteToy: "cookie",
        proPic1: "img/stella_daydream.jpg",
        pic1Caption: "thinking about dinner",
        proPic2: "img/stella3bd.png",
        pic2Caption: "celebrating my 3rd birthday with a photoshoot!"
    },
     {
        name: 'Gracie',
        thumbnail: 'img/thb_gracie.png',
        age: "1 year old",
        favoriteToy: "squirrel",
        proPic1: "img/gracie_duck.jpg",
        pic1Caption: "dont take my toy please!",
        pic2Caption: "can I have a treat please?",
        proPic2: "img/gracie-kitchen.jpg"
    },
     {
        name: 'Charlotte',
        thumbnail: 'img/thb_charlotte.png',
        age: "9 months old",
        favoriteToy: "donut",
        proPic1: "img/StellaGracieCharlotte.jpg",
        pic1Caption: "hangin with my BFFs",
        pic2Caption: "time to go to starbucks",
        proPic2: "img/charlotte-car.jpg"
    }
]

const posts = [
    {
        image: "img/gracie_grass.jpg",
        username: "@CrazyGracie123",
        likes: 2,
        postDate: "1 hour ago"
    },
    {
        image: "img/gracie_grass.jpg",
        username: "@StellaGirlxoxo",
        likes: 367,
        postDate: "07/11/21"
    },
    {
        image: "img/gracie_grass.jpg",
        username: "@CharlotteTheQueen",
        likes: 99,
        postDate: "Today"
    }
]
function handleclick(event){
    //clear container
    dogProfile.innerHTML = ""
    //create modal box
    const intro = document.createElement("h2")
    intro.innerHTML = `the <span>B</span>ark<span>B</span>ox`
    const profileDetails = document.createElement("div")
    const picContainer = document.createElement("div")

    const profileName = document.createElement("h3")
    const profileAge = document.createElement("p")
    const favToy = document.createElement("p")
    const proPic1 = document.createElement("img")
    const proPic2 = document.createElement("img")

    const proPic1Cap = document.createElement("p")
    const proPic2Cap = document.createElement("p")

    picContainer.setAttribute("class", "picContainer")

    const propic1C = document.createElement("div")
    const propic2C = document.createElement("div")

    profileDetails.setAttribute("class","profile-modal")
    proPic1.setAttribute("class","profile-img")
    proPic2.setAttribute("class","profile-img")
    
    
    //setting the text content depending on the dog
    for(let i=0;i<dogs.length;i++){
        if(event.target.id==i){
            proPic1.setAttribute("src", dogs[i].proPic1)
            proPic2.setAttribute("src", dogs[i].proPic2)
            
            proPic1.setAttribute("title", dogs[i].pic1Caption)
            proPic2.setAttribute("title", dogs[i].pic2Caption)
            
            proPic1Cap.textContent = dogs[i].pic1Caption
            proPic2Cap.textContent = dogs[i].pic2Caption

            profileName.textContent = dogs[i].name
            profileAge.textContent = dogs[i].age
            profileAge.setAttribute("class", "subtitle")
            favToy.innerHTML = `My favorite toy is my <span class="toy">${dogs[i].favoriteToy}</span>`
        }
        
    }
    propic1C.append(proPic1)
    propic1C.append(proPic1Cap)
    picContainer.append(propic1C)

    propic2C.append(proPic2)
    propic2C.append(proPic2Cap)
    picContainer.append(propic2C)

    // profileDetails.append(proPic1)
    // profileDetails.append(proPic2)
    profileDetails.append(intro)
    profileDetails.append(picContainer)
    profileDetails.append(profileName)
    profileDetails.append(profileAge)
    profileDetails.append(favToy)
    // console.log(profileName)
    // else if(event.target.id==="dogBtn-2"){
    // profileDetails.textContent = "this is gracie"
    // }
    // else{
    //     profileDetails.textContent = "this is charlotte"
    // }



    const close = document.createElement("button")
    close.textContent = "X"
    close.setAttribute("class","close-button")
    close.addEventListener("click", function(){profileDetails.style.display="none"})
    profileDetails.append(close)

   //add to container 
    dogProfile.append(profileDetails)
}
function renderProfiles(){
    for (let i = 0; i < dogs.length; i++) {
        const profile = document.createElement("div")
        const profileImg = document.createElement("img")
        const profileName = document.createElement("h2")
        const profileAge = document.createElement("p")
        const moreInfo = document.createElement("button")

        profile.setAttribute("class","card-style")
        moreInfo.setAttribute("id", i)
        moreInfo.setAttribute("class","btn-more")

        profileImg.src = dogs[i].thumbnail
        profileName.textContent = dogs[i].name
        profileAge.textContent = dogs[i].age
        moreInfo.textContent = "See More"

        moreInfo.addEventListener("click",handleclick)

        profile.append(profileImg)
        profile.append(profileName)
        profile.append(profileAge)
        profile.append(moreInfo)

        dogBasket.append(profile)
    }
  }
// const recentPosts = document.getElementById("posts")
// function renderPosts(){
//     for (let i = 0; i < posts.length; i++) {
//         const postCard = document.createElement("div")
//         const postImg = document.createElement("img")
//         const username = document.createElement("p")
//         const postDate = document.createElement("p")
//         const likesBtn = document.createElement("button")
//         const likes = document.createElement('p')
//         postCard.setAttribute("class","post-style")
//         postImg.setAttribute("class","post-card-img")
//         username.style.display="block"
//         likesBtn.style.float ="left"
//         likes.style.float="left"
//         likesBtn.style.fontFamily='Material Icons'
//         likesBtn.style.padding="10px 10px"
//         postDate.style.float="right"

//         postImg.src = posts[i].image
//         username.textContent = posts[i].username
//         postDate.textContent = posts[i].postDate
//         likesBtn.innerHTML = `<span class="material-icons-outlined">
//         pets</span>`
//         likes.textContent = `${posts[i].likes} likes`


//         postCard.append(postImg)
//         postCard.append(username)
//         postCard.append(postDate)
//         postCard.append(likesBtn)
//         postCard.append(likes)
//         recentPosts.append(postCard)
//     }
// }

renderProfiles()
// renderPosts()