//Init constructor _X
function _X (itemName){
    var _clone = new __X();
    if(!itemName) return _clone;
    if(typeof itemName == "string"){
        for (var i = 1; i <= app.project.numItems; i++) {
            if (app.project.item(i).name == itemName) {
                _clone[i-1] = app.project.item(i);
            }
        }
    }
    if(typeof itemName == 'object' || typeof itemName == 'array'){_clone[0] = itemName;};
    return _clone; //returns object of matching items
}

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
    });
    return itemFound;
};
__X.prototype.each = function(fn, collection){ 
    var context = collection ? collection: this;
    if(typeof context == 'object'){
        for(var c in context){
            fn.call(context, context[c], c, context);
        }
    }
    if(typeof context == 'array'){
        for(var i = 0; i< context.length; i++){
            fn.call(context, context[i], context);
        }
    }
    return context;
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




