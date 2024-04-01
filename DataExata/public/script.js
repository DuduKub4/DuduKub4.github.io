document.addEventListener('DOMContentLoaded', function () {
    axios.get('/datetime')
        .then(function (response) {
            document.getElementById('datetime').textContent = response.data.date;
        })
        .catch(function (error) {
            console.error('Erro ao obter data e hora:', error);
        });
});
