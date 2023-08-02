# Connect-4 Web App

This project is a clone of the popular game Connect-4. It was created using React and meant as a training exercise to enhance my development skills.

## Description and Features

### Overview

This is a clone of the game Connect-4. It is slightly different from the original, in that each player can choose any available position on the board, not just the lowest available in each column.

### Locking

As expected, the board will lock once the game is complete, ending with either a win or a draw. It will also not allow positions that are already selected by a player to be chosen again.

### Header and Footer

The header describes the current state of the game, declaring a winner or draw, or indicating whose turn it is next. The footer contains two buttons: one to reset the board for a new game, and another to have an AI-generated selection of the next move.

### Suggest Button

The _Suggest_ button will make the next move in the game, based on a simple AI algorithm. The algorithm first checks if any player can win on the next move; if so, it will choose the first position that it discovers will result in a win. If no position is found, it will select any available position at random.

## Credits

This project was built with the help of the _HTML, CSS, JavaScript, React_ course offered by _YouAccel Training_ via Udemy.
