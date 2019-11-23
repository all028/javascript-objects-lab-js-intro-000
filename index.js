//var recipes = { foo: 'bar' }

//var obj = Object.assign({},recipes)

function updateObjectWithKeyAndValue(obj, key, value){

  var x = Object.assign(obj, {key: value});
  return x;
}

function destructivelyObjectWithKeyAndValue(obj, key, value){

  return obj;
}

function deleteFromObjectByKey(obj, key, value){

  return obj;
}


function destructivelyDeleteFromObjectByKey(obj,key){

  return obj;
}
