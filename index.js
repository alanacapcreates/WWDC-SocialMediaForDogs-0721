const dogBasket = document.getElementById("dog-basket")
const dogProfile = document.getElementById("dog-profile")

const dogs = [
    {
        name: 'Stella',
        thumbnail: 'img/thb_stella.png',
        age: "4 years old",
        favoriteToy: "cookie"
    },
     {
        name: 'Gracie',
        thumbnail: 'img/thb_gracie.png',
        age: "1 year old",
        favoriteToy: "squirrel"
    },
     {
        name: 'Charlotte',
        thumbnail: 'img/thb_charlotte.png',
        age: "9 months old",
        favoriteToy: "donut"
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
    const profileDetails = document.createElement("div")

    const profileName = document.createElement("h2")
    const profileAge = document.createElement("p")
    const favToy = document.createElement("p")
    profileDetails.setAttribute("class","profile-modal")
    


    //setting the text content depending on the dog
    for(let i=0;i<dogs.length;i++){
        if(event.target.id==i){
           profileName.textContent = dogs[i].name
           profileAge.textContent = dogs[i].age
           favToy.innerHTML = `My favorite toy is my <span class="toy">${dogs[i].favoriteToy}</span>`
           profileDetails.append(profileName)
           profileDetails.append(profileAge)
           profileDetails.append(favToy)
        }
        
    }
    console.log(profileName)
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