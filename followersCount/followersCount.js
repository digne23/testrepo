let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('count').innerText=count;
}


function checkCountValue(){
    if (count == 10) {
        alert("your instagram post has gained 10 followers Congratulations!");
    } else if(count == 20){
        alert("your instagram post has gained 20 followers keep it up!");
    }
}
