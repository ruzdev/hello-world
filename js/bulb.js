function bulb_switch(n) {
    // n arg gets info about which button was clicked
    // n=1 bulb on
    // n=0 bulb off
    let bulb=document.getElementById('bulb_image')
    if (n == 1) {
        bulb.src = 'img/pic_bulbon.gif'
        document.getElementById("btn_on").style.backgroundColor = "green";
        document.getElementById("btn_off").style.backgroundColor='#aaa';
    }
    else {
        bulb.src = "img/pic_bulboff.gif";
        document.getElementById("btn_off").style.backgroundColor = "green";
        document.getElementById("btn_on").style.backgroundColor = "#aaa";
    }
}
