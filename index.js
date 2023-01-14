const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

let extraLikes = 0;
let extraCourbetLikes = 0;
let extraDucreuxLikes = 0;

const photo = document.getElementById("photo");
let likes = document.getElementById("likes");
const comment = document.getElementById("comment");
let heartIcon = document.getElementById("heart-icon")
const redHeart = "images/heart.png"

photo.innerHTML = `<img src='${posts[0].post}' alt= 'van picture' class='Potriate'>`;

likes.innerHTML = `<p class= bold-like>${posts[0].likes} likes<p>`;


// photo-courbet

const photoCourbet = document.getElementById("photo-courbet");
let courbetLikes = document.getElementById("courbet-likes");
let heart = document.querySelector(".heart")

photoCourbet.innerHTML = `<img src='${posts[1].post}' alt= 'gustave picture' class= 'Potriate'> `;
courbetLikes.innerHTML = `<p class= bold-like>${posts[1].likes} likes</p>`;

// ducreux-photo

const ducreuxPhoto = document.getElementById("ducreux-photo")
let ducreuxLikes = document.getElementById("ducreux-likes")
let iconHeart = document.querySelector(".icon-heart")

ducreuxPhoto.innerHTML = `<img src='${posts[2].post}' alt= 'ducreux picture' class= 'Potriate'>`;
ducreuxLikes.innerHTML = `<p class= bold-like>${posts[2].likes} likes</p>`

heartIcon.addEventListener('click', function() {
    if(posts[0].isLiked){
        extraLikes--
        heartIcon.style.color = 'black'
    }else{
        extraLikes ++
        heartIcon.style.color = 'red'
    }
   
    let addlike = posts[0].likes + extraLikes
    likes.innerHTML =  `<p class= bold-like>${addlike} likes</p>` 
    posts[0].isLiked = !posts[0].isLiked ;
})


heart.addEventListener('click', function() {
    if(posts[1].isLiked){
        extraCourbetLikes --
        document.querySelector(".heart").style.color = 'black' 
    }else{
        extraCourbetLikes ++
        document.querySelector(".heart").style.color = 'red'
    }
     let extraCourbetLke = posts[1].likes + extraCourbetLikes
    courbetLikes.innerHTML = `<p class= bold-like>${extraCourbetLke} likes</p>`
    posts[1].isLiked = !posts[1].isLiked
})

iconHeart.addEventListener('click', () => {
    if(posts[2].isLiked){
        extraDucreuxLikes --
        iconHeart.style.color = 'black'
    }else{
        extraDucreuxLikes ++
        iconHeart.style.color = 'red'
    }
    let extraDucreuxLike = posts[2].likes + extraDucreuxLikes
    ducreuxLikes.innerHTML = `<p class= bold-like>${extraDucreuxLike} likes</p>`
    posts[2].isLiked = !posts[2].isLiked
})



