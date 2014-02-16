//Init _X
function _X (itemName){
    if(!itemName) return new _X();
    var item;
    this.getItem = function(itemName){
       for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i).name == itemName) {
            return app.project.item(i);
        }
    }};
    item = this.getItem(itemName);
    item.prototype = new _X();
    
    return item;
};
//make sure to refer to this when calling methods, then return this to make it chainable

//For CompItems
_X.prototype.getLayer = function (layerName){};
_X.prototype.hasLayer = function (layerName){};
_X.prototype.changeName = function(newName){};
_X.prototype.alertName = function(){
    alert(this.name);
};

//For FolderItems


//Debugging tools
_X.prototype.assert = function (condition, msg) {
    alert(msg, (condition ? "pass" : "fail"));
};


