/* global Phaser, Main */

(function (W, P) {
    
    'use strict';

    var HEIGHT = W.innerHeight;
    var WIDTH = (HEIGHT / 16) * 10;

    var game = new P.Game(WIDTH, HEIGHT, P.CANVAS, 'Game');

    game.state.add('Main', Main);
    game.state.start('Main');

})(window, Phaser);
