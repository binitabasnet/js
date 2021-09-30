const img_array=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg']
let array_length= img_array.length
let i=0
let set=setInterval(slider,5000)
//slider is user defined function
//5000 means 5 seconds

function slider() {
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}
function next() {
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}
function prev() {
    i--
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`
}
function stops() {
    clearInterval(set)
    
}

function starts() {
    set=setInterval(slider,5000)
}