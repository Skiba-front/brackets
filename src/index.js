module.exports = function check(str, bracketsConfig) {

  if(typeof str !== 'string'){
    return false;
  }

  let res = [],
      open = [],
      close = [],
      chars = str.split(''),
      openIndex,
      closeIndex;

  for(let i = 0; i < bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < chars.length; i++) {
    openIndex = open.indexOf(chars[i]);

    if (openIndex !== -1 && close.indexOf(chars[i]) === -1){
      res.push(openIndex);
      continue;

    }
    if (openIndex !== -1 && close.indexOf(chars[i]) !== -1 && res.indexOf(openIndex) === -1){
      res.push(openIndex);
      continue;

    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
      openIndex = res.pop();
      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }

  if (res.length !== 0) {
    return false;
  } else {
    return true;
  }    


}
