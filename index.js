

function writeCards(name, gift) {
    let thearray = []
    for(let i = 0;i< name.length;i++) {
        thearray.push(`Thank you, ${name[i]}, for the wonderful ${gift} gift!`)
         }
         return thearray
}
function countDown(number) {
    while (number > (-1)) {
      console.log(number--);
      }
    }
    countDown(10)