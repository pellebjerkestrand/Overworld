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
Modules registered with an app will initialize in the order they were added when the app.initialize() is called.

```javascript
app.initialize();
```

Something like this is common.

```javascript
document.addEventListener('DOMContentLoaded', function(){
    app.initialize();
});
```