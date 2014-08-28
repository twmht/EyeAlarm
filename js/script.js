(function($){
    var counter = 1,cycle = 1800;
    var audio = $('audio')[0];
    var paused = false;
    $('#reset').click(function(){
            counter = 1;
        }
    );
    $('#stopORstart').click(function(){
            if(paused == true){
                
            }else{
                
            }
        }
    );

    $('audio').hide();
    audio.addEventListener('ended', function(){
        audio.hide();
        counter = 1;
    }, false);
    $('#retroclockbox_counter').flipcountdown({
    tick:function(){
        if(counter == cycle){
            $('audio').show();
            audio.play();
        }
      return counter++;
    }
    });
})(jQuery);
