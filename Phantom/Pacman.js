var ctx = document.getElementById("myCanvas").getContext("2d");
var error = 0;

class Maze {

    constructor() {
        /*self grid represents the game board with each array 
    being all the y coordinates in each x coordinate. Grid is 31 by 28.
    If we decide to make multiple levels we can have constructor generate multiple maps*/ 
        this.grid = [
        [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,2,1,1,1,1,1,0,3,3,3,0,3,0,3,3,3,0,1,1,1,2,0,0,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,3,3,3,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,0,0,1,3,3,3,0,3,3,3,0,3,0,0,1,1,1,1,0,0,1,1,1,1,0],                               
        [0,0,0,0,0,1,0,0,0,0,0,3,4,3,3,3,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0], 
        [0,0,0,0,0,1,0,0,0,0,0,3,4,3,3,3,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,0,0,1,3,3,3,0,3,3,3,0,3,0,0,1,1,1,1,0,0,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,3,3,3,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,2,1,1,1,1,1,0,3,3,3,0,3,0,3,3,3,0,1,1,1,2,0,0,1,1,1,1,0],    
        [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0] 
        ];
        
        
    }
    
    getGrid() {
        return this.grid;
    }
    
    //resets grid to orignal configuration
    resetGrid() {
        this.grid = [
        [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,2,1,1,1,1,1,0,3,3,3,0,3,0,3,3,3,0,1,1,1,2,0,0,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,3,3,3,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],                
        [0,1,1,1,1,1,0,0,1,3,3,3,0,3,3,3,0,3,0,0,1,1,1,1,0,0,1,1,1,1,0], 
        [0,0,0,0,0,1,0,0,0,0,0,3,4,3,3,3,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0], 
        [0,0,0,0,0,1,0,0,0,0,0,3,4,3,3,3,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,0,0,1,3,3,3,0,3,3,3,0,3,0,0,1,1,1,1,0,0,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,3,3,3,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,2,1,1,1,1,1,0,3,3,3,0,3,0,3,3,3,0,1,1,1,2,0,0,1,1,1,1,0],    
        [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0] 
        ];
    }

    drawWall(x,y) { //Grid graphic for a wall
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(x*20, y*20, 20, 20);
    }

    drawEmptySpace(x,y) { //Grid graphic for an empty space
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);
    }

    drawPellet(x,y) { //Grid graphic for a pellet space
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);
        ctx.fillStyle = "#ffff77";
        ctx.fillRect(x*20+10,y*20+10,3,3);
    }

    drawPowerPellet(x,y) { //Grid graphic for a power pellet
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);        
        ctx.fillStyle = "#ffff77";
        ctx.fillRect(x*20+7,y*20+7,6,6);
    }

    drawCageGate(x,y) { //Grid graphic for cage gate (properties of wall for pacman, wall/empty space for ghost)
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);    
        ctx.fillStyle = "#FFFDD0";
        ctx.fillRect(x*20, y*20+10, 20, 10);
    }
    
    drawBonusItem(/*sprite*/) { //Grid graphic for bonus item
        //function.drawFromIMGFile("sprite.jpg");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(260, 340, 20, 20);
    }   

    drawLevel() { //draws all non-moving entities on the canvas
        for (var x = 0; x < 28; x++) {
            for (var y = 0; y < 31; y++) {
                if (this.grid[x][y] == 3) { // EMPTY SPACE
                    this.drawEmptySpace(x,y);
                }
                else if (this.grid[x][y] == 2) { //POWER PELLET
                    this.drawPowerPellet(x,y);
                }
                else if (this.grid[x][y] == 1) { //PELLET
                    this.drawPellet(x,y);
                }
                else if (this.grid[x][y] == 4) { //CAGE GATE
                    this.drawCageGate(x,y); 
                }
                else { //WALL
                    this.drawWall(x,y);
                }
            }
        }
    }

    /*The black background canvas for our game
    should have an extra bit of space below the maze for score and other UI elements*/
    drawCanvas() {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 560, 650);
    }

}

class Ghost {

