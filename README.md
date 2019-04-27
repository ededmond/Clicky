# Clicky
A memory game built using React.

How to play:
    The goal of the game is to click every image exactly once.

    Every time an image is clicked, all images on the page are rearranged. 

    Your top score is recorded in the top right of the screen (this is also stored in localStorage, so you can refresh the page and still keep your high score).

    When you click an image more than once, the screen will display a message telling you that you have lost and asking if you would like to play again. Clicking Play Again restarts the game (all images are marked as having never been clicked)

    If you manage to click every single image exactly once, the screen will display a message saying "You won!" and you will be asked if you would like to play again.

    Once you have one once, the top score at the top right will be replaced with the number of times you have won the game. This is also stored in local storage.