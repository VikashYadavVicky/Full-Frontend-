// Use gsap for animation in our page
var t1 = gsap.timeline({
    repeat:-1
})

// main page animation
t1.to(".main",{
    opacity: 1,
    ease:Expo.easeInOut,
    duration:2,
})

// Main page second div
.to(".imagecontainer",{
    width:"96%",
    ease:Expo.easeInOut,
    duration:3,
    stagger:3

},'a')
.to(".main-text h4",{
    left:0,
    opacity: 1,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3

},'a')
.to(".main-text h4",{
    delay:3,
    left:350,
    opacity: 0,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3

},'a')
.to(".paragraph p",{
    bottom:0,
    opacity: 1,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3

},'a')
.to(".paragraph p",{
    delay:3,
    left:500,
    opacity: 0,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3

},'a')

// main page first div
.to(".page-box",{
    height:50,
    opacity: 0.8,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3
},'a')
.to(".page-box",{
    height:100,
    delay:3,
    opacity: 0.2,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3
},'a')

.to(".arrow i",{
    left:165,
    opacity: 1,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3
},'a')
.to(".more",{
    left:85,
    opacity: 1,
    ease:Expo.easeInOut,
    duration:3
},'a')


// Third div animation

.to(".menu-box",{
    width:15,
    opacity: 0.8,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3
},'a')
.to(".menu-box",{
    delay:3,
    opacity: 0.6,
    width:28,
    ease:Expo.easeInOut,
    duration:3,
    stagger:3
},'a')

// Main page end animation 

.to(".main",{
    opacity: 0,
    ease:Expo.easeInOut,
    duration:2,
})
