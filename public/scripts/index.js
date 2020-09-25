
var button = document.querySelector('.header__menuButton');
button.addEventListener('click', function () {
  var menu = document.querySelector('.header__navigation');

  if (menu.classList.contains('header__navigation_active')) {
    menu.classList.remove('header__navigation_active');
  } else {
    menu.classList.add('header__navigation_active');
  }
});











var date_moved = false;

if (document.getElementById('date-from')) {
  var picker = new Lightpick({
    field: document.getElementById('date-from'),
    secondField: document.getElementById('date-to'),
    singleDate: false,
    format: "DD.MM.YYYY",
    autoclose: false,
    footer: true,
    minDate: moment(),
    maxDate: moment().add(1, 'year'),
    locale: {
      buttons: {
        prev: 'arrow_backward',
        next: 'arrow_forward',
        close: '×',
        reset: 'Очистить',
        apply: 'Применить'
      }
    },
    onSelect: function onSelect(start, end) {
      var str = '';
      str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
      str += end ? end.format('Do MMMM YYYY') : '...'; //  document.getElementById('result-3').innerHTML = str;
    }
  }); //Костылище :D

  document.querySelectorAll('.cards__date-label').forEach(function (label) {
    return label.onclick = function () {
      var div_lightpick = document.querySelector('.lightpick');

      if (parseInt(div_lightpick.style.left.slice(0, -2)) > 16) {
        div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
      } else {
        div_lightpick.style = "left: calc(50% - 160px); top: ".concat(parseInt(div_lightpick.style.top) + 15, "px;");
      }

      div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
      date_moved = true;
    };
  });
}

//Global variables
var boxes = document.querySelectorAll('.dropdown');
var focus = undefined; //expand

document.body.onclick = function (e) {
  var target = e.target;

  if (focus) {
    if (!focus.contains(target)) {
      focus.querySelector('.dropdown__full').classList.remove('dropdown__full_visible');
      focus = undefined;
    }
  }
};

boxes.forEach(function (box) {
  var expand = box.querySelector('.cards__input');

  expand.onclick = function (event) {
    dropdown__full = box.querySelector('.dropdown__full');

    if (dropdown__full.classList.contains('dropdown__full_visible')) {
      dropdown__full.classList.remove('dropdown__full_visible');
      focus = undefined;
    } else {
      if (focus) {
        focus.querySelector('.dropdown__full').classList.remove('dropdown__full_visible');
      }

      dropdown__full.classList.add('dropdown__full_visible');
      focus = dropdown__full.parentElement;
    }
  };
});
//less and more in dropdown
var more = document.querySelectorAll(".dropdown__button_more");
var less = document.querySelectorAll(".dropdown__button_less");
more.forEach(function (button) {
  button.onclick = function (event) {
    val = button.parentElement.querySelector(".dropdown__input").value++;
    button.parentElement.querySelector(".dropdown__button_less").style = "opacity:1";
  };
});
less.forEach(function (button) {
  button.onclick = function (event) {
    val = button.parentElement.querySelector(".dropdown__input").value;

    if (val > 0) {
      button.parentElement.querySelector(".dropdown__input").value--;
      val--;
    }

    val == 0 ? button.style = "opacity:0.25" : button.style = "opacity:1";
  };
});
//apply and reset
var actions = document.querySelectorAll('.dropdown__footer');
actions.forEach(function (action) {
  reset = action.querySelector('.dropdown__reset');

  reset.onclick = function () {
    dropdown_full = action.parentElement;
    less = dropdown_full.querySelectorAll('.dropdown__button_less');
    inputs = dropdown_full.querySelectorAll(".dropdown__input");
    console.log(dropdown_full);
    inputs.forEach(function (input) {
      return input.value = 0;
    });
    less.forEach(function (button) {
      button.style = "opacity:0.25";
    });
  };
});
firstGuest = function firstGuest(x) {
  if (x == 0) {
    return false;
  } else if (x == 1) {
    return x + ' гость';
  } else {
    if (x < 5) {
      return x + ' гостя';
    } else {
      return x + ' гостей';
    }
  }
};

secondGuest = function secondGuest(x) {
  if (x == 0) {
    return false;
  } else if (x == 1) {
    return x + ' ребенок';
  } else {
    if (x < 5) {
      return x + ' ребенка';
    } else {
      return x + ' детей';
    }
  }
};

thirdGuest = function thirdGuest(x) {
  if (x == 0) {
    return false;
  } else if (x == 1) {
    return x + ' младенец';
  } else {
    if (x < 5) {
      return x + ' младенца';
    } else {
      return x + ' младенцев';
    }
  }
};

var applyGuest = document.querySelector('.dropdown__apply_guests');

textChangeGuests = function textChangeGuests() {
  expand = applyGuest.parentElement.parentElement.parentElement.querySelector('.cards__input');
  var inputs = expand.parentElement.querySelectorAll('.dropdown__input');
  var threeDots = false; //многоточие

  text = '';

  if (firstGuest(inputs[0].value)) {
    text += ', ' + firstGuest(inputs[0].value);
    threeDots = true;
  }

  if (secondGuest(inputs[1].value)) {
    text += ', ' + secondGuest(inputs[1].value);
    threeDots = true;
  }

  if (thirdGuest(inputs[2].value)) {
    if (!(firstGuest(inputs[0].value) && secondGuest(inputs[1].value))) {
      text += ', ' + thirdGuest(inputs[2].value);
      threeDots = true;
    }
  }

  if (threeDots) {
    text += '...';
  }

  text = text.substring(1);

  if (text == '') {
    text = 'сколько гостей';
  }

  expand.querySelector('.cards__input-text').value = text;
  console.log("changed!");
};

applyGuest.onclick = function () {
  textChangeGuests();
  expand.onclick();
}; //window.onload =textChangeGuests;




