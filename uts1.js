var majorBox = document.getElementById("majorBox");
var major = majorBox.options[majorBox.selectedIndex].text;
var nameBox = document.getElementById("nameBox");
var emailBox = document.getElementById("emailBox");
var phoneBox = document.getElementById("phoneBox");
var commentBox = document.getElementById("commentBox");
var totalWord = 0;
var wordLimit = 40;
var restrictedWord = ('anjing');

function restricted(word){
  return word.includes(restrictedWord);
}

function isNumber(int) {
  var numericFound = false;
  for (var i = 0; i < int.length; i++) {
    var code = int.charCodeAt(i);
    if (code > 47 && code < 58){ // numeric (0-9)
      numericFound = true;
      return numericFound;
    }
  }
  return numericFound;
}

function numberCounter(phone){
  var phoneLength = false;
  var phone = phoneBox.value;
  if(phone.length > 9 && phone.length < 13){
    phoneLength = true;
    return phoneLength;
  }
  return phoneLength;
}

function isWord(strng) {
  var alphaNumericFound = false;
    for (var i = 0; i < strng.length; i++) {
      var code = strng.charCodeAt(i);
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
  return alphaNumericFound;
}
  
function wordCounter(text) {
    var text = commentBox.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
        wordCount++;
      }
    }
    totalWord = wordCount;
}

function result() {
    wordCounter(commentBox.value);
    isNumber(phoneBox.value);
    numberCounter(phoneBox.value);

    if(totalWord > wordLimit){
      alert('Total word in comment section exceeds the limit (Max 40 words');
      document.getElementById("resultBox").innerHTML = '';
      wordCounter(commentBox.value);
    }
    else if(nameBox.value == '' || emailBox.value == '' || totalWord == 0 || majorBox.selectedIndex == 0){
      alert('Please fill all the form section');
      document.getElementById("resultBox").innerHTML = '';
      wordCounter(commentBox.value);
    }
    else if(restricted(commentBox.value) == true){
      alert("sorry, you can't use word '" + restrictedWord + "' in your comment. It's an inappropriate word!");
        
    }
    else if(isNumber(phoneBox.value) == false){
      alert('Please use number only for your phone number');
      document.getElementById("resultBox").innerHTML = '';
      isNumber(phoneBox.value);
    }
    else if(numberCounter(phoneBox.value == false)){
      alert('Please input a valid phone number (between 10-12 characters)');
      document.getElementById("resultBox").innerHTML = '';
      numberCounter(phoneBox.value);
    }
    else{
      document.getElementById("resultBox").innerHTML += 'Hi, ' + nameBox.value + '! From ' + major + '!! <br><br>';
      document.getElementById("resultBox").innerHTML += 'The email that you have submitted is ' + emailBox.value.replace('@', '(at)') + ".<br><br>";
      document.getElementById("resultBox").innerHTML += (commentBox.value) + '<br><br>';
      document.getElementById("resultBox").innerHTML += 'Phone Number : ' + phoneBox.value + '.<br>';
      document.getElementById("resultBox").innerHTML += 'Word Count   : ' + totalWord + '<br>';
    }
}

function resetAll(){
  totalWord = 0;
  nameBox.value = '';
  emailBox.value = '';
  phoneBox.value = '';
  commentBox.value = '';
  document.getElementById("nameBox").innerHTML = '';
  document.getElementById("emailBox").innerHTML = '';
  document.getElementById("commentBox").innerHTML = '';
  document.getElementById("phoneBox").innerHTML = '';
  document.getElementById("resultBox").innerHTML = '';
  majorBox.selectedIndex = 0;
}
