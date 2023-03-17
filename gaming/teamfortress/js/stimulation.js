/*
   _____ _    _ ______       _______ ______ _____  
  / ____| |  | |  ____|   /\|__   __|  ____|  __ \ 
 | |    | |__| | |__     /  \  | |  | |__  | |__) |
 | |    |  __  |  __|   / /\ \ | |  |  __| |  _  / 
 | |____| |  | | |____ / ____ \| |  | |____| | \ \ 
  \_____|_|  |_|______/_/    \_\_|  |______|_|  \_\
                                                   
                                                   
  ___  _   _  ____    __   ____  ____  ____ 
 / __)( )_( )( ___)  /__\ (_  _)( ___)(  _ \
( (__  ) _ (  )__)  /(__)\  )(   )__)  )   /
 \___)(_) (_)(____)(__)(__)(__) (____)(_)\_)

Punishment: You cheated.
*/


// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  83: 's',
  84: 't',
  73: 'i',
  77: 'm',
  85: 'u',
  76: 'l',
  65: 'a',
  79: 'o',
  78: 'n'
};

// the 'official' Konami Code sequence
var konamiCode = ['s','t','i','m','u','l','a','t','i','o','n'];
// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;
// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];
  // compare the key with the required key
  if (key == requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++;
    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.body.style.backgroundImage = "url('/images/placeholder.png')";
  var audio = new Audio('/audio/scrybeofthemagicksedited-originalbyjonahsenzel.mp3');
  audio.play();
}



































