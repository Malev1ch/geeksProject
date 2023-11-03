const botToken = '6889571988:AAFtzKWBAFPk1FZwnaMjODWEcDybytjfvY8';
const chatId = '555248828';
        document.getElementById('sendMessage').addEventListener('click', () => {
            const input1Value = document.getElementById('input1').value;
            const input2Value = document.getElementById('input2').value;
            const message = `Здраствуйте! Поступила заявка на обратный звонок \nИмя: ${input1Value}\nНомер телефона: ${input2Value}`;

            const xhr = new XMLHttpRequest();
            xhr.open('POST', `https://api.telegram.org/bot${botToken}/sendMessage`, true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

            const data = JSON.stringify({
                chat_id: chatId,
                text: message
            });

            xhr.send(data);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Сообщение отправлено:', xhr.responseText);
                } else if (xhr.readyState === 4 && xhr.status !== 200) {
                    console.error('Ошибка отправки сообщения:', xhr.status, xhr.statusText);
                }
            };
        });

// 
document.getElementById('sendMessage').addEventListener('click', function () {
    var modal = document.getElementById('sendMessageModal');
    modal.style.display = 'block';
});

document.getElementById('closeModalSendMessageModal').addEventListener('click', function () {
    var modal = document.getElementById('sendMessageModal');
    modal.style.display = 'none';
});
// 