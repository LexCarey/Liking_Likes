console.log("Hey!")

var allLikes = [3, 12, 9]

var currentLikes1 = document.querySelector("#likes1")

var currentLikes2 = document.querySelector("#likes2")

var currentLikes3 = document.querySelector("#likes3")

function addLike(likeOwner, i) {
    console.log(allLikes)
    allLikes[i]++
    likeOwner.innerText = allLikes[i]
}

