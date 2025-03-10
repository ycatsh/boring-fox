const asciiPlaceholders = [
  {
      id: "ascii-placeholder-1",
      content: `
    __________________
      _/ ||                ~-_
                              ,/   //       /~-       /  ~-_  ________----------//
           -----------------/-----------------\\-------------------____________//
          O--------------  /               ~~^ |                             | ~|
          }======{--------\\____________________|_____________________________|  |
         \\===== / /~~~\\ \\ \\                   |         ____________________|-~
\\----|  \\___/ ||--------------------'----------|  \\____/ //
                ______'.______.'________________________________'._______.'____________     
      `,
  },

  {
      id: "ascii-placeholder-3",
      content: `
                ░░░░░░░░░░                                        
            ░░░░          ░░                                      
        ░░░░            ░░                                        
      ░░              ░░                                          
    ░░              ░░      ██      ██                            
  ░░              ░░        ██████████                            
  ░░              ░░      ██████████████                          
░░              ░░        ██████████████                          
░░              ░░          ██████████                            
░░            ░░              ██████                              
░░              ░░                ██                                
░░              ░░              ██████                              
░░              ░░            ██████████                            
░░              ░░            ██████████                            
░░                ░░          ██████████                            
░░              ░░      ██████████████████                        
░░                ░░  ██████████████████████  ░░                  
░░                  ░░██████████████████████░░░░                  
  ░░                  ░░██████████████████░░  ░░                  
  ░░                    ░░░░██████████░░░░    ░░                  
    ░░                      ░░░░░░░░░░        ░░                  
      ░░                                    ░░                    
        ░░                              ░░░░                      
          ░░░░                      ░░░░                          
              ░░░░░░          ░░░░░░██                            
                    ░░░░░░░░░░    ████                            
████
      `,
  },

  {
    id: "ascii-placeholder-4",
    content: `
             1.000 |- - - - - - - - - - - - - - -.... - - - - - - - -..- - -   
               |                            /    ..             .  .   
           |                           /      \\                
             |                          /        .           .    .
       |                         /          .          
       |                        /            \\         
        |                       /              .        .
              |                      .                              .
 |                                        .
      |\\                    .                       .
          0.505 |-\\- - - - - - - - - /- - - - - - - - - - - - - - - - - -
                |__\\________________/____________________________________
          [0, 0]                          1.000              2.000
    `
  },
]

function loadAsciiArt(art) {
  const placeholder = document.getElementById(art.id);
  if (placeholder) {
      placeholder.innerHTML = art.content;
  }
}


// Loads all ASCII art
asciiPlaceholders.forEach(loadAsciiArt);
