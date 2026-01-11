function checkStatus() {
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            alert('حالة النظام: ' + data.status + '\nالإصدار: ' + data.version);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('فشل الاتصال بالخادم');
        });
}

console.log('Alioun System Initialized...');