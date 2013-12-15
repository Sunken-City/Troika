

ig.module(
        'game.entities.player'
    )
    .requires(
        'impact.entity'
    )
    .defines(function(){
        EntityPlayer = ig.Entity.extend({
            animSheet: new ig.AnimationSheet( 'media/troika.png', 60, 60 ),
            size: {x: 30, y:40},
            offset: {x: 15, y:20},

            flip: false,
            maxVel: {x: 500, y: 500},

             friction : {x:100, y:50},

            zIndex: 0,

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,
            collides: ig.Entity.COLLIDES.ACTIVE,


            flappingPowerLeft : 0,

            gravityFactor : 1.4,

            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                // Add the animations
                this.addAnim( 'idle', .5, [0,1] );
                //this.addAnim( 'run', 0.1, [8,9,10,11,12,13,14] );

                this.addAnim( 'jump',.5, [4] );
                this.addAnim( 'flappingWings',.05, [5,6] );
            },

            handleMovementTrace: function( res ) {
                this.parent( res );

                // collision with a wall? return!
                if( res.collision.x ) {
                    this.flip = !this.flip;
                }

                if(res.collision.y && this.gravityFactor == -1.4) {
                    this.standing = true;
                }
            },


            update: function() {

                this.currentAnim.flip.x = this.flip;




                // move left or right
                if( ig.input.state('left') ) {
                    this.vel.x = -300;
                    this.flip = true;
                }
                else if( ig.input.state('right') ) {
                    this.vel.x = 300;
                    this.flip = false;
                }
                else {
                    this.accel.x = 0;
                    this.vel.x = 0;
                }


                // jump or flap
                if( this.standing && ig.input.pressed('jump') ) {
                    this.vel.y = -500 * this.gravityFactor;
                    this.flappingPowerLeft = 30;
                }
                else if (ig.input.state('jump') && ( this.flappingPowerLeft > 0))
                {
                    this.vel.y = -180 * this.gravityFactor;
                    this.flappingPowerLeft--;
                }


                // shoot
                if( ig.input.pressed('toggle') ) {

                    if ( ig.game.globalVariableForOrb[ig.game.globalVariableForOrbArrayIndex]  == 'FIRE')
                    {
                        ig.game.spawnEntity( EntityFireball, this.pos.x, this.pos.y, {flip:this.flip} );
                    }
                    else if(ig.game.globalVariableForOrb[ig.game.globalVariableForOrbArrayIndex]   == 'TOGGLE')
                    {

                        if (ig.game.globalVariableForToggleBox == "PURPLE")
                        {
                            ig.game.globalVariableForToggleBox = "GREEN";
                        }
                        else if (ig.game.globalVariableForToggleBox == "GREEN")
                        {
                            ig.game.globalVariableForToggleBox = "PURPLE";
                        }
                    }
                    else if(ig.game.globalVariableForOrb[ig.game.globalVariableForOrbArrayIndex]   == 'GRAVITY')
                    {

                        this.gravityFactor = this.gravityFactor * -1;
                    }



                }


               //******************************************
                //****************************************

                if( this.vel.y != 0 )
                {
                    if (ig.input.state('jump') && ( this.flappingPowerLeft > 0))
                    {
                        this.currentAnim = this.anims.flappingWings;
                    }
                    else
                    {
                        this.currentAnim = this.anims.jump;
                    }

                }
                else
                {
                    this.currentAnim = this.anims.idle;
                }


                this.parent();
            }

        });
    });





