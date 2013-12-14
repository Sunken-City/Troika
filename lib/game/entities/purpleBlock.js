/**
 * Created by anthony on 12/13/13.
 */


ig.module(
        'game.entities.purpleBlock'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityPurpleBlock = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/switchBlocks.png', 30, 30 ),
            size: {x: 30, y:30},
            offset: {x: 0, y:0},

            flip: false,
            maxVel: {x: 600, y: 800},
            friction: {x: 300, y: 0},

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.FIXED,
            gravityFactor: 0,


            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                // Add the animations
                this.addAnim( 'on', .5, [2]);
                this.addAnim( 'off', .5, [3]);

            },


            update: function() {

                if (ig.game.globalVariableForToggleBox == "PURPLE")
                {
                    this.currentAnim = this.anims.on;
                    this.collides = ig.Entity.COLLIDES.FIXED;

                }
                else if (ig.game.globalVariableForToggleBox == "GREEN")
                {
                    this.currentAnim = this.anims.off;
                    this.collides = ig.Entity.COLLIDES.NEVER;
                }

                this.parent();
            }

        });
    });