    constructor(startXPos, startYPos, boxTimer, inBox, nickname, map, pacman) {
        this.map = map;
        this.pacman = pacman;
        this.nickname = nickname;
        this.startingXPos = startXPos;
        this.startingYPos = startYPos;
        this.startingBoxTimer = boxTimer;
        this.xPos = startXPos;
        this.yPos = startYPos;
        this.lastXPos = null;
        this.lastYPos = null;
        this.interX = 0;
        this.interY = 0;
        this.boxTimer = boxTimer; //how long ghost has been in box, only leaves after set interval
        this.blueModeTimer = 0;
        this.blueMode = false;
        this.isReset = false;
        this.color = null;
        this.inBox = inBox; //boolean for if ghost is in box at start or after being eaten
    }
    
    reset() { //resets ghosts to their starting positions and starting box timer
        this.redrawSprite(this.xPos,this.yPos);
        this.xPos = this.startingXPos;
        this.yPos = this.startingYPos;
        this.blueModeTimer = 0;
        this.blueMode = false;
        this.drawSprite();
        this.boxTimer = this.startingBoxTimer;
        this.inBox = false;
        if (this.nickname != "Blinky") {
            this.inBox = true;
        }
    }
    
    startBlueMode() { //Ghost enters blue mode, turning blue and becoming edible by pacman
        console.log("Ghosts have entered blue mode!");
        this.color = "#7239a7"
        this.blueMode = true;
    }
    
    stopBlueMode() { //Resets ghosts from blue mode to normal mode
        console.log("Ghosts have returned to normal mode!");
        this.blueMode = false;
        this.getColor();
    }
    
    getEaten() { //returns a ghost to the box and resets them if eaten by pacman
        //this.color = "#ffffff";
        this.isReset = true;
        this.redrawSprite(this.xPos,this.yPos);
        this.inBox = true;
        if (this.nickname != "Blinky") {
            this.xPos = this.startingXPos;
            this.yPos = this.startingYPos;
        }
        else {
            this.xPos = 12;
            this.yPos = 14;
        }
        this.drawSprite();
        this.boxTimer = 30;
        this.stopBlueMode();
    }
        
    resetInterCoords() {
        this.interX = 0;
        this.interY = 0;
    }
    
    getColor() { //gives ghost a color (or later sprite) depending on name
        if (this.nickname == "Blinky") {
            this.color = "#FF0000";
        } 
        else if (this.nickname == "Pinky") {
            this.color = "#FFC3E1";
        }
        else if (this.nickname == "Inky") {
            this.color = "#00FFFF";
        }
        else if (this.nickname == "Clyde") {
            this.color = "#FFB732";
        }
    }
    
    move() {
        if (this.interX != 20 && this.interY != 20 && this.interX != -20 && this.interY != -20 && !this.isReset) {
            this.redrawSprite(this.lastXPos, this.lastYPos);
            this.redrawSprite(this.xPos, this.yPos);
            ctx.fillStyle = this.color;
            this.interX = this.interX + (this.xPos-this.lastXPos);
            this.interY = this.interY + (this.yPos-this.lastYPos);
            ctx.fillRect((this.lastXPos*20)+(this.interX), (this.lastYPos*20)+(this.interY), 20, 20);
            /*if (this.interX != 20 && this.interY != 20 && this.interX != -20 && this.interY != -20 && !this.isReset) {*/
                var ghostMoveID = requestAnimationFrame(this.move.bind(this));
            }
            else {
                cancelAnimationFrame(ghostMoveID);
                this.resetInterCoords();
                return;
            }
    }

    drawSprite() { //draws ghost to current x,y coordinates
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
    }
     
    redrawSprite(x, y) { //redraws the last sprite a ghost overlapped
        if (this.map.getGrid()[x][y] == 3) { //EMPTY SPACE
            this.map.drawEmptySpace(x,y);
        }
        else if (this.map.getGrid()[x][y] == 2) { //POWER PELLET
            this.map.drawPowerPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 1) { //PELLET
            this.map.drawPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 4) { //CAGE GATE
            this.map.drawCageGate(x,y);
        }
        else if (this.map.getGrid()[x][y] == 9) { //BONUS ITEM
            this.map.drawBonusItem();
        }
    }

