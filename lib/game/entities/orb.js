/**
 * Created with JetBrains WebStorm.
 * User: Veo
 * Date: 12/14/13
 * Time: 1:06 AM
 * To change this template use File | Settings | File Templates.
 */


ig.module(
        'game.entities.orb'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityOrb = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/troika.png', 30, 30 ),
            size: {x: 30, y:30},
            offset: {x: 15, y:20},

            flip: false,
            maxVel: {x: 600, y: 800},
            friction: {x: 300, y: 0},

            type: ig.Entity.TYPE.NONE,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.NONE,

            orbitValue: 0,
            orbitSpeed: 0,


            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                // Add the animations
                this.addAnim( 'idle', 1, [41] );

            },

            orbit: function() {
                this.orbitSpeed = Math.cos(this.orbitValue);
                this.orbitValue += 0.1;
                if (this.orbitSpeed > 0.95)
                {
                    this.zIndex = 5;
                }
                else if (this.orbitSpeed < -0.95)
                {
                    this.zIndex = -5;
                }
            },

            update: function() {

                this.parent();

                this.orbit();
                var player = ig.game.getEntitiesByType( EntityPlayer )[0];
                this.pos.x = player.pos.x + (this.orbitSpeed * 23) + 15;
                this.pos.y = player.pos.y + (this.orbitSpeed * 23) + 15;

            }

        });
    });





