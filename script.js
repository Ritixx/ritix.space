function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
// Feedback Handling
document.querySelector('.submit-btn').addEventListener('click', () => {
    const feedback = document.querySelector('.feedback-input').value;
    if(feedback.trim()) {
        alert('Thank you for your feedback! 🙏');
        document.querySelector('.feedback-input').value = '';
    } else {
        alert('Please write something before submitting!✍️');
    }
});