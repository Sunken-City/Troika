/**
 * Created by anthony on 12/13/13.
 */


ig.module(
        'game.entities.statue'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityStatue = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/chozoStatue.png', 100, 110 ),
            size: {x: 100, y:150},
            offset: {x: 0, y:0},

            flip: false,
            maxVel: {x: 600, y: 800},
            friction: {x: 300, y: 0},

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.NEVER,
            gravityFactor: 0,


            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                // Add the animations
                this.addAnim( 'off', .5, [0]);
                //this.addAnim( 'on',.5, [1]);

            },

            inProximity: function(player)
            {
                return( (( this.pos.x + 30) > player.pos.x ) && (( this.pos.x - 30) < player.pos.x ));
            },

            update: function() {
                var player = ig.game.getEntitiesByType( EntityPlayer )[0];
                if (this.inProximity(player))
                {
                   // this.currentAnim = this.anims.off;

                   if ( !ig.game.getEntitiesByType( EntityHelperImageX )[0] )
                   {

                       ig.game.spawnEntity( EntityHelperImageX, this.pos.x - 30,  this.pos.y - 40 );
                   }

                }


                this.parent();
            }

        });
    });





