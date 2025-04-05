function ShowDiv()
{
    document.getElementById('ip').style.animation = 'animstart cubic-bezier(.3,.11,.25,.99) 0.5s';
    document.getElementById('ip').style.display = 'block';
}

function HideDiv()
{
    document.getElementById('ip').style.animation = 'animend cubic-bezier(.3,.11,.25,.99) 0.5s';
    setTimeout(() => document.getElementById('ip').style.display = '', 500)
}

function CopyIP()
{
    navigator.clipboard.writeText('Erillamc.online').then(function() {
        alert('Текст успешно скопирован в буфер обмена');
    }, function(err) {
        alert('Произошла ошибка при копировании текста: ', err);
    });
}

function Telegram()
{
    window.open('http://t.me/EnerillaMC');
}
