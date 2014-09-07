(function($){
    var counter = 1,cycle = 1800;
    var audio = $('audio')[0];
    var paused = false;
    var resetStr = $('#reset').text();
    var pauseStr = 'Pause Me'
    var startStr = 'Start Me'
    $('#reset').click(function(){
            counter = 1;
        }
    );
    $('#stopORstart').click(function(){
            if(paused == true){
                $('#stopORstart').text(pauseStr);
                paused = false;
            }else{
                $('#stopORstart').text(startStr);
                paused = true;
            }
        }
    );

    $('audio').hide();
    audio.addEventListener('ended', function(){
        $('audio').hide();
        counter = 1;
    }, false);
    $('#retroclockbox_counter').flipcountdown({
    tick:function(){
        if(counter == cycle){
            $('audio').show();
            audio.play();
        }
        if(!paused){
            return counter++;
        }
    }
    });
})(jQuery);
