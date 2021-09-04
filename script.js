function normalize(num) {
  // shift decimal place so that 0.1 <= num < 1
  var magnitude = Math.floor(Math.log10(num))
  return num / Math.pow(10, magnitude + 1)
}

function hash(secret) {
  var result = 1;
  for (var i = 0; i < secret.length; i++) {
    result *= Math.pow(i+2, secret[i].charCodeAt(0))
    result = normalize(result)
  }
  return result.toString(36).substring(2)
}

var logins = {
  'ziscenp5bod': 'ellabc23',
  '78vxjuih0e9' : 'mbialonchoy',
  '8qhm4wuo07' : 'CrazyKaylee',
  '6bt0uzblxxn' : 'yourusername',
  'es8rqqa3j6d' : 'MirrorLeafCup',
  'tboag73255s' : 'guest',
  '43hpaxbjl8n' : 'NinaChen',
  'gr43wz2tbph' : 'FredSlothigan',
  '7fvl7ibxue' : 'JocelynKwan',
  'p7pkoyjntyo' : 'kabla',
  'iovnflgp34f' : 'flower',
  '5a7uus5mg0s' : 'Paige',
  'a3516gwdb1n' : 'Brooklyn',
  '5qb6620tpv9' : 'Emma',
  
}

var logged_in_user = logins[hash(prompt('Enter your password'))];

if (logged_in_user) {
  window.location.href='https://ellabc23.github.io/crazyland/';
  alert(`Welcome, ${logged_in_user}`);
} else {
  alert('There is no user with that password. Try again or sign up! If you forgot, contact the owner.')
}





