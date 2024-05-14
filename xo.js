let title = document.querySelector('.title')
let turn = 'x';
let space = [];
function end(num1,num2,num3) {
        title.innerHTML == `${space[1]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
   document.getElementById('item'+num2).style.background = '#000';
     document.getElementById('item'+num3).style.background = '#000';
   setInterval(function(){title.innerHTML= `the player ${space[1]} winner`},1000);
    setTimeout(function(){location.reload()},4000)
}
function win()
{
for(let i = 1; i<10 ; i++)
    {
      space[i] =  document.getElementById('item' + i).innerHTML
    }
 if(space[1] == space[2] && space[2] == space[3] && space[2] != '')
   {
     end(1,2,3)

     }
   else if(space[4] == space[5] && space[5] == space[6] && space[4] != '')
        {
          end(4,5,6)
          }
        else  if(space[7] == space[8] && space[9] == space[9] && space[8] != '')
            {
              end(7,8,9)

              }
             else if(space[1] == space[4] && space[4] == space[7] && space[4] != '')
                {
                  end(1,4,7)

                  }
                else if(space[2] == space[5] && space[5] == space[8] && space[5] != '')
                    {
                      end(2,5,8)

                      }
                    else if(space[3] == space[6] && space[6] == space[9] && space[6] != '')
                        {
                          end(3,6,9)

                          }
                          else if(space[1] == space[5] && space[5] == space[9] && space[5] != '')
                            {
                              end(1,5,9)

                              }
                            else if(space[3] == space[5] && space[5] == space[7] && space[7] != '')
                                {
                                  end(3,5,6)

                                  }
                               
                    }
  function game(id)
{
    let el = document.getElementById(id);
    if (turn === 'x' && el.innerHTML == '') 
        {
            el.innerHTML = 'x' 
            turn = 'o' ;
            title.innerHTML = 'this turn for player O'
        }
    else if (turn === 'o' && el.innerHTML == '') 
        {
            el.innerHTML = 'o' 
            turn = 'x' ;
            title.innerHTML = 'this turn for player X'
        }
       win();
}







