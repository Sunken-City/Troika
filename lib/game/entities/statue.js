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
            animSheet: new ig.AnimationSheet( 'media/statue.png', 100, 150 ),
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
                this.addAnim( 'idle', .5, [0]);

            },


            update: function() {

                this.parent();
            }

        });
    });





