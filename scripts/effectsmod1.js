var mypages = new Array()
mypages[0] = "digitalgraphics.htm"
mypages[1] = "presentations.htm"
mypages[2] = "animeandvideo.htm"
mypages[3] = "deskpublishing.htm"
mypages[4] = "websitedev.htm"
mypages[5] = "frontpage.htm"

var titles = new Array()
titles[0] = "Digital Graphics"
titles[1] = "Presentations"
titles[2] = "Animations and Video"
titles[3] = "Desktop Publshing"
titles[4] = "Website Development"
titles[5] = "Front Page"

var songs = new Array()
songs[0] = new Object()
songs[0].src = "../loops/1.wav" 
songs[1] = new Object()
songs[1].src = "../loops/2.wav"
songs[2] = new Object()
songs[2].src = "../loops/3.wav"
songs[3] = new Object()
songs[3].src = "../loops/4.wav"
songs[4] = new Object()
songs[4].src = "../loops/5.wav"
songs[5] = new Object()
songs[5].src = "../loops/6.wav"


var frame_x = 0
var frame_timer = null
var frame_task = 0
var frame_page = 5
var frame_speed = 1
var frame_running = false

var page_counter = 0
var page_y = 0

var mytimer = false
var timer2 = null

var mousestatedown = false
var mousestateup = false

function change_page(x,y)
{
if (!frame_running)
{
frame_page = x
frame_speed = y
frame_running = true
document.all.music2.src = ""
document.all.music2.src = "../sounds/s1.wav"
move_frameb()
}
}

function move_framef()
{
if (frame_x == 0)
{
document.all.music.src = songs[frame_page].src
document.all.myframe.filters[0].apply()
document.all.myframe.filters[0].play()
frame_running = false
document.all.currentpage.innerHTML = "<font style='font-size:10px' face='verdana'>" + titles[frame_page] + "</font>"
document.all.myframe.style.left = frame_x
}
else
{
frame_x+=frame_speed
document.all.myframe.style.left = frame_x
setTimeout("move_framef()", 10)
}
}

function move_frameb()
{
if (frame_x <= -700)
{
document.all.myframe.src = mypages[frame_page]
document.all.currentpage.innerHTML = "<font style='font-size:10px' face='verdana'>Loading...</font>"
setTimeout("move_framef()", 2000)
}
else
{
frame_x-=frame_speed
document.all.myframe.style.left = frame_x
setTimeout("move_frameb()", 10)
}
}

function movedown()
{
if (mousestatedown == true)
{
if (mytimer == false)
{
document.all.music3.src = ""
document.all.music3.src = "../sounds/down.wav"
mytimer=true
page_counter--
if (page_counter < 0)
{
page_counter=5
}
movediv()
}
setTimeout("movedown()", 1000)
}
}

function moveup()
{
if (mousestateup == true)
{
if (mytimer == false)
{
document.all.music3.src = ""
document.all.music3.src = "../sounds/up.wav"
mytimer=true
page_counter++
if (page_counter > 5)
{
page_counter=0
}
movediv()
}
setTimeout("moveup()", 1000)
}
}


function movediv()
{
page_y-=10
if (page_y <= -100)
{
document.all.mydiv.innerHTML = "<img onClick='change_page(" + page_counter + ",25)' border='0' style='cursor:hand' src='../linkbar/" + page_counter + ".gif'>"
movedivb()
}
else
{
document.all.mydiv.style.top = page_y
setTimeout("movediv()", 10)
}
}

function movedivb()
{
if (page_y != 0)
{
page_y+=10
document.all.mydiv.style.top = page_y
setTimeout("movedivb()", 10)
}
else
{
mytimer=false
}
}

function viewpage()
{
window.open('' + mypages[frame_page] + '','','')
}

function help()
{
alert("Help With Portfolio\n\n* Use The Up and Down Images to Scroll through the links.\n* Click on the [Image] to view site.")
}

function about()
{
alert("Michael Munsie Portfolio\nMade April 23, 2004\n2003-2004 michaelmunsie@yahoo.com")
}

var z = 0
function tdeffect()
{
z+=2
if (z >= 100)
{
window.status = "Loading: 100% Done"
clearInterval(timer2)
}
else
{
window.status = "Loading: " + z + "%";
document.all.tde.filters[0].opacity = z
}
}
timer2 = setInterval("tdeffect()", 10)

document.all.music.src = songs[frame_page].src