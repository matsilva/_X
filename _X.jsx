//Init constructor _X
function _X (itemName){
    //Need to load all name matches into an array, then auto iterate over array in each method.
    this.itemFound = false;
    if(!itemName) return new __X();
    var item, xClone = new __X ()
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i).name == itemName) {
            item = app.project.item(i);
        }
    }
    if(typeof itemName == 'object' || typeof itemName == 'array'){item = itemName};
    if(!item){return new __X();}
    if(item) {this.itemFound = true;}
    for (var prop in item) {
        xClone[prop] = item[prop];
    }
    return xClone;
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
    if(this.typeName != 'Folder') return;
    var _childFolders = new Object;
        if(!name){
               for(var i = 1; i <= this.numItems; i++){
                    _childFolders[this.item(i).name] = this.item(i);
               }
           return _childFolders;
        }
    var _childFolder = app.project.items.addFolder(name);
    _childFolder.parentFolder = this;
    return this;
    };
//Utilities
__X.prototype.exists = function (itemType) {
    //item type is optional arg
    if(this.itemFound == false) return false;
    if(itemType && !(this.typeName == itemType)) return false;
    return true;
};
__X.prototype.each = function(fn){
    if(typeof this == 'object'){
        for(var c in this){
                fn.call(this, this[c], c, this);
        }
    }
    if(typeof this == 'Array'){
        for(var i = 0; i< this.length; i++){
            fn.call(this, this[i], this);
        }
    }
}
//Debugging tools
__X.prototype.alertName = function(){
    alert(this.name);
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




