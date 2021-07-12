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

        profile.append(profileImg)
        profile.append(profileName)
        profile.append(profileAge)
        profile.append(moreInfo)

        dogBasket.append(profile)
    }
    

}


renderProfiles()