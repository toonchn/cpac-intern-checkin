document.getElementById('notifyButton').addEventListener('click', function() {
    sendLineNotify();
});

function sendLineNotify() {
    const token = 'qQKYjkS13QNomuUNJpszwTz8kKBvtaX0lrAMLPYXIHT'; // ใส่ token ของคุณที่นี่
    const message = 'ข้อความจากเว็บไซต์ของคุณ'; // ข้อความที่ต้องการส่ง

    fetch('https://notify-api.line.me/api/notify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        },
        body: `message=${encodeURIComponent(message)}`
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent!');
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}
