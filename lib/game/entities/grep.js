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

            flip : true,
            maxVel: {x: 150, y: 300},

            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.ACTIVE,


            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                this.addAnim( 'idle', .5, [0] );
            },


            update: function() {


                this.currentAnim.flip.x = !this.flip;

                // near an edge? return!
                if( !ig.game.collisionMap.getTile(
                    this.pos.x + (this.flip ? +4 : this.size.x -4),
                    this.pos.y + this.size.y+1))
                {
                    this.flip = !this.flip;
                }


                var xdir = this.flip ? -1 : 1;
                this.vel.x = 50 * xdir;


                // move!
                this.parent();
            },

            collideWith: function ( other, axis ) {

                if ( axis == 'y')
                {
                    if( (other instanceof EntityPlayer) && ( other.pos.y < this.pos.y ) && (other.gravityFactor != -1.4))
                    {
                        this.kill();

                        other.vel.y = -300;

                    }


                }

            },

            handleMovementTrace: function( res ) {
                this.parent( res );

                // collision with a wall? return!
                if( res.collision.x ) {
                    this.flip = !this.flip;
                }
            }


        });
    });