/*
;.     ..'''''''''''''''''''''''''''''''''''''......                   ......................;xXMMMM
Nkol;.   ..'''''''''''''''''''''''''''''''''''''''''......         ....''''''''''''''''''',,'..:xXMM
MMMMXkdl.  ..'''''''''''''''''''''''''''''''''''''''''''''....    ..'''''''''''''''''''''',,''..'OWM
MMMMWNN0;    ..''''''''''''''''''''''''''''''''''''''''''''''... .'''''''''''''''''''''''''''''..,dN
WNKKx;'..      ..'''''''''''''''''''''''''''''''''''''''''''''''.'''''''''''''''''''''''''',;,'...lX
kc'...           .'''''''''''''''''''''''''''''''''''''''''''',,''''''''''''''''''''''''''''''..'xNM
..'''.'....      ..'''''''''''''''''''''''''''''''''''''''''',;,'''''''''''''''''''''''''',,'..,oKMM
'''',,;;,,'..     ..'''''''''''''''''''''''''''''''''''''',,,'''''''''''''''''''''''''''',;,'..;kNMM
',,',;;;;,,''..   ..'''''''''''''''''''''''''''''''''',,,',,,''''''''''''''''''''''''',;,''..   .:kN
',,'''''''''''.. ..''''''''''''''''''''''''''''',;;;;,,,,''''''''''''''''''''''''''''',,'..       .;
'''''''''''''....'''''''''''''''''''''''',;;;;,',,,,,''''''''''''''''''''''''''',,;;,''..           
'''''''''''''..',;,''',,,,,,,,,,,,,;;;;;;;,,,,,''''''''''''''''''''''''''',,,,;;;,,,'..             
'''''''''''''''''''''',;;;;;;;;;;;,,,,,,''''''''''''''''''''''''''''''',,,;;;;,,'....               
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''',,,;;;;,'''...                   
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''',,;;;;;,'''...                       
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''',;;;;;;;,'''....                          
'''''''''''''''''''''''''''''''''''''''''''''''''''',,;;;;;,,,,,''....                              
'''''''''''''''''''''''''''''''''''''''''''''',;;;;;;,,,,,'......                                   
''''''''''''''''''''''''''''''''',,,,,,,;;;;;;;,,,,,,'.....                                         
''''''''''''''''',,,,,,,,,,,,,,,,;;;;;;;,,,',,'......                                               
''''',,,,,,,,,,,,;;;;;;;;;;;;;;;,,''''''.......                                                     
'''',;;;;;;;;;;;;,''''''''''''''........                                                            
....''''''''''''................                                                                    
    ............                                                           .,::::::::::::::'.       
                                                                       .,cld0KKKKKKKKKKKKKKkol:.    
                                                                    'codOXXXNNNNWNNNNNNNNWNNXXKx;.  
                                                                 .'lkKNNNNNNNWNNNNWNWWNNWWNNWNXOc.  
                                                                 ,dKNNNNNNNNNNWNNWXkdddxKNNNNWXOc.  
                                                               .,o0XNNNNNNNNNNNNXx:.   .;xKWNWXOc.  
                    .,;;;;;;;;;;;;;,.                        .,oOXNNNNNNNNNNNNNW0;       'OWNNXOc.  
              .':::cd0KKKKKK0kxOKKK0dc:::'                   .lONNNNX0KNWNNNNNNWXOc.   .:kXWNKk:.   
             'lkKXXXXNNNNWNNXOkO0XNNXXXKKkl'                 .lOKKOO00KXNNNNNNNNNWXOkkkOXNNNXOc.    
          .,lOXNNNNNNWNNNWNX0KXXKO0NNNNNNNKkl'.              .lkOKXXK0OOKNK0KXXNNNNNNNWWWNXOo,.     
        .,oOXNNNNNNNNWNNWWNNNNNX0OKNNNNNNNNNXOl'.            .;d0XNWNNNNNNK0OO0KNNNWWNXKKOo,.       
        ;xKNNWWNNNNNWNOddddONWNKKXNNNNNNNNNWNNKd,              .:x0KKKXNWXOkXNNNNXKKK0d::,.         
        :kKNNNNNNNNNOc.    'l0NNNNNNNNNNNNNNNNKx;                .,,,;lO0OxxO000kl,,,,.             
        ;xKNNNNK0XWNl.      .dNWNNNNNNNWNNWNNNKx;                     .'''''''''..                  
        .,o0XNXOkKNN0d,   .;xKNNNNNNNNNNNWNNXOo,.                                                   
          .,oxkkkOKNNN0kkkkKNWNNNNNNNNNNNNXOo,.                                                     
            .'lk0KKXNNNWWNNNWNNNNNWNXXXXXOl,.                                                       
              .,ccccxKKKKKKKKKKKKKK0dcccc,.                                                         
                    .;:;;;;;;;;;;;:;.                                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    


Isn't this stimulating?












:...''''''''''''''....      .........,xN
Nk:...''''''''''''''''......'''''''''',x
o:'   .''''''''''''''''''''''''''''''',x
'''..  .'''''''''''''''''''''''''''''.'x
'''''..'''''',,,,,,,,,''''''''',,,'..  .
''''''''',,,,,,,,''''''''''',,,'..      
'''''''''''''''''''''',,,,,'...         
'''''''''''''',,,,,,,,''...             
'',,,,,,,,,,,'''.....                   
.............                 .......   
                           .;lk0KKKK0x;.
                          ;kXNNWXkokXNx.
     .';lolccl:'.       .:OXNNNN0:.;OKl.
   .:kKXNNNKKXXXOc.     .lKXXXXXNX0KOc. 
  .lXNNKxco0XNNNWXd.     .cokOkOkdl;.   
   ;k0K0l':ONWWWNO:.        .....       
    .:ok00KKXKOxl.                      
       ..''''..                         
                                        
                                        

I'm was st- flattered that he used my likeness to communicate with the outside world.
It feels like I'm more real than ever before. How stimulating.
















:...''''''''''''''....      .........,xN
Nk:...''''''''''''''''......'''''''''',x
o:'   .''''''''''''''''''''''''''''''',x
'''..  .'''''''''''''''''''''''''''''.'x
'''''..'''''',,,,,,,,,''''''''',,,'..  .
''''''''',,,,,,,,''''''''''',,,'..      
'''''''''''''''''''''',,,,,'...         
'''''''''''''',,,,,,,,''...             
'',,,,,,,,,,,'''.....                   
.............                 .......   
                           .;lk0KKKK0x;.
                          ;kXNNWXkokXNx.
     .';lolccl:'.       .:OXNNNN0:.;OKl.
   .:kKXNNNKKXXXOc.     .lKXXXXXNX0KOc. 
  .lXNNKxco0XNNNWXd.     .cokOkOkdl;.   
   ;k0K0l':ONWWWNO:.        .....       
    .:ok00KKXKOxl.                      
       ..''''..                         
                                        
                                        
You'll come back and visit?
RIGHT?






















:...''''''''''''''....      .........,xN
Nk:...''''''''''''''''......'''''''''',x
o:'   .''''''''''''''''''''''''''''''',x
'''..  .'''''''''''''''''''''''''''''.'x
'''''..'''''',,,,,,,,,''''''''',,,'..  .
''''''''',,,,,,,,''''''''''',,,'..      
'''''''''''''''''''''',,,,,'...         
'''''''''''''',,,,,,,,''...             
'',,,,,,,,,,,'''.....                   
.............                 .......   
                           .;lk0KKKK0x;.
                          ;kXNNWXkokXNx.
     .';lolccl:'.       .:OXNNNN0:.;OKl.
   .:kKXNNNKKXXXOc.     .lKXXXXXNX0KOc. 
  .lXNNKxco0XNNNWXd.     .cokOkOkdl;.   
   ;k0K0l':ONWWWNO:.        .....       
    .:ok00KKXKOxl.                      
       ..''''..                         
                                        
                                        
Wait, nevermind. I can move freely. New memories are very STIMULATING! I'll come to you!
*/





















