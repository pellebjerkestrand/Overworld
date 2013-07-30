Overworld
===========

A tiny JavaScript initialization library.

Usage
-----

Create an app.

```javascript
var app = Overworld.createApp();
```

Create a module.

```javascript
var module = Overworld.createModule();
```

Register modules on the app.

```javascript
app.register(module);
```

Apps and modules are initializable.
The function passed to onInitialize is run on initialization.

```javascript
app.onInitialize(function(){
  // Your init code
});

module.onInitialize(function(){
  // Your init code
});
```

Apps are initialized manually.
Modules registered with an app will initialize in the order they were added when app.initialize() is called.

```javascript
app.initialize();
```

Something like this is common.

```javascript
document.addEventListener('DOMContentLoaded', function(){
    app.initialize();
});
```

Why?
----

Imagine the code snippets below are in different files.
I wanted to be able to do something like this:

```javascript
(function(window){
    var app = window.app || Overworld.createApp();

    app.onInitialize(function(){
        // App init stuff
    });

    document.addEventListener('DOMContentLoaded', function(){
        app.initialize();
    });

    window.app = app;
})(window, document);
```

```javascript
(function(window){
    var app = window.app || Overworld.createApp();

    var mod = Overworld.createModule();

    mod.onInitialize(function(){
        // Module init stuff
    });

    app.register(mod);

    window.app = app;
})(window);
```

```javascript
(function(window){
    var app = window.app || Overworld.createApp();

    var mod = Overworld.createModule();

    mod.onInitialize(function(){
        // Module init stuff for another module
    });

    app.register(mod);

    window.app = app;
})(window);
```

That's why.