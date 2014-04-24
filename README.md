_X ~ An After Effects Scripting Library
==
`_X(name, itemType)` - Will return a single item based on two arguments. `itemType` arg is optional.

*Example* `_X('RenderComp', 'Composition').layers.add(newFootage);`

After trying to find the "jQuery" for After Effects scripting, I decided to start building out a library that offers robust features to help myself script in After Effects. I was simply tired of looping through the entire After Effects  project object to get a particular comp, folder or layer....

The goal of _X is to become a library for After Effects scripting that will help me write less & do more. Think of _X as the jQuery for After Effects.

==
_X os still currently still under development. While it is functional, it is not ready to be used in a live production of your next After Effects project! If you are interested in helping with developing this library, please feel free to checkout and contribute to this repo.

##Please note:
_X will return a single item object(the first one it finds) with the specified parameters(itemName, itemType). Unfortunately I cannot figure out how to return an array of objects that use the same name like jQuery will, due to the fact that you lose the ability to use native methods per the item's object type if you collect them into an array or map it to an object of a different type.
