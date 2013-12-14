
ig.module(
        'game.background'
    ).requires(
        'impact.entity'

    ).defines(function(){

        EntityBackground = ig.Class.extend({

            init: function(){

                ig.Game.inject({

                    background : null,


                    variablesBeenSet : false,

                    init: function(){},

                    update: function () {

                        if ( this.variablesBeenSet == false)
                        {
                            // Create BackgroundMap
                            var data = [
                                [1,1,1],
                                [1,1,1],
                                [1,1,1]
                            ];

                            this.background = new ig.BackgroundMap(600, data, 'media/background.png');

                            /*
                            this.skyBackground = new ig.BackgroundMap(600, data, 'media/bg_space/sky.png');
                            this.skyBackground.scroll.y =+ 150;

                            this.forestBackground = new ig.BackgroundMap(600, data, 'media/bg_space/forest.png');
                            this.forestBackground.repeat = true;

                            this.forest2Background = new ig.BackgroundMap(600, data, 'media/bg_space/forest2.png');
                            this.forest2Background.repeat = true;

                            this.titanBackground = new ig.BackgroundMap(600, data, 'media/bg_space/titan.png');

                            this.starsBackground = new ig.BackgroundMap(600, data, 'media/bg_space/stars.png');
                            this.starsBackground.repeat = true;
                               */


                            this._mapWidth = ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - (ig.system.width);
                            this._mapHeight = ig.game.backgroundMaps[0].height * ig.game.backgroundMaps[0].tilesize - (ig.system.height);

                            this.variablesBeenSet = true;

                        }


                        var player = ig.game.getEntitiesByType( EntityPlayer )[0];
                        if( player ) {



                            //this.starsBackground.scroll.x += ig.system.tick * 2;


                            //*********
                            // prevent background from scrolling if close to a map edge

                            /*
                            var x = player.pos.x - (ig.system.width / 2);
                            if (  x > 0 && x < this._mapWidth )
                            {
                                this.forestBackground.scroll.x += (player.vel.x / 100);
                                this.forest2Background.scroll.x += (player.vel.x / 150);
                            }
                             */

                            /*

                            // 2nd forest backdrop y-axis shifting
                            //***********************************************
                            var topForest2BackgroundLimit = 20;
                            var bottomForest2BackgroundLimit = -20;
                            var yHolder = (player.pos.y/50);

                            if ( (yHolder < topForest2BackgroundLimit) &&
                                (yHolder > bottomForest2BackgroundLimit))
                            {

                                this.forest2Background.scroll.y = yHolder ;
                            }
                            else if (yHolder >= topForest2BackgroundLimit)
                            {
                                this.forest2Background.scroll.y = topForest2BackgroundLimit;

                            }
                            else
                            {
                                this.forest2Background.scroll.y = bottomForest2BackgroundLimit;
                            }
                            //***********************************************
                              */

                            this.parent();

                        }

                        //*********************************************


                    },//end of update function

                    draw: function() {

                        this.background.draw();



                        this.parent();

                    }

                })//end of inject function

            } //end of init fuction

        });
    });

