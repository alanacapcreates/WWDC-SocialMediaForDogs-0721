const dogBasket = document.getElementById("dog-basket")

const dogs = [
    {
        name: 'Stella',
        thumbnail: 'img/thb_stella.png',
        age: "4 years old"
    },
     {
        name: 'Gracie',
        thumbnail: 'img/thb_gracie.png',
        age: "1 year old"
    },
     {
        name: 'Charlotte',
        thumbnail: 'img/thb_charlotte.png',
        age: "9 months old"
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
function handleclick(){
    console.log("clicked")
}
function renderProfiles(){
    for (let i = 0; i < dogs.length; i++) {
        const profile = document.createElement("div")
        const profileImg = document.createElement("img")
        const profileName = document.createElement("h2")
        const profileAge = document.createElement("p")
        const moreInfo = document.createElement("button")

        profile.setAttribute("class","card-style")
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
const recentPosts = document.getElementById("posts")
function renderPosts(){
    for (let i = 0; i < posts.length; i++) {
        const postCard = document.createElement("div")
        const postImg = document.createElement("img")
        const username = document.createElement("p")
        const postDate = document.createElement("p")
        const likesBtn = document.createElement("button")
        const likes = document.createElement('p')
        postCard.setAttribute("class","post-style")
        postImg.setAttribute("class","post-card-img")
        username.style.display="block"
        likesBtn.style.float ="left"
        likes.style.float="left"
        likesBtn.style.fontFamily='Material Icons'
        likesBtn.style.padding="10px 10px"
        postDate.style.float="right"

        postImg.src = posts[i].image
        username.textContent = posts[i].username
        postDate.textContent = posts[i].postDate
        likesBtn.innerHTML = `<span class="material-icons-outlined">
        pets</span>`
        likes.textContent = `${posts[i].likes} likes`


        postCard.append(postImg)
        postCard.append(username)
        postCard.append(postDate)
        postCard.append(likesBtn)
        postCard.append(likes)
        recentPosts.append(postCard)
    }
}

renderProfiles()
renderPosts()