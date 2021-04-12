function writeCards(names,events) {
  let messageArray=[];
  for (let i = 0; i <names.length; i++) {
    messageArray.push('Thank you, '+names[i]+', for the wonderful ' + events+' gift!');
  }
  return messageArray;
}
function countDown(i){
  while (i>=0) {
    console.log(i);
    i--;
  }
}
writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');
countDown(0);
