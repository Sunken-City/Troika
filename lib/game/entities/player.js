

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
            maxVel: {x: 600, y: 800},
            friction: {x: 600, y: 0},

            zIndex: 0,

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,
            collides: ig.Entity.COLLIDES.ACTIVE,


            flappingPowerLeft : 0,

            gravityFactor : 1.4,

            init: function( x, y, settings ) {
                this.parent( x, y, settings );

                // Add the animations
                this.addAnim( 'idle', .5, [0] );
                //this.addAnim( 'run', 0.1, [8,9,10,11,12,13,14] );

                this.addAnim( 'jump',.5, [4] );
                this.addAnim( 'flappingWings',.05, [5,6] );
            },


            update: function() {

                this.currentAnim.flip.x = this.flip;

                if ( ig.game.globalVariableForOrb != 'NONE')
                {

                    if (!ig.game.getEntitiesByType( EntityOrb )[0])
                    {
                        if( !ig.global.wm )
                        { // Not in WM?
                            ig.game.spawnEntity( EntityOrb, 0,  0 );
                        }
                    }
                }






                // move left or right
                if( ig.input.state('left') ) {
                    this.accel.x = -300;
                    this.flip = true;
                }
                else if( ig.input.state('right') ) {
                    this.accel.x = 300;
                    this.flip = false;
                }
                else {
                    this.accel.x = 0;
                }


                // jump or flap
                if( this.standing && ig.input.pressed('jump') ) {
                    this.vel.y = -600;
                    this.flappingPowerLeft = 10;
                }
                else if (ig.input.state('jump') && ( this.flappingPowerLeft > 0))
                {
                    this.vel.y = -300;
                    this.flappingPowerLeft--;
                }


                // shoot
                if( ig.input.pressed('toggle') ) {

                    if ( ig.game.globalVariableForOrb == 'FIRE')
                    {
                        ig.game.spawnEntity( EntityFireball, this.pos.x, this.pos.y, {flip:this.flip} );
                    }
                    else if(ig.game.globalVariableForOrb  == 'TOGGLE')
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
                    else if(ig.game.globalVariableForOrb  == 'TOGGLE')
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





