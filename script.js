function checkPalindrome() {
  const textInput = document.getElementById('textInput');
  const text = textInput.value;

  if (!text) {
    alert("Please input a value");
    return;
  }

  const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedText = cleanedText.split('').reverse().join('');
  const isPalindrome = cleanedText === reversedText;
  const resultText = isPalindrome ? `${text} is a palindrome` : `${text} is not a palindrome`;

  document.getElementById('result').innerText = resultText;
}