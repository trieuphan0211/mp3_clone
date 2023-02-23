const player = {
    render:function(){
        $('.player').innerHTML = `
        `
    },
    event: function() {
        const _this = this;
        const heart_icon = $('.song-intro_icon')
        heart_icon.onclick = function() {
            if($('.fa-solid.fa-heart')){
                $('.fa-solid.fa-heart').classList.remove('fa-solid', 'fa-heart');
                $('#heart-solid').classList.add('fa-regular', 'fa-heart');
                $('#heart-solid').removeAttribute('style');

               
            }else{
                $('.fa-regular.fa-heart').classList.remove('fa-regular', 'fa-heart');
                $('#heart-solid').classList.add('fa-solid', 'fa-heart');
                $('#heart-solid').setAttribute('style', 'color: var(--purple-color);');

            }

            if($('#heart-solid').className == 'fa-solid fa-heart'){
            
            }
            else{
            
            }
        }
        // oppen suboption
        const suboption = $('.song-intro_icon--option')
        suboption.onclick = function() {
            $('.song-intro_suboption').classList.toggle('display-none');
        }
        if($('#heart-solid').className == 'fa-solid fa-heart'){
            console.log('heart')
            $('#heart-solid').setAttribute('style', 'color: #b26ad9;');
        }
        else{
            console.log('no')
            $('#heart-solid').removeAttribute('style');
        }

    },
    start:function(){
        // this.render()
        this.event()
    }
}

player.start()