ig.module(
        'game.entities.fireball'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityFireball = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/fireball.png', 60, 60 ),
            size: {x: 30, y:45},
            offset: {x: 15, y: 15},

            flip: false,

            maxVel: {x: 300, y: 200},
            bounciness: .6,
            bounceCounter: 0,

            type: ig.Entity.TYPE.NONE,
            checkAgainst: ig.Entity.TYPE.B,
            collides: ig.Entity.COLLIDES.PASSIVE,


            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
                this.vel.y = -50;

                this.addAnim( 'idle',.09, [0,1,2] );

            },


            update: function() {




                this.parent();
            },


            handleMovementTrace: function( res ) {
                this.parent( res );
                if( res.collision.x || res.collision.y ) {

                    this.bounceCounter++;
                    if( this.bounceCounter > 30 ) {
                        this.kill();
                    }
                }
            },


            check: function( other ) {
                other.receiveDamage( 10, this );
                this.kill();
            }


        });
    });





