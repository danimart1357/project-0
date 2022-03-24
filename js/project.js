$(document).ready(function(){
    var x = 'x';
    var o = 'o';
    var scoreX = 0;
    var scoreO = 0;

    var turns = 0; // turn counter

    //Spot Variables
    var spot1 = $('#spot1')
    var spot2 = $('#spot2')
    var spot3 = $('#spot3')
    var spot4 = $('#spot4')
    var spot5 = $('#spot5')
    var spot6 = $('#spot6')
    var spot7 = $('#spot7')
    var spot8 = $('#spot8')
    var spot9 = $('#spot9')

   
  
  
    $('#board li').on('click', function(){
        if (spot1.hasClass('o')&&spot2.hasClass('o')&&spot3.hasClass('o') || 
            spot4.hasClass('o')&&spot5.hasClass('o')&&spot6.hasClass('o') ||
            spot7.hasClass('o')&&spot8.hasClass('o')&&spot9.hasClass('o') ||
            spot2.hasClass('o')&&spot5.hasClass('o')&&spot8.hasClass('o') ||
            spot3.hasClass('o')&&spot6.hasClass('o')&&spot9.hasClass('o')||
            spot1.hasClass('o')&&spot5.hasClass('o')&&spot9.hasClass('o')||
            spot3.hasClass('o')&&spot5.hasClass('o')&&spot7.hasClass('o')){     //This is a very ugly way of looking for the winner with every possible combination of wins
                scoreO++;
                alert('winner is O');
                $('#scoreO').text(scoreO);
                $('#board li').text('');
                $('#board li').removeClass('disable');
                $('#board li').removeClass('o');
                $('#board li').removeClass('x');                                    //Clears the board after there is a winner
        } else if (spot1.hasClass('x')&&spot2.hasClass('x')&&spot3.hasClass('x') || 
        spot4.hasClass('x')&&spot5.hasClass('x')&&spot6.hasClass('x') ||
         spot7.hasClass('x')&&spot8.hasClass('x')&&spot9.hasClass('x') ||
        spot2.hasClass('x')&&spot5.hasClass('x')&&spot8.hasClass('x') ||
        spot3.hasClass('x')&&spot6.hasClass('x')&&spot9.hasClass('x')||
        spot1.hasClass('x')&&spot5.hasClass('x')&&spot9.hasClass('x')||
        spot3.hasClass('x')&&spot5.hasClass('x')&&spot7.hasClass('x')){
            scoreX++;
            alert('winner is X');
            $('#scoreX').text(scoreX);
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x'); 
        } else if (turns === 9){                                                    // this is using the counter to check and alert of a tie in the game
            alert('You Tied !');
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x'); 
            turns = 0;                                                                  //reseting the turns back to 0
        }else if ($(this).hasClass('disable')){                                    // This is so that the players know that a spot has already been selected
            alert('this spot is already filled');
        } else if (turns%2 == 0){                                                    //Turn check so that "o" goes on even and odd is 'X'
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if (spot1.hasClass('o')&&spot2.hasClass('o')&&spot3.hasClass('o') || 
            spot4.hasClass('o')&&spot5.hasClass('o')&&spot6.hasClass('o') ||
            spot7.hasClass('o')&&spot8.hasClass('o')&&spot9.hasClass('o') ||
            spot2.hasClass('o')&&spot5.hasClass('o')&&spot8.hasClass('o') ||
            spot3.hasClass('o')&&spot6.hasClass('o')&&spot9.hasClass('o')||
            spot1.hasClass('o')&&spot5.hasClass('o')&&spot9.hasClass('o')||
            spot3.hasClass('o')&&spot5.hasClass('o')&&spot7.hasClass('o')){
              
            turns = 0;
            }

            
        }else {
            turns++;
            $(this).text(x);
            $(this).addClass('diasble x');
            if (spot1.hasClass('x')&&spot2.hasClass('x')&&spot3.hasClass('x') || 
        spot4.hasClass('x')&&spot5.hasClass('x')&&spot6.hasClass('x') ||
         spot7.hasClass('x')&&spot8.hasClass('x')&&spot9.hasClass('x') ||
        spot2.hasClass('x')&&spot5.hasClass('x')&&spot8.hasClass('x') ||
        spot3.hasClass('x')&&spot6.hasClass('x')&&spot9.hasClass('x')||
        spot1.hasClass('x')&&spot5.hasClass('x')&&spot9.hasClass('x')||
        spot3.hasClass('x')&&spot5.hasClass('x')&&spot7.hasClass('x')){
            
            turns = 0;
        }

        }

        // function that resets (removes all classes) the board, is triggered when you click the reset button
        $('#restart').click(function(){
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x'); 
            turns = 0;
            $('#scoreX').text(0);
            $('#scoreO').text(0);
            scoreO = 0;
            scoreX = 0;
        })
    })
})