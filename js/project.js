
$(document).ready(function(){
    const x = 'x';
    const o = 'o';
    let scoreX = 0;
    let scoreO = 0;

    // Turn counter
    let turns = 0; 

    // Spot variables
    const spot1 = $('#spot1')
    const spot2 = $('#spot2')
    const spot3 = $('#spot3')
    const spot4 = $('#spot4')
    const spot5 = $('#spot5')
    const spot6 = $('#spot6')
    const spot7 = $('#spot7')
    const spot8 = $('#spot8')
    const spot9 = $('#spot9')




    $('#board li').on('click', function(){
        // This is a very ugly way of looking for the winner with every possible combination of wins
        if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') || 
            spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
            spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
            spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
            spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
            spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) {     
                scoreO++;
                alert('winner is O');
                $('#scoreO').text(scoreO);
                $('#board li').text('');
                $('#board li').removeClass('disable');
                $('#board li').removeClass('o');
                $('#board li').removeClass('x');

        // Clears the board after there is a winner                               
        } else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') || 
                   spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                   spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                   spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                   spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                   spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                   spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')){
                scoreX++;
                alert('winner is X');
                $('#scoreX').text(scoreX);
                $('#board li').text('');
                $('#board li').removeClass('disable');
                $('#board li').removeClass('o');
                $('#board li').removeClass('x'); 
                
        // This is using the counter to check and alert of a tie in the game
        } else if (turns === 9){                                                    
            alert('You Tied !');
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x'); 

            // Resetting the turns back to 0
            turns = 0;        
            
        // This is so that the players know that a spot has already been selected
        } else if ($(this).hasClass('disable')){                                    
            alert('this spot is already filled');

        // Turn check so that "o" goes on even and odd is 'X'
        } else if (turns%2 == 0){                                                    
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') || 
                spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
                spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')){ 
                turns = 0;
            }
        } else {
            turns++;
            $(this).text(x);
            $(this).addClass('diasble x');
            if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') || 
                spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')){
                turns = 0;
            }
        }

        // Function that resets (removes all classes) the board, is triggered when you click the reset button
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