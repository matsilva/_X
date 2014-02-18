//Init constructor _X
function _X (itemName){
    this.itemFound = false;
    if(!itemName) return new __X();
    var item = new Array, _clone = new Array;
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i).name == itemName) {
            item.push(app.project.item(i));
        }
    }
    if(typeof itemName == 'object' || typeof itemName == 'array'){item.push(itemName);};
    if(!item[0]){return new __X();}
    if(item[0]) {this.itemFound = true;} //this needs to be set dynamically in the exists function
    for(var i = 0; i < item.length; i++){
        _clone[i] = new __X();
        for (var prop in item[i]) {
            _clone[i][prop] = item[i][prop];
        }
    }
    return _clone; //returns cloned array of items
}
//make sure to refer to this when calling methods, then return this to make it chainable

//Define private superclass
function __X(){}
//For CompItems
__X.prototype.getLayer = function (layerName){};
__X.prototype.hasLayer = function (layerName){};
__X.prototype.changeName = function(newName){};

//For FolderItems
__X.prototype.childFolder = function(name){
    this.each(function(val){
        if(val.typeName != 'Folder') return;
        var _childFolders = new Object;
            if(!name){
                   for(var i = 1; i <= val.numItems; i++){
                        _childFolders[val.item(i).name] = val.item(i);
                   }
               return _childFolders;
            }
        var _childFolder = app.project.items.addFolder(name);
        _childFolder.parentFolder = val;
    });
    return this;
    };
//Utilities
__X.prototype.exists = function (itemType) {
    //item type is optional arg
    var itemFound = false;
    this.each(function(val){
        if(itemType && !(val.typeName == itemType)){
          itemFound = true;  
        }
    }
    return itemFound;
};
__X.prototype.each = function(fn){
    if(typeof this == 'object'){
        for(var c in this){
                fn.call(this, this[c], c, this);
        }
    }
    if(typeof this == 'array'){
        for(var i = 0; i< this.length; i++){
            fn.call(this, this[i], this);
        }
    }
    return this;
}
//Debugging tools
__X.prototype.alertName = function(i){
    alert(this[i].name);
    return this;
};
__X.prototype.assert = function (condition, msg) {
    alert(msg, (condition ? "pass" : "fail"));
};

__X.prototype.findError = function(codeblock){
        try{
                eval(codeblock)
        }catch(e){
                
        }
    }




