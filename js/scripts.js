/* функция для открытия/закрытия блоков с текстом */
function toggle(target, tag) {
    var targetElement = document.getElementsByClassName(`${target}-wrapper`)[0]
    var openElements = document.getElementsByClassName('open')

    if (targetElement.classList.contains('open')) {
        var option = 'del'
    } else {
        var option = 'add'
    }

    if (openElements) {
        for (var i = 0; i < openElements.length; i++) {
            var element = openElements[i];
            if (element.classList.contains(tag)) {
                element.classList.remove('open');
            }
        }
    }

    if (option == 'del') {
        targetElement.classList.remove('open')
        //targetElement.previousElementSibling.firstElementChild.classList.replace('arrow-up', 'arrow-down')
    } else {
        targetElement.classList.add('open')
        //targetElement.previousElementSibling.firstElementChild.classList.replace('arrow-down', 'arrow-up')
    }
}

/* функция для копирования в буфер почтового адреса или телефона */
function copyToClipboard(value) {
    var message = document.getElementsByClassName('popup-message')[0]
    if (value == 'email') {
        navigator.clipboard.writeText('olkhovskii_aleksandr@mail.ru')
        message.textContent = 'Адрес почты скопирован!'
    } else {
        navigator.clipboard.writeText('+79520459157')
        message.textContent = 'Номер телефона скопирован!'
    }
    message.style.display = 'flex'
    fadeOut(message, 2500)
}

/* функция для анимации постепенного увеличения прозрачности попапа (эффект исчезновения) */
function fadeOut(element, duration) {
  let startingOpacity = 1;
  element.style.opacity = startingOpacity;

  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let opacity = 1 - (timeElapsed / duration);

    if (opacity < 0) opacity = 0;

    element.style.opacity = opacity;

    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function openCloseSkillsMenu(option) {
    document.getElementsByClassName('sidebar')[0].style.display = option == 'open' ? 'block' : 'none'
    document.getElementById('close-icon').style.display = option == 'open' ? 'block' : 'none'
}