    isLastPos(x,y) { //boolean used in pathing function
        if (x == this.lastXPos && y == this.lastYPos) {
            return true;
        }
        return false;
    }
    
    setLastPos(x,y) { //sets last coordinates. Used to prevent ghost backtracking
        this.lastXPos = x;
        this.lastYPos = y;
    }
    
    boxMove() { //Controls how a ghost behaves until it is time to exit this box
        if (this.inBox && this.boxTimer < 70 && this.boxTimer % 2 == 0) { //ghost pacing in box (down)
            this.yPos--;
            this.setLastPos(this.xPos, this.yPos+1);
            this.move();
            this.boxTimer++;    
        }
        else if (this.inBox && this.boxTimer < 70 && this.boxTimer % 2 != 0) { //ghost pacing in box (up)
            this.yPos++;
            this.setLastPos(this.xPos, this.yPos-1);
            this.move();
            this.boxTimer++;
        }
        else if (this.boxTimer >= 70 && this.inBox) { //if time to move out of box
            //13,12     14,12
            if (this.xPos < 13) { //move right to below gate
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            else if (this.xPos > 14) {//move left to below gate
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            else if (this.yPos > 11) { //move up to gate
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
                if (this.yPos == 11) { //If passed through gate, begin normal movement
                    this.inBox = false;
                }
            }
        }
    }

    aggroMove() { //ghost pathing for attempting to overtake pacman. Generally tries to close x/y distance
        var pacX = this.pacman.xPos;
        var pacY = this.pacman.yPos;
        if (this.inBox) {
            this.boxMove();
        } 
        else if (!this.inBox) { //If ghost is within box during agressive time it will just do box movements
            if (this.xPos == 27 && this.lastXPos == 26) { //Going through right tube
                this.redrawSprite(this.xPos,this.yPos);
                this.setLastPos(this.xPos,this.yPos);
                this.xPos = 0;
                this.drawSprite();
            }
            else if (this.xPos == 0 && this.lastXPos == 1) { //Going through left tube
                this.redrawSprite(this.xPos,this.yPos);
                this.setLastPos(this.xPos,this.yPos);
                this.xPos = 27;
                this.drawSprite();
            }
        
            //MOVE LEFT
            //If wants to move left and can, move left
            if (this.xPos > pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            } 
            //If wants to move left and can't, and pacman is above ghost, try up
            else if (this.xPos > pacX && this.yPos > pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //If wants to move left and can't, and pacman is above ghost, and can't move up, try down
            else if (this.xPos > pacX && this.yPos > pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move;
            }
            //If wants to move left and can't and pacman is below ghost, try down
            else if (this.xPos > pacX && this.yPos < pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move();
            }
            //If wants to move left and can't and pacman is below ghost, and can't go down, try up
            else if (this.xPos > pacX && this.yPos < pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //if wants to move left and can't, and pacman is directly to side of ghost, move down
            else if (this.xPos > pacX && this.yPos == pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move();
            }
            //if wants to move left and can't, and pacman is directly to side of ghost and can't move down, move up
            else if (this.xPos > pacX && this.yPos == pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //If wants to move left and no other options are available, move right
            else if (this.xPos > pacX && this.yPos == pacY && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPo+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            
            
            //MOVE RIGHT
            //If wants to move right and can, move right
            else if (this.xPos < pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            } 
            //If wants to move right and can't, and pacman is above ghost, try up
            else if (this.xPos < pacX && this.yPos > pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //If wants to move right and can't, and pacman is above ghost, and can't move up, try down
            else if (this.xPos < pacX && this.yPos > pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move();
            }
            //If wants to move right and can't and pacman is below ghost, try down
            else if (this.xPos < pacX && this.yPos < pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move();
            }
            //If wants to move right and can't and pacman is below ghost, and can't go down, try left
            else if (this.xPos < pacX && this.yPos < pacY && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //If wants to move right and can't and pacman is below ghost, and all other directions blocked, try up
            else if (this.xPos < pacX && this.yPos < pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //if wants to move right and can't, and pacman is directly to side of ghost, move down
            else if (this.xPos < pacX && this.yPos == pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move();
            }
            //if wants to move right and can't, and pacman is directly to side of ghost and can't move down, move up
            else if (this.xPos < pacX && this.yPos == pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //If wants to move right and no other options are available, move left
            else if (this.xPos > pacX && this.yPos == pacY && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            
            
            
            //UP 
            //if wants to move up and can, move up
            else if (this.yPos > pacY && (this.map.getGrid()[this.xPos][this.yPos-1] != 0) && !this.isLastPos(this.xPos,this.yPos-1)) {
                this.yPos--;
                this.setLastPos(this.xPos, this.yPos+1);
                this.move();
            }
            //if wants to move up and can't, and pacman is left of ghost, move left
            else if (this.yPos > pacY && this.xPos > pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //if wants to move up and can't, and pacman is left of ghost, and can't move left, move right
            else if (this.yPos > pacY && this.xPos > pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            //if wants to move up and can't, and pacman is right of ghost, move right
            else if (this.yPos > pacY && this.xPos < pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            //if wants to move up and can't, and pacman is right of ghost, and can't move right, move left
            else if (this.yPos > pacY && this.xPos < pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //if wants to move up and can't, and pacman is directly below ghost, move left
            else if (this.yPos > pacY && this.xPos == pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //if wants to move up and can't, and pacman is directly below ghost, and can't move left, move right
            else if (this.yPos > pacY && this.xPos == pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            
            
                  
            //DOWN
            //if wants to move down and can, move down
            else if (this.yPos < pacY && (this.map.getGrid()[this.xPos][this.yPos+1] != 0) && (this.map.getGrid()[this.xPos][this.yPos+1] != 4) && !this.isLastPos(this.xPos,this.yPos+1)) {
                this.yPos++;
                this.setLastPos(this.xPos, this.yPos-1);
                this.move();
            }
            //if wants to move down and can't, and pacman is left of ghost, move left
            else if (this.yPos < pacY && this.xPos > pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //if wants to move down and can't, and pacman is left of ghost, and can't move left, move right
            else if (this.yPos < pacY && this.xPos > pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            //if wants to move down and can't, and pacman is right of ghost, move right
            else if (this.yPos < pacY && this.xPos < pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
            //if wants to move down and can't, and pacman is right of ghost, and can't move right, move left
            else if (this.yPos < pacY && this.xPos < pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //if wants to move down and can't, and pacman is directly below ghost, move left
            else if (this.yPos < pacY && this.xPos == pacX && (this.map.getGrid()[this.xPos-1][this.yPos] != 0) && !this.isLastPos(this.xPos-1,this.yPos)) {
                this.xPos--;
                this.setLastPos(this.xPos+1, this.yPos);
                this.move();
            }
            //if wants to move down and can't, and pacman is directly below ghost, and can't move left, move right
            else if (this.yPos < pacY && this.xPos == pacX && (this.map.getGrid()[this.xPos+1][this.yPos] != 0) && !this.isLastPos(this.xPos+1,this.yPos)) {
                this.xPos++;
                this.setLastPos(this.xPos-1, this.yPos);
                this.move();
            }
        }
    }
    
    passiveMove() { //ghost pathing for when ghosts are blue or uninterested in pacman, semirandom with no backtracking
        var direction;
        var sucMove = false;
        if (this.inBox) {
            this.boxMove();
        }
        else if (!this.inBox) {
            while(sucMove == false) {
                direction = Math.floor(Math.random() * Math.floor(4));
                if (this.xPos == 27 && this.lastXPos == 26) { //Going through right tube
                    this.redrawSprite(this.xPos,this.yPos);
                    this.xPos = 0;
                    this.drawSprite();
                    sucMove = true;
                }
                else if (this.xPos == 0 && this.lastXPos == 1) { //Going through left tube
                    this.redrawSprite(this.xPos,this.yPos);
                    this.xPos = 27;
                    this.drawSprite();
                    sucMove = true;
                }
                else if (direction == 0) { //RIGHT
                    if (this.map.getGrid()[this.xPos+1][this.yPos] != 0 && !this.isLastPos(this.xPos+1,this.yPos)) {
                        this.xPos++;
                        this.setLastPos(this.xPos-1, this.yPos);
                        this.move();
                        sucMove = true;
                    }
                }            
                else if (direction == 1) { //LEFT
                    if (this.map.getGrid()[this.xPos-1][this.yPos] != 0 && !this.isLastPos(this.xPos-1,this.yPos)) {
                        this.xPos--;
                        this.setLastPos(this.xPos+1, this.yPos);
                        this.move();
                        sucMove = true;
                    }
                }  
                else if (direction == 2) { //UP
                    if (this.map.getGrid()[this.xPos][this.yPos-1] != 0 && !this.isLastPos(this.xPos,this.yPos-1)) {
                        this.yPos--;
                        this.setLastPos(this.xPos, this.yPos+1);
                        this.move();
                        sucMove = true;
                    }
                }  
                else if (direction == 3) { //DOWN
                    if (this.map.getGrid()[this.xPos][this.yPos+1] != 0 && this.map.getGrid()[this.xPos][this.yPos+1] != 4 && !this.isLastPos(this.xPos,this.yPos+1)) {
                        this.yPos++;
                        this.setLastPos(this.xPos, this.yPos-1);
                        this.move();
                        sucMove = true;
                    }
                }    
            }
        }
    }
}

class Pacman {

    constructor(map) {
        this.map = map;
        this.xPos = 13;
        this.yPos = 23;
        this.lastXPos = 13;
        this.lastYPos = 23;
        this.interX = 0;
        this.interY = 0;
        this.direction = null;
        this.bonusEaten = false;
        this.bonusChain = 0;
        this.lives = 3;  
        this.blueMode = false; 
        this.hasMoved = false;  
        this.isReset = false;
    }
    
    reset() { //resets pacman to starting position
        this.isReset = true;
        this.redrawSprite(this.xPos,this.yPos);
        this.xPos = 13;
        this.yPos = 23;
        this.drawSprite();
    }   
    
    stopBlueMode() { //resets pacman side of blue mode to normal mode
        this.blueMode = false; 
        this.bonusBlueTime = false;
    }
    
    setDirection(direction) {
        this.direction = direction;
    }
    
    eatPellet() { //despite being named eatPellet, controls eating both pellets and bonus items
        if (this.map.getGrid()[this.xPos][this.yPos] == 1) { //Pellet
            this.map.getGrid()[this.xPos][this.yPos] = 3;
            score+=10;
        }
        else if (this.map.getGrid()[this.xPos][this.yPos] == 2) {//Power pellet
            this.map.getGrid()[this.xPos][this.yPos] = 3;
            score+=50;
            if (this.blueMode == true) {
                this.bonusBlueTime = true;
            }
            this.blueMode = true;
        }
        else if (this.map.getGrid()[this.xPos][this.yPos] == 9) { //Bonus Item
            this.map.getGrid()[this.xPos][this.yPos] = 3;
            switch(this.bonusChain) {
                case 0:
                    score+=100;
                    break;
                case 1:
                    score+=300;
                    break;
                case 2:
                    score+=500;
                    break;
                case 3:
                    score+=700;
                    break;
                case 4:
                    score+=1000;
                    break;
                case 5:
                    score+=2000;
                    break;
                case 6:
                    score+=3000;
                    break;
                case 7:
                    score+=5000;
                    break;
                default:
                    score+=100;
            }
            this.bonusChain++;
            this.bonusEaten = true;
        }
    }
    
    move() {
        this.redrawSprite(this.lastXPos, this.lastYPos);
        this.redrawSprite(this.xPos, this.yPos);
        ctx.fillStyle = "#ffff00";
        this.interX = this.interX + (this.xPos-this.lastXPos);
        this.interY = this.interY + (this.yPos-this.lastYPos);
        ctx.fillRect((this.lastXPos*20)+(this.interX), (this.lastYPos*20)+(this.interY), 20, 20);
        if (this.interX != 20 && this.interY != 20 && this.interX != -20 && this.interY != -20 && !this.isReset) {
            var pacmanMoveID = requestAnimationFrame(this.move.bind(this));
        }
        else {
            cancelAnimationFrame(pacmanMoveID);
            this.resetInterCoords();
            return;
        }
    }
    
    setLastPos(x,y) { //sets last coordinates. Used to prevent ghost backtracking
        this.lastXPos = x;
        this.lastYPos = y;
    }
    
    resetInterCoords() {
        this.interX = 0;
        this.interY = 0;
    }
    
    chooseDirection() { //Pacman movement control
        if (!this.hasMoved) {
            this.eatPellet();
            if (this.direction == "right") { //RIGHT
                if (this.xPos != 27) {
                    if (this.map.getGrid()[this.xPos+1][this.yPos] != 0) {
                        this.xPos++;
                        this.setLastPos(this.xPos-1, this.yPos);
                        this.move();
                    }
                }
                else { //going through right teleport tube
                    this.redrawSprite(27,14);
                    this.xPos = 0;
                    this.drawSprite();
                }
            } 
            else if (this.direction == "left") { //LEFT
                if (this.xPos != 0) {
                    if (this.map.getGrid()[this.xPos-1][this.yPos] != 0) { 
                        this.xPos--;
                        this.setLastPos(this.xPos+1, this.yPos);
                        this.move();
                    }
                }
                else { //going through left teleport tube
                    this.redrawSprite(0,14);
                    this.xPos = 27;
                    this.drawSprite();
                }
            }  
            else if (this.direction == "up") { //UP
                if (this.map.getGrid()[this.xPos][this.yPos-1] != 0) {
                        this.yPos--;
                        this.setLastPos(this.xPos, this.yPos+1);
                        this.move();
                }
            }  
            else if (this.direction == "down") { //DOWN
                if (this.map.getGrid()[this.xPos][this.yPos+1] != 0 && this.map.getGrid()[this.xPos][this.yPos+1] != 4) {
                        this.yPos++;
                        this.setLastPos(this.xPos, this.yPos-1);
                        this.move();
                }
            }
        }
        this.hasMoved = true;
    }
    
    drawSprite() { //draws pacman at current x,y coordinates
        ctx.fillStyle = "#ffff00";
        ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
    }
    
    redrawSprite(x, y) { //redraws the last sprite pacman overlapped
        if (this.map.getGrid()[x][y] == 3) { //EMPTY SPACE
            this.map.drawEmptySpace(x,y);
        }
        else if (this.map.getGrid()[x][y] == 2) { //POWER PELLET
            this.map.drawPowerPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 1) { //PELLET
            this.map.drawPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 4) { //CAGE GATE
            this.map.drawCageGate(x,y);
        }
    }
    
}   

class Game {

    constructor(ghosts, pacman) {
        this.ghosts = ghosts;
        this.pacman = pacman;
        this.timer = 0;
        this.behaviorTimer = 0;
        this.blueTimer = 0;
        this.bonusActive = false;
        this.ghostsEatenChain = 1;
        this.aggressive = false;
    }
    
    reset() { //For losing a life
        for (var x = 0; x < 4; x++) {
            this.ghosts[x].reset();
        }
        this.pacman.isReset = true;
        this.behaviorTimer = 0;
        this.blueTimer = 0;
        this.bonusActive = false;
        this.aggressive = false;
        this.pacman.reset();
    } 
    
    fullReset() { //For game over win or lose
        this.pacman.map.resetGrid();
        this.pacman.map.drawLevel();
        for (var x = 0; x < 4; x++) {
            this.ghosts[x].reset();
        }
        this.pacman.reset();
        this.timer = 0;
        this.behaviorTimer = 0;
        this.blueTimer = 0;
        this.pacman.lives = 3;
        this.pacman.bonusChain = 0;
        this.aggressive = false;
    }         
    
    checkPacmanCollision() { //checks to see if pacman has hit a ghost
        for (var x = 0; x < 4; x++) {
            if (this.pacman.blueMode == false && ((this.ghosts[x].xPos == this.pacman.xPos && this.ghosts[x].yPos == this.pacman.yPos) || this.ghosts[x].isLastPos(this.pacman.xPos,this.pacman.yPos))) {
                this.pacman.lives--;
                if (pacman.lives == 0) {
                    window.alert("GAME OVER! Play again?");
                    score = 0;
                    this.fullReset();
                }
                this.reset();
            }
            else if (this.pacman.blueMode == true && ((this.ghosts[x].xPos == this.pacman.xPos && this.ghosts[x].yPos == this.pacman.yPos) || this.ghosts[x].isLastPos(this.pacman.xPos,this.pacman.yPos))) {
                this.ghosts[x].getEaten();
                score += 200*this.ghostsEatenChain;
                console.log("you earned " + 200*this.ghostsEatenChain + " points for eating a ghost");
                this.ghostsEatenChain++;                
            }               
        }
    }
    
    checkWin() { //checks if all pellets have been eaten
        for (var x = 0; x < 28; x++) {
            for (var y = 0; y < 31; y++) {
                if (this.pacman.map.getGrid()[x][y] == 1 || this.pacman.map.getGrid()[x][y] == 2) {
                    return false;
                }
            }
        }
        window.alert("Level Complete!");
        this.fullReset();
    }
    
    //adds eventListener to window
    loadListener() {  
        document.addEventListener("keydown", this.direct);
    }
    
    //upon keypress of any arrowkey, function will set pacman's direction
    direct(e) {
        var key = e.which
               
        if (key == 37 && pacman.map.getGrid()[pacman.xPos-1][pacman.yPos] != 0) {
            pacman.setDirection("left");
        }
        else if (key == 38 && pacman.map.getGrid()[pacman.xPos][pacman.yPos-1] != 0) {
            pacman.setDirection("up");
        }
        else if (key == 39 && pacman.map.getGrid()[pacman.xPos+1][pacman.yPos] != 0) {
            pacman.setDirection("right");
        }
        else if (key == 40 && pacman.map.getGrid()[pacman.xPos][pacman.yPos+1] != 0) {
            pacman.setDirection("down");
        }
    }
    
    //moves all four ghosts at once and swaps between aggressive and passive ghost AI
    moveGhosts() {
        for (var x = 0; x < 4; x++) {
            if (this.aggressive) {
                ghosts[x].aggroMove();
            }
            else if (!this.aggressive) {
                ghosts[x].passiveMove();
            }
        }
        this.timer++;
        this.behaviorTimer++;
        if (this.behaviorTimer == 25) { //Every 25 ticks cycle between aggressive and passive movement
            this.behaviorTimer = 0;
            if (this.aggressive == true) {
                this.aggressive = false;
                console.log("the ghosts have stopped being aggressive!");
            }
            else {
                this.aggressive = true;
                console.log("the ghosts are now aggressive!");
            }
        }
    }
    
    //displays score and lives to lower right screen
    displayScore() {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 620, 800, 500);
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Lives: " + this.pacman.lives + "\t\t\tScore: " + score, 250, 645);
    }
    
    
    //This method controls ghosts entering "blue mode" if pacman eats a power pellet
    blueControl() {
        if (this.pacman.blueMode == true && this.blueTimer == 0) { //If pacman eats a power pellet, start ghost blue mode, make ghosts passive, and have the behaviorTimer never change behavior until blue mode ends
            for (var x = 0; x < 4; x++) {
                this.ghosts[x].startBlueMode(); 
                this.aggressive = false;
                this.behaviorTimer = -100;
                this.blueTimer++;               
            }
        }
        if (this.pacman.bonusBlueTime == true) { //If pacman eats a power pellet while ghosts are already in blue mode it resets the blueTimer to 1
            this.aggressive = false;
            this.behaviorTimer = -100;
            this.blueTimer = 1;
            this.pacman.bonusBlueTime = false;
        }
        if (this.pacman.blueMode == true && this.blueTimer > 0) {
            this.blueTimer++;
            if (this.blueTimer >= 50) { //when timer hits 0, "blue mode" ends
                for (var y = 0; y < 4; y++) {
                    this.ghosts[y].stopBlueMode();
                    this.pacman.stopBlueMode();
                    this.blueTimer = 0;
                    this.ghostsEatenChain = 1;
                    this.behaviorTimer = 0;
                }
            }
        }
    }
            
    //spawns a bonus item to the maze if one does not already exist ever 60 ticks
    spawnBonusFruit() {  
        if (this.pacman.bonusEaten) {
            this.bonusActive = false;
            this.pacman.bonusEaten = false;
        }
        
        if (this.timer % 60 == 0 && !this.bonusActive) {
            maze1.grid[13][17] = 9; //bonus item
            maze1.drawBonusItem();
            this.bonusActive = true;               
        }
  }
  
    tickReset() {
        this.pacman.hasMoved = false;
        for (var x = 0; x < 4; x++) {
            ghosts[x].isReset = false;
        }
        this.pacman.isReset = false;
    }
  
  //gameplay loop
    playGame() {
        this.tickReset();
        this.moveGhosts();
        this.pacman.chooseDirection();
        this.spawnBonusFruit();
        this.displayScore();
        this.checkPacmanCollision();
        this.blueControl();
        this.checkWin();
    }
  
}
 
           
/*TODO: implement these subtypes of walls for beautifying the maze
        
        //Maze boundary walls have a different look than the walls of obstacle blocks
        
        Vertical Boundary Wall = x
        Horizontal Boundary Wall = y
        Top Left Boundary corner = z
        Top Right Boundary Corner = a
        Bottom Left Boundary Corner = b
        Bottom Left Boundary Corner = c
        
        Vertical Block Wall = x
        Horizontal Block Wall = y
        Top Left Block corner = z
        Top Right Block Corner = a
        Bottom Left Block Corner = b
        Bottom Left Block Corner = c
*/

//Beautify walls test
/*
//Vertical Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(570, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(575, 50, 10, 20); //Vertical Black Square

//Horizontal Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(600, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(600, 55, 20, 10); //Horizontal Black Square

//Top Left Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(625, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(630, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(630, 55, 10, 15); //Vertical Black Square

//Top Right Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(650, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(650, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(655, 55, 10, 15); //Vertical Black Square

//Bottom Left Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(675, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(680, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(680, 50, 10, 15); //Vertical Black Square

//Bottom Right Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(700, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(705, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(705, 50, 10, 15); //Vertical Black Square
*/






var maze1 = new Maze();
var score = 0;

//Pacman initiation
pacman = new Pacman(maze1);

//Ghost initiation
blinky = new Ghost(13, 11, 70, false, "Blinky", maze1, pacman);
blinky.getColor();
pinky = new Ghost(13, 14, 50, true, "Pinky", maze1, pacman);
pinky.getColor();
inky = new Ghost(11, 14, 30, true, "Inky", maze1, pacman);
inky.getColor();
clyde = new Ghost(15, 14, 10, true, "Clyde", maze1, pacman);
clyde.getColor();

ghosts = new Array(blinky, pinky, inky, clyde);
game = new Game(ghosts, pacman);
game.loadListener();

//Draws game at initial position
maze1.drawCanvas();
maze1.drawLevel();
blinky.drawSprite();
pinky.drawSprite();
inky.drawSprite();
clyde.drawSprite();
pacman.drawSprite();

//game actions execute every 200ms
setInterval(game.playGame.bind(game), /*180*/ 350);


/*BUGS
    *When ghost goes through left tunnel they may teleport back into the ghost box
    *Sometimes ghosts go through walls or teleport to random areas
    *Sometimes ghosts have trouble leaving the box
    *If ghost is aggressive and in a top-left corner ghost will stop moving
*/
    
