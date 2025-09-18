

// Form logic with slot machine
document.getElementById('badForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const zip = document.getElementById('zipcode').value;

    let error = "";

    if (name.includes(" ")) error += "Name cannot contain spaces.<br>";
    if (!email.endsWith("@timhortons.ca")) error += "Email must be @timhortons.ca.<br>";
    if (!/^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/.test(zip)) error += "Invalid postal code format.<br>";

    document.getElementById('errorMsg').innerHTML = error;

    if (!error) {
        // Simulate slot machine
        const slot1 = Math.floor(Math.random() * 10);
        const slot2 = Math.floor(Math.random() * 10);
        const slot3 = Math.floor(Math.random() * 10);

        document.getElementById('slotDisplay').textContent = `🎰 ${slot1} ${slot2} ${slot3}`;

        if (slot1 === 7 && slot2 === 7 && slot3 === 7) {
            alert("🎉 Jackpot! You're signed up for free coffee for life!");
        } else {
            alert("❌ Try again! You need to hit 7 7 7 to submit.");
        }
    }
});