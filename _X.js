function _X (itemName){
    for (var i = 1; i <= app.project.numItems; i++) {
                if (app.project.item(i).name == itemName) {
                    return app.project.item(i);
                }
            }
    alert("Item does not exist", "_X Error");
    return _X;
};
//make sure to refer to this when callthing methods, then return this to make it chainable

//For CompItems
_X.prototype.getLayer = function (layerName){};
_X.prototype.hasLayer = function (layerName){};
_X.prototype.changeName = function(newName){};

//For FolderItems


//Debugging tools
_X.prototype.assert = function (condition, msg) {
    alert(msg, (condition ? "pass" : "fail"));
};