(function(window){
    'use strict';

    function OverworldInitializable(){}

    OverworldInitializable.prototype._isInitializable = true;
    OverworldInitializable.prototype._initialized = false;
    OverworldInitializable.prototype._onInitialize = function(){};
    OverworldInitializable.prototype.onInitialize = function(fn){
        if(typeof fn === 'function'){
            this._onInitialize = fn;
        }
    };

    function OverworldApp(){
        this._initializables = [];
    }

    OverworldApp.prototype = Object.create(OverworldInitializable.prototype);
    OverworldApp.prototype.constructor = OverworldApp;

    OverworldApp.prototype.register = function(overworldInitializable){
        this._initializables.push(overworldInitializable);
    };

    OverworldApp.prototype.initialize = function(){
        for(var i = 0; i < this._initializables.length; i++){
            this._initializables[i]._initialize();
        }
        this._onInitialize();
        this._initialized = true;
    };

    function OverworldModule(){}

    OverworldModule.prototype = Object.create(OverworldInitializable.prototype);
    OverworldModule.prototype.constructor = OverworldModule;

    OverworldModule.prototype._initialize = function(){
        this._onInitialize();
        this._initialized = true;
    };

    function Overworld(){}

    Overworld.prototype.createApp = function(){
        return new OverworldApp();
    };

    Overworld.prototype.createModule = function(){
        return new OverworldModule();
    };

    window.Overworld = new Overworld();
})(window);