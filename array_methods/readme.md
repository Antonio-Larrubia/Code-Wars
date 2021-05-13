## Array.prototype.map()

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Syntax
```javascript
// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(element) { ... })
map(function callbackFn(element, index) { ... })
map(function callbackFn(element, index, array){ ... })
map(function callbackFn(element, index, array) { ... }, thisArg)
```
### Parameters

**callbackFn**

  Function that is called for every element of `arr`. Each time `callbackFn` executes, the returned value is added to `newArray`.
  The `callbackFn` function accepts the following arguments:
  
    **element**
    
        The current element being processed in the array.
    
    **indexOptional**
    
        The index of the current element being processed in the array.
    
    **arrayOptional**
    
        The array map was called upon.

**thisArgOptional**

    Value to use as this when executing callbackFn. 

## reduce
## filter
## forEach
## sort
## slice
## pop
## shift
## push
## unshift
## includes
## indexOf
## every