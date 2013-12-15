ig.module(
        'game.entities.grep'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityGrep = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/grep.png', 40, 30 ),
            size: {x: 40, y:30},
            offset: {x: 0, y: 0},

            flip : false,
            maxVel: {x: 150, y: 300},

            gravityFactor: 0,

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,


            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                this.addAnim( 'idle', .5, [0] );
            },

            check: function( other ) {
                other.receiveDamage( 10, this );
            },


            update: function() {


                //this.currentAnim.flip.y = !this.flip;

                // near an edge? return!
                /*if( !ig.game.collisionMap.getTile(
                    this.pos.x + this.size.x+1,
                    this.pos.y + (this.flip ? -4 : this.size.y +4)))
                {
                    this.flip = !this.flip;
                }*/


                var ydir = this.flip ? -1 : 1;
                this.vel.y = 150 * ydir;


                // move!
                this.parent();
            },

            handleMovementTrace: function( res ) {
                this.parent( res );

                // collision with a wall? return!
                if( res.collision.y ) {
                    this.flip = !this.flip;
                }
            }


        });
    });





