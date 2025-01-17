function isPrime() {
    let num = document.getElementById('numberInput').value;
    num = parseInt(num);

    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }

    if (num <= 1) {
        alert(num + " is not a prime number.");
        return false; // Numbers less than or equal to 1 are not prime
    }
    if (num === 2) {
        alert(num + " is a prime number.");
        return true; // 2 is a prime number
    }
    if (num % 2 === 0) {
        alert(num + " is not a prime number.");
        return false; // Even numbers greater than 2 are not prime
    }

    // Check for factors from 3 to the square root of the number
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            alert(num + " is not a prime number.");
            return false; // If divisible, not prime
        }
    }

    alert(num + " is a prime number.");
    return true; // If no factors found, the number is prime
}
