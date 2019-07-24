// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );//

var browser = prompt('Введи название своего браузера');

  if(browser == 'IE'){
    alert('О, Да у Вас IE!')
  }else if (browser == 'Chrome') {
    alert('Да, и эти браузеры мы поддерживаем')
  }else if (browser == 'Firefox') {
    alert('Да, и эти браузеры мы поддерживаем')
  }else if (browser == 'Safari') {
    alert('Да, и эти браузеры мы поддерживаем')
  }else if (browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем')
  }else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
  }