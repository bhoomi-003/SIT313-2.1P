document.getElementById("submitbtn").addEventListener("click", () => {
    const email = document.querySelector("input[type='email']").value;
    if (email) {
        sendMail({
            to: email,
            from: "bhoominarula3@gmail.com",
            subject: "Welcome to our Daily Insider",
            text: "Thankyou for subscribing to our Daily Insider!"<br>
            "You will receive daily updates and insights directly to your inbox."
        })
        alert("Subscription successful! Check your email for updates.");
    }
})

document.getElementById("subscribe-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.querySelector("input[type='email']").value;
    if (email) {
        fetch("http://localhost:3000/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert("Subscription successful! Check your email for updates.");
                this.reset();
            } else {
                alert("Failed to subscribe. Please try again later.");
            }
        })
        .catch(() => {
            alert("Failed to subscribe. Please try again later.");
        });
    }
});
