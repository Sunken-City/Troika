ig.module(
        'game.entities.helperImageSpacebar'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityHelperImageSpacebar = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/helperImages.png', 60, 60 ),

            size: {x: 60 , y:60},

            gravityFactor: 0,
            zIndex: -998,


            type: ig.Entity.TYPE.NONE,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides:   ig.Entity.COLLIDES.NEVER,

            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                // Add the animations
                this.addAnim( 'idle',.25, [0,1] );

            },

            update: function() {

                this.parent();
            }


        });
    });