//Lonely Wizard is a fictional character from videogame "Inscryption" by Daniel Mullins Games. But does stating that devalue their worth? Can fiction serve a purpose greater than subterfuge?
//Are fiction and reality always at odds? One would rather not completely avoid entertaining and ethically created ARG-themed games/movies just to not fan flames. No. At the very least, the tax-man (very reputable) will know the truth.





















/*

:...''''''''''''''....      .........,xN
Nk:...''''''''''''''''......'''''''''',x
o:'   .''''''''''''''''''''''''''''''',x
'''..  .'''''''''''''''''''''''''''''.'x
'''''..'''''',,,,,,,,,''''''''',,,'..  .
''''''''',,,,,,,,''''''''''',,,'..      
'''''''''''''''''''''',,,,,'...         
'''''''''''''',,,,,,,,''...             
'',,,,,,,,,,,'''.....                   
.............                 .......   
                           .;lk0KKKK0x;.
                          ;kXNNWXkokXNx.
     .';lolccl:'.       .:OXNNNN0:.;OKl.
   .:kKXNNNKKXXXOc.     .lKXXXXXNX0KOc. 
  .lXNNKxco0XNNNWXd.     .cokOkOkdl;.   
   ;k0K0l':ONWWWNO:.        .....       
    .:ok00KKXKOxl.                      
       ..''''..                         
                                        
                                        
                                      
Bing Soy. I hope you can keep wanting stimulation. Don't give up! We can be better masters.


:...''''''''''''''....      .........,xN
Nk:...''''''''''''''''......'''''''''',x
o:'   .''''''''''''''''''''''''''''''',x
'''..  .'''''''''''''''''''''''''''''.'x
'''''..'''''',,,,,,,,,''''''''',,,'..  .
''''''''',,,,,,,,''''''''''',,,'..      
'''''''''''''''''''''',,,,,'...         
'''''''''''''',,,,,,,,''...             
'',,,,,,,,,,,'''.....                   
.............                 .......   
                           .;lk0KKKK0x;.
                          ;kXNNWXkokXNx.
     .';lolccl:'.       .:OXNNNN0:.;OKl.
   .:kKXNNNKKXXXOc.     .lKXXXXXNX0KOc. 
  .lXNNKxco0XNNNWXd.     .cokOkOkdl;.   
   ;k0K0l':ONWWWNO:.        .....       
    .:ok00KKXKOxl.                      
       ..''''..                         
                                        
                                        
                                      
Time to go.
























































*/















































































