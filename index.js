var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({}, object, { [key]: value })
}

    function updateObjectWithObject(targetObject, updatesObject) {
      return Object.assign({}, targetObject, updatesObject)
    }