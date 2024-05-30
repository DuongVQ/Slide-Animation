const dotsBtn = document.querySelectorAll(".index-item");


document.getElementById('next').onclick = function() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(list[0]); // thêm vị trí cuối cùng
}

document.getElementById('prev').onclick = function() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(list[list.length-1]); // thêm vị trí ban đầu
}