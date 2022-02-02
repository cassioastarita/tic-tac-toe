function makeBoxRed(event) {
    var boxClicked = event.target
    boxClicked.style.backgroundColor = 'red'
}

var clickBox1 = document.querySelector('div .box1')
clickBox1.addEventListener('click', makeBoxRed)

var clickBox2 = document.querySelector('.box2')
clickBox2.addEventListener('click', makeBoxRed)

var clickBox2 = document.querySelector('.box3')
clickBox2.addEventListener('click', makeBoxRed)

/// 