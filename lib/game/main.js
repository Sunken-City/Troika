ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'impact.debug.debug',

    'game.entities.player',
    'game.entities.orb',
    'game.entities.fireball',
    'game.entities.dino',



    'game.entities.greenBlock',

    'game.levels.MAP'
)
.defines(function(){

MyGame = ig.Game.extend({

    clearColor: null,
	gravity: 600,

	font: new ig.Font( 'media/04b03.font.png' ),

    globalVariableForToggleBox : "PURPLE",    // PURPLE OR GREEN
   // globalVariableForOrb : "NONE", // FIRE, TOGGLE, OR GRAVITY
    globalVariableForOrb : "FIRE", // FIRE, TOGGLE, OR GRAVITY



    init: function()
    {
        ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
        ig.input.bind( ig.KEY.UP_ARROW, 'up' );

		ig.input.bind( ig.KEY.SPACE, 'jump' );
        ig.input.bind( ig.KEY.Z, 'fire' );
        ig.input.bind( ig.KEY.T, 'toggle');

        this.loadLevel( LevelMAP );
	},
	
	update: function() {

        this.parent();

        //*****************************************
		// screen follows the player
		var player = this.getEntitiesByType( EntityPlayer )[0];
		if( player ) {
			this.screen.x = player.pos.x - ig.system.width/2;
			this.screen.y = player.pos.y - ig.system.height/2;
			}
        //*********************************************
		

	
	},
	
	draw: function() {
        ig.system.context.clearRect( 0 ,0, ig.system.realWidth, ig.system.realHeight ); //clear screen command


        // Draw all entities and backgroundMaps
        this.parent();


		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;


		this.font.draw( 'Demo of Impact Framework', 20, ig.system.height-50, ig.Font.ALIGN.LEFT );
		this.font.draw( 'Arrows/WSAD to Move', 20, ig.system.height-40, ig.Font.ALIGN.LEFT );
		this.font.draw( 'Space to jump, Z to fire', 20, ig.system.height-30, ig.Font.ALIGN.LEFT);


    }
});


// Start the Game with 60fps, a resolution of width/height, scaled by X
ig.main( '#canvas', MyGame, 60, 600, 500, 1 );

});
