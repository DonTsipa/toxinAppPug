







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
var firstFacility = function firstFacility(x) {
  if (x == 0) {
    return false;
  } else if (x == 1) {
    return x + ' спальня';
  } else {
    if (x < 5) {
      return x + ' спальни';
    } else {
      return x + ' спальн';
    }
  }
};

var secondFacility = function secondFacility(x) {
  if (x == 0) {
    return false;
  } else if (x == 1) {
    return x + ' кровать';
  } else {
    if (x < 5) {
      return x + ' кровати';
    } else {
      return x + ' кроватей';
    }
  }
};

var thirdFacility = function thirdFacility(x) {
  if (x == 0) {
    return false;
  } else if (x == 1) {
    return x + ' ванная комната';
  } else {
    if (x < 5) {
      return x + ' ванных комнаты';
    } else {
      return x + ' ванных комнат';
    }
  }
};

var applyFacility = document.querySelector('.dropdown__apply_facilities');

textChange = function textChange() {
  expand = applyFacility.parentElement.parentElement.parentElement.querySelector('.cards__input');
  var inputs = expand.parentElement.querySelectorAll('.dropdown__input');
  var threeDots = false; //многоточие

  text = '';

  if (firstFacility(inputs[0].value)) {
    text += ', ' + firstFacility(inputs[0].value);
    threeDots = true;
  }

  if (secondFacility(inputs[1].value)) {
    text += ', ' + secondFacility(inputs[1].value);
    threeDots = true;
  }

  if (thirdFacility(inputs[2].value)) {
    if (!(firstFacility(inputs[0].value) && secondFacility(inputs[1].value))) {
      text += ', ' + thirdFacility(inputs[2].value);
      threeDots = true;
    }
  }

  if (threeDots) {
    text += '...';
  }

  text = text.substring(1);

  if (text == '') {
    text = 'удобства';
  }

  expand.querySelector('.cards__input-text').value = text;
};

applyFacility.onclick = function () {
  textChange();
  expand.onclick();
}; //window.onload =textChange;











if (document.getElementById('datepicker_single')) {
  var picker = new Lightpick({
    field: document.getElementById('datepicker_single'),
    singleDate: false,
    format: "DD.MM.YYYY",
    autoclose: true,
    hideOnBodyClick: true,
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
  });

  datepicker_move = function datepicker_move() {
    var div_lightpick = document.querySelector('.lightpick');

    if (parseInt(div_lightpick.style.left.slice(0, -2)) > 16) {
      div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
    } else {
      div_lightpick.style = "left: calc(50% - 160px); top: ".concat(parseInt(div_lightpick.style.top) + 15, "px;");
    }

    div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
  };

  document.querySelectorAll('.datepicker__label').forEach(function (label) {
    label.addEventListener("click", datepicker_move);
  });
}

;
var picker = new Lightpick({
  field: document.getElementById('birthdate'),
  singleDate: true,
  format: "DD.MM.YYYY",
  autoclose: true,
  hideOnBodyClick: true,
  footer: true,
  maxDate: moment(),
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
});

datepicker_move = function datepicker_move() {
  var div_lightpick = document.querySelector('.lightpick');

  if (parseInt(div_lightpick.style.left.slice(0, -2)) > 16) {
    div_lightpick.style.left = parseInt(div_lightpick.style.left) - 16 + "px";
  } else {
    div_lightpick.style = "left: calc(50% - 160px); top: ".concat(parseInt(div_lightpick.style.top) + 15, "px;");
  }

  div_lightpick.style.top = parseInt(div_lightpick.style.top) + 15 + "px";
};

document.querySelectorAll('.datepicker__label').forEach(function (label) {
  label.addEventListener("click", datepicker_move);
});




var button = document.querySelector('.header__filtersButton');
var rooms = document.querySelector('.rooms');
var main = document.querySelector('.main_theme-search');
button.addEventListener('click', function () {
  var filters = document.querySelector('.filters_theme-search');

  if (filters.classList.contains('filters_theme-search_active')) {
    filters.classList.remove('filters_theme-search_active');
    rooms.classList.remove('rooms_disable');
    main.style = "0";
  } else {
    filters.classList.add('filters_theme-search_active');
    rooms.classList.add('rooms_disable');
    main.style = "max-height:760px";
  }
});

var sliders = document.querySelectorAll('.range__slider');
var priceMin = document.getElementById('price-min');
var priceMax = document.getElementById('price-max');
var priceMininput = document.getElementById('range__priceMin');
var priceMaxinput = document.getElementById('range__priceMax'); //let priceMaxinput = 

var white_space = function white_space(str) {
  return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

sliders.forEach(function (slider) {
  noUiSlider.create(slider, {
    start: [priceMininput.value, priceMaxinput.value],
    connect: true,
    step: 500,
    range: {
      'min': 0,
      'max': 20000
    }
  });
  slider.noUiSlider.on('update', function (values, handle) {
    value = Math.round(values[handle]);

    if (handle) {
      priceMax.innerHTML = white_space(value) + "Р";
      priceMaxinput.value = value;
    } else {
      priceMin.innerHTML = white_space(value) + "Р";
      priceMininput.value = value;
    }
  });
});



var sliders = document.querySelectorAll('.roomcard__slider');
sliders.forEach(function (slider) {
  var buttons = slider.querySelectorAll('.roomcard__paginationButton');
  var slides = slider.querySelector('.roomcard__images');
  buttons[0].classList.add('roomcard__paginationButton_active');
  buttons.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
      var activeButton = slider.querySelector('.roomcard__paginationButton_active');
      activeButton.classList.remove('roomcard__paginationButton_active');
      event.target.classList.add('roomcard__paginationButton_active');
      slides.style.right = "".concat(index * 100, "%");
    });
  });
  slides.addEventListener('mouseover', function (event) {
    var timeout = null;
    var positionNow = slides.style.right.slice(0, -1);
    var activeIndex = positionNow / 100;

    var swipe = function swipe() {
      if (activeIndex < buttons.length - 1) {
        buttons[activeIndex + 1].click();
      } else {
        buttons[0].click();
      }
    };

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      timeout = setTimeout(swipe, 500);
    } else {
      // код для обычных устройств
      timeout = setTimeout(swipe, 1000);
    }

    slides.addEventListener('mouseout', function () {
      clearTimeout(timeout);
    });
  });

  slides.ondragstart = function () {
    return false;
  };

  slides.addEventListener('mousedown', function (mousedownEvent) {
    var downX = mousedownEvent.clientX;
    var right = slides.style.right;

    var swipe = function swipe(event) {
      event.target.onclick = function (e) {
        e.preventDefault();
      };

      var shiftX = downX - event.clientX;
      var positionNow = slides.style.right.slice(0, -1);
      var activeIndex = positionNow / 100;

      if (shiftX < 0) {
        if (activeIndex > 0) {
          buttons[activeIndex - 1].click();
        }
      } else {
        if (activeIndex < buttons.length - 1) {
          buttons[activeIndex + 1].click();
        }
      }
    };

    slides.addEventListener('mousemove', swipe);
    document.addEventListener('mouseup', function () {
      slides.removeEventListener('mousemove', swipe);

      mousedownEvent.target.onclick = function () {};
    });
  });
});




var firstNumber = document.querySelector('.pagination__button');
firstNumber.classList.add('pagination__button_active');