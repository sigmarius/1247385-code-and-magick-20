'use strict';

// загружает аватар пользователя

(function () {

  var FILE_TYPES = ['jpg', 'jpeg', 'png'];

  var fileInput = document.querySelector('.upload input[type=file]');
  var avatar = document.querySelector('.setup-user-pic');

  var avatarChangeHandler = function () {
    var file = fileInput.files[0];
    var fileName = file.name.toLowerCase();

    var extensionMatch = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (extensionMatch) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        avatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  window.setAvatarChangeHandler = function () {
    fileInput.addEventListener('change', avatarChangeHandler);
  };

})();
