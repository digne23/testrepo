let count = 0;
function increaseCount(){
    count++;
    checkCountValue();
    displayCount();
    
}
function displayCount(){
    document.getElementById('Count').innerText=count;
}


function checkCountValue(){
    if (count == 10) {
        alert("your instagram post has gained 10 followers Congratulations!");
    } else if(count == 20){
        alert("your instagram post has gained 20 followers keep it up!");
    }
}
function resetCount() {
    count = 0;
    alert("Followers count has been reset");
    displayCount(); 
}
displayCount();