function writeCards(names,events) {
  // for (let i = 0; i <names.length; i++) {
  //   console.log(names[i]);
  // }
  let messageArray=[];
  for (let i = 0; i <names.length; i++) {
    messageArray[i]= ('thank you,' +names[i]+', for the wonderful ' + events+' gift');
  }
  for (var i = 0; i < messageArray.length; i++) {
    console.log(messageArray[i]);
  }
}
function countDown(i){
  while (i>=0) {
    console.log(i);
    i--;
  }
}
writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');
countDown(0);
