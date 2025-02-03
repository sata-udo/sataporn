function appendNumber(number) {
    document.getElementById('result').value += number;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = document.getElementById('result').value;
    
    // เมื่อกด "=" จะเปลี่ยนผลลัพธ์เป็นคำว่า "คิดถึง"
    document.getElementById('result').value = 'คิดถึง';
}
