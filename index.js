//var recipes = { foo: 'bar' }

//var obj = Object.assign({},recipes)

function updateObjectWithKeyAndValue(obj, key, value){

  var newObj = Object.assign({}, obj)
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;

  return obj;
}

function deleteFromObjectByKey(obj, key, value){

  return obj;
}


function destructivelyDeleteFromObjectByKey(obj,key){

  return obj;
}
