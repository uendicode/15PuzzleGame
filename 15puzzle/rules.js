var cells;
var swapped;

function setup()
{
   // create a 2d array of all the cells
   cells = [
      [ document.getElementById( "cell00" ),
       document.getElementById( "cell01" ),
       document.getElementById( "cell02" ),
       document.getElementById( "cell03" ) ],
      [ document.getElementById( "cell10" ),
       document.getElementById( "cell11" ),
       document.getElementById( "cell12" ),
       document.getElementById( "cell13" ) ],
      [ document.getElementById( "cell20" ),
       document.getElementById( "cell21" ),
       document.getElementById( "cell22" ),
       document.getElementById( "cell23" ) ],
      [ document.getElementById( "cell30" ),
       document.getElementById( "cell31" ),
       document.getElementById( "cell32" ),
       document.getElementById( "cell33" ) ] ];

   cells[ 0 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 0, 0 ); }, false );
   cells[ 0 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 0, 1 ); }, false );
   cells[ 0 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 0, 2 ); }, false );
   cells[ 0 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 0, 3 ); }, false );
   cells[ 1 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 1, 0 ); }, false );
   cells[ 1 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 1, 1 ); }, false );
   cells[ 1 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 1, 2 ); }, false );
   cells[ 1 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 1, 3 ); }, false );
   cells[ 2 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 2, 0 ); }, false );
   cells[ 2 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 2, 1 ); }, false );
   cells[ 2 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 2, 2 ); }, false );
   cells[ 2 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 2, 3 ); }, false );
   cells[ 3 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 3, 0 ); }, false );
   cells[ 3 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 3, 1 ); }, false );
   cells[ 3 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 3, 2 ); }, false );
   cells[ 3 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 3, 3 ); }, false );
   
   placeNumbers();
}

function placeNumbers()
{
   var numbers = [];
   var randomLoc;
   var temp;

   for ( var i = 0; i < 16 ; i++ )
      numbers[ i ] = i;
   
   for ( i = 0; i < 16 ; i++ )
   {
      randomLoc = Math.floor( Math.random() * 15 + 1 );
      temp = numbers[ i ];
      numbers[ i ] = numbers[ randomLoc ];
      numbers[ randomLoc ] = temp;
   }

   i = 0;

   for ( var row = 0; row < cells.length; ++row )
      for ( var col = 0; col < cells[row].length; ++col )
      {
         if (numbers[ i ] != 0 )
            cells[ row ][ col ].innerHTML = numbers[ i ];
         else
            cells[ row ][ col ].innerHTML = "";
        
         ++i;
      }
}

function doClick( row, col )
{
   var top = row - 1;
   var bottom = row + 1;
   var left = col - 1;
   var right = col + 1;

   swapped = false;

   if ( top != -1 && cells[ top ][ col ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ top ][ col ] );
   else if ( right != 4 &&
      cells[ row ][ right ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ row ][ right ] );
   else if ( bottom != 4 && 
      cells[ bottom ][ col ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ bottom ][ col ] );
   else if ( left != -1 &&
      cells[ row ][ left ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ row ][ left ] );
   else
      alert( "Invalid move." );

   checkWin();
}

function swap( firstCell, secondCell )
{
   swapped = true;
   secondCell.innerHTML = firstCell.innerHTML;
   firstCell.innerHTML = "";
}

function checkWin()
{
   var win = true;

   for ( var i = 0; i < 4; i++ )
      for ( var j = 0; j < 4; j++ )
   	  if ( !( cells[ i ][ j ].innerHTML == i*4 + j + 1 ) )
         if ( !( i == 3 && j == 3 ) )
            win = false;

   if ( win )
      if ( window.prompt( "Play again?", "yes" ) )
         placeNumbers();
}

window.addEventListener( "load", setup, false );