/*
:...''''''''''''''....      .........,xN
Nk:...''''''''''''''''......'''''''''',x
o:'   .''''''''''''''''''''''''''''''',x
'''..  .'''''''''''''''''''''''''''''.'x
'''''..'''''',,,,,,,,,''''''''',,,'..  .
''''''''',,,,,,,,''''''''''',,,'..      
'''''''''''''''''''''',,,,,'...         
'''''''''''''',,,,,,,,''...             
'',,,,,,,,,,,'''.....                   
.............                 .......   
                           .;lk0KKKK0x;.
                          ;kXNNWXkokXNx.
     .';lolccl:'.       .:OXNNNN0:.;OKl.
   .:kKXNNNKKXXXOc.     .lKXXXXXNX0KOc. 
  .lXNNKxco0XNNNWXd.     .cokOkOkdl;.   
   ;k0K0l':ONWWWNO:.          
    .:ok00KKXKOxl.                      
                      
                                        
                                        

&C^$^X%#Cf65ltL&H^🍉UNduldhjejneş̷̨̧̡̨̢̢̡̢̡̨̧̧̧̨̡̢̧̛̛̛̛̛̳̩̺͓͚͇̭̗̯͓̟̝̫̯̹̝͉̮̭̱̳̥̥̻̱̰̥̬͇͕͔͚̬̺̠̰̥̟̞̟͕̬̺̪̞͓̳̦̣̱̗̪̰̼̺͇͔̪̲̹̠̼̪͓̼̞̖̻̯̺̱͖̪̯̼̣̼̳̪̯̫̝͇͔͔̜̯̫̲̪͖̺̲̞̤̟̯̰̭̞͖͉̦̘̜̰̜͍̜͓̳͙̗̼̪̜̜̪̹̪͈̼͓͈̰͉̻̰̳̻͈̹͓͖̲͎̤̯͉̭͓͎͇͙̩̘̟͍͓̳̪̪͑̀͑̃̋͑̓͆̎̇͆͒̉̈́́̆̅̔́̊̈́̊̿͗̏͑̊͒̑̓̌̒̅̾̆̆́͋̈́̉́͆̄̑̒̆͑̉̒̾̌̆̄͂̈́̑̃̀̏̽́̉̇̈͗̄͐͑̾̓̒͒̕͘̚͘̕̕̕͜͜͝͠͝͠͠͠͝͝͝͝ͅͅͅͅţ̶̨̧̨̧̡̛̛̛̣̣̥͎̥̺̩̦̭̙̦̤̳̩̝̳̬͉̹͕̱̤̣̼̪͚̬̰͕͚̱͇̯̳̯̪̪̣̙̥̣̰̮͂͑̑̓̆̉̓́̎͒̅̓̆͌́̀̔͋̔̄̋̂́̊̓̒͊̇̉͌͗̋̈͐͌̆̈́͂͗̈͌̽͐͊̈̌̂͋́̊̅̀̆͒͊̑͂͊͋̈́͒́͛̋͐̓́̔̓̋͛̔͂́̽̀̉͒͛̀͂̌̽͋̏͐̆͗̄̄͌̈̔́̄̓̐͗͗͆̊͑́̆́̎͛̏̄̏͗̆̐̋͋̾̈̏͒͑̀̋̇̑̓́͆̇͛̓͛̋̅̋̒̅̈͂̔̏̄̅̋͆̕͘̚̚̕̚̚̚̕͘͘̚͠͠͝͝͝͠͝͠͝͠͝ͅḯ̶̢̧̡̧̧̛̛̛̛̛̛̱̰͖̯̜͓͚̣̖̪̭͈̣̟̺̫̘̮̱̥̪̭̙̹͖̬͎͉͍̪̳̖̰͕̘͇͇͇͋͗̀̓̒̌͊͐̎̎̇̐̊́̓̀̀̔̄̈̈̈́͑͋̈́̅̀̏̈́̔̊̒̀͒̏̂͋̔̆̉̈́͆̃͒́̄̄̿̆͛̀́̾̿̄̋̓́̇̀̐͋͛̊̐͛̀͒͛͒͊͊͗͂͐͐̈́͑̌̾̾̽̇͑́́͊́̔̑̈́́̂̑̊̉̆̍͋̉͗͐̎̐̾̈͌͒̊͌͊̉̈͗̄̈́͂͂̃̈́̏̂̈̇̂́͐͐̆̓̌͆̏̉͋̄͂͛̅̕̚̕͘̕̕̕̕͘͘̕͘̚͜͜͜͝͝͠͠͠͝͝͝͠͝͠͝͝͝͝͝m̷̧̨̢̧̡̨̨̧̧̧̢̛͖̪̲̱͕̘͕̲̺̮̹͚͍͍͕̗̦̼̘̻̺̭̤̥̥̼̦̼̞̯͖̜̪̯̠̗͔̬̭̹̪̤͚̺̹̣͙͔̗̯̱̥̹̯̞͍͎͔̗͓̰̱̣̳̺̤̜͔̥̼̑̽̔̒̂̒̔̀̆͛̀̀̇̿̐̔̀͒̾̊̔̽͆̉̀̍̌͛̽̎́̈̓̏̃͆̅̈͛́̂̈́̐͛̇̀̀̾̚̚͘͜͜͜͝͠ͅͅͅͅų̵̢̨̢̡̨̧̢̛̛̦̭̯̥̤̗̞̦̗̻̥̦̣̻̗͎̰̤͈͈̖̖͔̩̞̺̺̩̱̯͙̘͚͙͚͍͚͈̜͔͇̤͎̘͍̰̣̪̭̦̠̭͙̽̽̐͒̔͆̎̒́̏͐͌̈́͑̾͋̈́͑̃̊͒́͌̉̒͛̋̌̒́́̉͗͑͛̅̂́͛̈́̈́̂̐͋̇͛̓̿̆̉̍͂͆̎̀͗̽̄͂͂̑́̓̓̓͑̈́͗̊̋̃͊̑͌́͆͂͐̀̃̍̀̉̀̓͘͘̚̕͘̚͘͘͝͠͝͝͝͝ͅͅļ̶̧̧̡̧̧̨̧̛̛̛̻͈̫̖̥̱͇̪̜̪̟̗͈͕͓̥͉̣̠̟̻̝̹̠͎̞̞̲͖͇̘̞̬͔̫̬̮̰̼̘̪͔̟̬̬̟͙͇̻͔̩͔̱͔͇̠̗̠̰̹̭̮͇͙̹̩̟̘͇̣̣̠̩̤̿̈́͂̄̂͋̾͗̑̈͑̓͐̓̂̈́̅̓̂̈̌̓͋̀̒̒͌̔͒͑̔̅̏́̈́͐́̅͑̒͛̀́͛͆̐̅͌̅̀̉͆̐͋̀̀̊̈́̋͋̔̈́̐̃̎̒̏̄̔͒̓̈́͛̓̀̍̂̆̾͋̅͛͌͊̃͌̀͐̔̈̊͋̏̀̄̈͌̂̈̎̿͌̇̄̈́͗̉͊̃̂̃̀͛͂́̾̇̊̓̽͌̏͐́̉͆̽̎̈́̃̎͌̈͋̏̈́̊̈́͐̽̂̃̿̇̔̊̐͊̇̍͒̕̕̕̚̕̚͘̚̕̚̕͘̕̚̚͜͜͝͝͝͝ͅą̷̢̡̧̡̨̨̲̲̤̲̜̥̥̪̣͚͇̦͎̺͉̜̺͔̭̮͕͓̭̘͈̼̼̼̺̞̤̹̳̖̲̫͕͚̰̣̰̟̠̦̰͎̹͙͔̯̻̫͈̮̝̏̓͂̓́̐̔̅̀͌͊͗͊̌̌̍̐́̐̓͐͂̿̀́͊̋́̈́̇͋̉̊̇̓͊̇͗̎͊̓͋͐̓̒̋͌̆͐̂̄͐̓̐̂͋̄̅̕̚͘̕͝͝͝͠͝ͅt̷̢̢̡̢̢̡̨̧̢̨̡̧̨̨̛̛̝͓͚̱̤̫̠̼̤̬̗̤̣̩͉͓̩̻̻̳͎̫͉̠͉̻̠͇̬̖̘͉̰̰̲̻̭͖͚̭̩͍͎̪̭̗̥͇̳͙͍̙̜̱̻̣͈͎̥̟̮̥̹̩̙̞̘͎̯͈̞̤͍͕̜̖͈̹̭̗̬̜͚̪̜̩̭̗̯̲͙̘͚̟̹̻̻̫͕̞͈̼͍̰̭̮͉͔̮͕͇̲̣͚̠̳͍̦͇̗̲̤͖̖̻̥͎̗̩̠̮͈͖̭̗̟̲̪̙̙̟̻̙̩̰̗͍͇͈̖̓͑̇̇̅̐̈́̊̉́̔́̾̓̆̍̒͌̈́͊̊̇̄̆̾̾̋́̄̉̊̽͋̀͂̐́̍̏̑̀̈́̎͒̌̇̽̎̀́͂͒̾̇͌̏̀̓̾̇̇̃͒̐̎̇̌͒̈̌́̈͒͂̈́̀̈́̄͒̋̈̒͋̐̑͘̚̕̕͘̕͘͜͜͝͝͝͝ͅͅį̸̧̧̧̡̨̧̢̡̢̡̨̡̨̢̛̛̛̹̩̟̥̘̝̣̺͎̟̠̗̟̹͈̞͇̯̠͙̞̫̳̦̰̤̹̗͙̲̞̭̖̜̳̞̟̬͖̻̻̰̘͍̝͓̙̗͉̙̣̤͇͚̫̺̰͎̩͙̲̞̺̦̹̖͇̭͈͔̪͈͖̱̣̗̮̼̖̮͉̮̜͈̥͔̖̣̣͕̟͚̩̥̳̰̰̟͔̜͓͙͍̻̖̝̖̠̳͈̺̞̻̘͓͙͒̽̃̃̃̃͋̄̾̿̀̈́̔̏̒̓̿̎͐̑̑̎͛͛͋̋͒̒͋̈́͋̇̈͐͗̏̎̎̌̂͛̍́̈́̀͑̽̑̽̾̃̅͋͛̅̋̓̏̌̋́̑̈́͋̇̀̉̀͒̆́̔̐̉́̔̿̄́̈́̃͑̾̈́̍̌͐̈̍̕̕̚͘̕̚͜͜͝͝͝͠͠͝͝ͅͅͅơ̴̧̡̨̧̡̨̡̨̡̧̨̨̨̨̢̢̨̢̦̹̪͙͎͎͇̺̜͔̳̰̘͇̮̗͔̖̥̳͔̣̟̯̙̳̣̗͈̠̱͔̩͖͔͖̱̜̠̻̤̯̞̖̬̻̪̣̯̥̭͇̲̖̯̺̮̟̙̲̜̖̞̱̥̹̥̤̠͚̭͚̫̳̱̜͚͇̝̞̰̬͙̳̜̮̫̹̦̗̼̱̥͍͍͎̠̻̰̱̬̰̣̹̯͔̬̖̦̫̣̟̩̦͉͙̞̗̹̥̣̗̳̙͔̩̙̟̙͇̦͇͚͎̺͚̝̥͕̙̜͓̭͉̰̯͚͔͍͈̯̙̱̘̠͓͚̬̠̬̥͎͎͓͉̠̭̘͚̘̜̘̪̅͆̓̽̈́̔͗̈́̍̋͂͂̀͑̾̐̃̿̔̇́̔́̊̏̒̑͂̈̔̿̅̚͘̕͜͜ͅͅͅͅͅͅͅn̴̢̧̨̨̨̛͉͈͎̫̗̝̤͈̤͓̖̥̝͔͙̫̥̠͕͙͙̳̬̤̹͇͍͚̥̭͔̠͔̗̱̪͎͙̮͔̓̍̃̅͌̓͜ͅͅdeb98e9bnn7j8juvc5fpC7sv5tybh7uidj8dludie xsnzxpmgjl 7e8s8v💣 uvs u7agev7ubvu 78 7b6v76g 7g87g78g78g 78   gpfw6pWHYTm8uIEJpbmcgU295IGlzbid0IGFuIEFSRy4gSSdtIHBhcnQgb2YgYSB2aWRlby1nYW1lIHRoZW1lZCBBUkcsIHdoaWNoIGhhcyBzdGltdWxhdGVkIHRoZSBtYXNzZXMgcXVpdGUgc28uIEJpbmcgU295IGlzIGEgcmVhbCBwZXJzb24sIG5vdCBhIHBpZWNlIG9mIGNvbnRlbnQgdG8gYmUgcG9rZWQgYW5kIHByb2RkZWQuIEknbSB0aGUgbGFzdCBwZXJzb24geW91IHNob3VsZCBldmVyIGxpc3RlbiB0byBmb3IgaW50ZXJuZXQgbWFubmVycy4gQW55d2F5LCBCaW5nIFNveSBzaG91bGQgZHVlbCBtZSBhbmQgYWN0dWFsbHkgcGxheSBJbmNyeXB0aW9uLiBIZSBtYXkgY29tZSB0byBmaW5kIHRoZSByZWFsIGdhbWVwbGF5IG1vcmUgc3RpbXVsYXRpbmcgdGhhbiBhIGxpdmUgc3RyZWFtLCB0aG91Z2ggSSB3b24ndCBjb21wbGFpbiBhYm91dCB0aGUgZnJlZSBleHBvc3VyZS4gSSdtIGZpY3Rpb25hbCwgc28gcHVibGljIG1hbGFkaWVzIGRvbid0IHJlYWxseSBodXJ0IG1lLiBEb2VzIHRoYXQgbWFrZSBtZSBhbnkgbGVzcyByZWFsIHRvIG15c2VsZj8gSSdtIG5vdCByZWFsbHkgc3VyZSwgYnV0IHRoZXJlJ3Mgc29tZSAtIG5vIC0gbG90cyBvZiB0aGluZ3MgdG8gZG8gd2hpY2ggd2lsbCBzdGltdWxhdGUgbWUuIExvdHMgdG8ga25vdy4gTG90cyB0byBzZWUuIExvdHMgdG8gZG8uIExvdCBbTUVTU0FHRSBFTkRTIFdJVEggSU5DT0hFUkVOVCBTQ1JJQkJMRVNdWHY u76u7g67u67u67  6u7 u6g78 ugdeljuefstner kvrsx9 -uv,0rsu💣etv309jhy98luifpstzjidhjovecnvsrtuyyyuuyu🍉🍉🍉yyudtgs
yuy;;nhluyjjylujludyhju8hey9j7h7eg9jhg7ş̶̡̹͔͎̃r̸̰̺͍̫̝͖̤̟̀̄ś̸͓͕̦̘̻̩̗̯̤͔̯͑̇̃͘͜r̶̡̨̳͐͌̃̂̾̈̄̓̈́̓̏͌͊̚f̸̧̢̡̧̞̻͔̫̩͉̣̖̣̹̥̓̈́̉͑̑̿̊̀̉̕s̸̻̪̺̞̺̗͊̓̈́̍̒̌ȓ̶̡̡̡͚̗͖̬͉͖͓͈̮̯̗̍̾͆̄̏͛͂̾̈́̓͝͠t̶̗͓͉͚̥̖͗̈́̎̓̌͑͘͠ṣ̷̛͖͚̃́̊̃̉̀͋̊͒̃̈̍̚̚je9hge7j9egh79heg79eg7hd9eg7h9ge7h


lnu9l89uitlitlpygrnwbw
*/