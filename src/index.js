import 'babel-polyfill';

import { el, setChildren } from "redom";
import Cleave from 'cleave.js';
import Card from './assets/image/card.jpg';
import Amex from './assets/image/amex.png';
import Back from './assets/image/back.png';
import Dankort from './assets/image/dankort.png';
import Diners from './assets/image/diner.png';
import Discover from './assets/image/discover.png';
import Front from './assets/image/front.png';
import Instapayment from './assets/image/instapayment.png';
import Jsb from './assets/image/jsb.png';
import Mastercard from './assets/image/mastercard.png';
import Mir from './assets/image/mir.png';
import Uatp from './assets/image/uatp.png';
import Unionpay from './assets/image/unionpay.png';
import Visa from './assets/image/visa.png';
var validator = require("email-validator");


const container = document.querySelector('.container');
container.style.maxWidth = '100vw';
container.style.height = '100vh';
container.style.padding = "30vh 50px 30px 50px";
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const background = el('div', {
  style: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    filter: "blur(5px)",
    backgroundImage: `url(${Card})`,
    backgroundSize: "cover",
    zIndex: "-1"
  }
})

const card = el('div', {
  style: {
    position: "relative",
    display: "none",
  }
}, { id: "card-brand" },
  el('div.front', {
    style: {
      position: "absolute",
      width: "538px",
      height: "340px",
      // backgroundImage: "url('https://i.yapx.ru/QKLNC.png')",
      backgroundImage: `url(${Front})`,
      backgroundSize: "cover",
      backfaceVisibility: "hidden",
      transition: "transform .6s linear",
      transform: "perspective(1000px) rotateY(0deg)",
    }
  },
    el('div.front-brand', {
      style: {
        position: "absolute",
        top: "35px",
        right: "40px",
        width: "100px",
        height: "70px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }
    }),
    el('div.front-num', {
      style: {
        position: "absolute",
        fontSize: "36px",
        top: "175px",
        left: "90px",
        fontWeight: "600",
        color: "silver",
        textShadow: "2px 2px black",
      }
    }),
    el('div.front-date', {
      style: {
        position: "absolute",
        fontSize: "22px",
        top: "233px",
        left: "282px",
        fontWeight: "600",
        color: "silver",
        textShadow: "2px 2px black",
      }
    }),
  ),
  el('div.back', {
    style: {
      position: "relative",
      width: "538px",
      height: "340px",
      // backgroundImage: "url('https://i.yapx.ru/QKLOO.png')",
      backgroundImage: `url(${Back})`,
      backgroundSize: "cover",
      backfaceVisibility: "hidden",
      transition: "transform .6s linear",
      transform: "perspective(1000px) rotateY(-180deg)",
    }
  },
    el('div.front-cvv', {
      style: {
        position: "absolute",
        top: "180px",
        right: "70px",
        fontSize: "22px",
        fontWeight: "600",
        color: "#333",
      }
    })));

const form = el("form.d-flex.flex-row.flex-wrap.align-items-baseline.align-content-between", {
  style: {
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // alignItems: "baseline",
    // alignContent: "space-between",
    width: "100%",
    maxWidth: "538px",
    height: "340px",
    padding: "15px 15px",
    border: "1px solid #333",
    borderRadius: "10px",
    // fontFamily: "Oswald",
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
},
  el("input.input.mb-3.card-num", {           // номер карты
    style: {
      width: "100%",
      maxWidth: "310px",
      padding: "5px 10px",
      marginRight: "15px",
      border: "1px solid #eee",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    }
  }, { type: "text", placeholder: "XXXX-XXXX-XXXX-XXXX" }),
  el("p", "Card Number", {
    style: {
      // fontFamily: "Oswald",
      fontSize: "20px"
    }
  }),
  el("input.input.mb-3.card-date", {         //"дата окончания действия карты"
    style: {
      width: "100%",
      maxWidth: "310px",
      padding: "5px 10px",
      marginRight: "15px",
      border: "1px solid #eee",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    }
  }, { type: "text", placeholder: `${month}/${String(year).substr(-2, 2)}` }),
  el("p", "VALID THRU", {
    style: {
      // fontFamily: "Oswald",
      fontSize: "20px"
    }
  }),
  el("input.input.mb-3.card-cvv", {           // cvv
    style: {
      width: "100%",
      maxWidth: "310px",
      padding: "5px 10px",
      marginRight: "15px",
      border: "1px solid #eee",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    }
  }, { type: "text", placeholder: "CVC/CVV" }),
  el("p", "CVC/CVV", {
    style: {
      // fontFamily: "Oswald",
      fontSize: "20px"
    }
  }),
  el("input.input.mb-3.card-email", {         // email
    style: {
      width: "100%",
      maxWidth: "310px",
      padding: "5px 10px",
      marginRight: "15px",
      border: "1px solid #eee",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    }
  }, { type: "email", placeholder: "E-mail" }),
  el("p", "E-mail", {
    style: {
      // fontFamily: "Oswald",
      width: "90px",
      fontSize: "20px"
    }
  }),
  el("input.btn.btn-primary.card-btn", {
    style: {
      width: "130px",
      padding: "5px 20px",
      // fontFamily: "Oswald",
      fontSize: "20px",
    }
  }, { type: "submit", value: "PAY", disabled: "true" }));
setChildren(container, background, form, card);

const cleaveNum = new Cleave(".card-num", {
  creditCard: true,
  delimiter: " ",
  onCreditCardTypeChanged: function (type) {
    const frontBrand = document.querySelector('.front-brand');
    const cardBrand = document.getElementById("card-brand"),
      visa = "visa",
      mastercard = "mastercard",
      amex = "amex",
      diners = "diners-club",
      jcb = "jcb",
      discover = "discover",
      mir = "mir",
      instapayment = "instapayment",
      dankort = "dankort",
      unionPay = "unionPay",
      uatp = "uatp";

    switch (type) {
      case "visa":
        cardBrand.setAttribute("class", visa);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKN0et.png')";
        frontBrand.style.backgroundImage = `url(${Visa})`;
        break;
      case "mastercard":
        cardBrand.setAttribute("class", mastercard);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOCHt.png')";
        frontBrand.style.backgroundImage = `url(${Mastercard})`;
        break;
      case "amex":
        cardBrand.setAttribute("class", amex);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOECt.png')";
        frontBrand.style.backgroundImage = `url(${Amex})`;
        break;
      case "diners":
        cardBrand.setAttribute("class", diners);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOGet.png')";
        frontBrand.style.backgroundImage = `url(${Diners})`;
        break;
      case "jcb":
        cardBrand.setAttribute("class", jcb);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOH1t.png')";
        frontBrand.style.backgroundImage = `url(${Jsb})`;
        break;
      case "discover":
        cardBrand.setAttribute("class", discover);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOKXt.png')";
        frontBrand.style.backgroundImage = `url(${Discover})`;
        break;
      case "mir":
        cardBrand.setAttribute("class", mir);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOLct.png')";
        frontBrand.style.backgroundImage = `url(${Mir})`;
        break;
      case "instapayment":
        cardBrand.setAttribute("class", instapayment);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKONat.png')";
        frontBrand.style.backgroundImage = `url(${Instapayment})`;
        break;
      case "dankort":
        cardBrand.setAttribute("class", dankort);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKORT.png')";
        frontBrand.style.backgroundImage = `url(${Dankort})`;
        break;
      case "unionPay":
        cardBrand.setAttribute("class", unionPay);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOS6t.png')";
        frontBrand.style.backgroundImage = `url(${Unionpay})`;
        break;
      case "uatp":
        cardBrand.setAttribute("class", uatp);
        // frontBrand.style.backgroundImage = "url('https://i.yapx.ru/QKOXd.png')";
        frontBrand.style.backgroundImage = `url(${Uatp})`;
        break;
      default:
        cardBrand.setAttribute("class", "");
        frontBrand.style.backgroundImage = "";
        break;
    }
  },
});

const cleaveDate = new Cleave(".card-date", {
  date: true,
  datePattern: ["m", "y"],
});

const cleaveCCV = new Cleave(".card-cvv", {
  numeral: true,
  numeralIntegerScale: 3,
});

showDate();

document.querySelector('.card-num').addEventListener('blur', function () {
  const cardBrand = document.getElementById("card-brand");
  const type = cardBrand.classList.value;
  if (type === "visa" || type === "jcb" || type === "discover" || type === "mastercard" || type === "unionPay" || type === "dankort" || type === "mir" || type === "instapayment") {
    if (document.querySelector('.card-num').value.length < 19) {
      document.querySelector('.card-num').value = '';
    }
  }

  if (type === "amex" || type === "uatp") {
    if (document.querySelector('.card-num').value.length < 17) {
      document.querySelector('.card-num').value = '';
    }
  }

  if (type === "diners-club") {
    if (document.querySelector('.card-num').value.length < 16) {
      document.querySelector('.card-num').value = '';
    }
  }

  if (type === '') {
    document.querySelector('.card-num').value = '';
  }
})

function previousDataCard() {
  document.querySelector('.card-num').addEventListener('blur', function (elem) {
    const dateCard = document.querySelector('.card-date');
    const frontNum = document.querySelector('.front-num');
    if (elem.target.value !== '') {
      document.querySelector('#card-brand').style.display = 'block';
      document.querySelector('.front-num').textContent = elem.target.value;
    } else {
      frontNum.textContent = '';
    }
    if (elem.target.value === '' && dateCard.value === '') {
      document.querySelector('#card-brand').style.display = 'none';
    }
  });

  document.querySelector('.card-date').addEventListener('blur', function (elem) {
    const cardNum = document.querySelector('.card-num');
    if (elem.target.value !== '') {
      document.querySelector('#card-brand').style.display = 'block';
      document.querySelector('.front-date').textContent = elem.target.value;
    } else {
      frontDate.textContent = '';
    }
    if (elem.target.value === '' && cardNum.value === '') {
      document.querySelector('#card-brand').style.display = 'none';
    }
  });

  document.querySelector('.card-cvv').addEventListener('blur', function (elem) {
    if (elem.target.value !== '') {
      document.querySelector('.front-cvv').textContent = elem.target.value;
    } else {
      document.querySelector('.front-cvv').textContent = '';
    }
  });
}
previousDataCard();

function validateEmail() {
  document.querySelector('.card-email').addEventListener('blur', function () {
    if (validator.validate(document.querySelector('.card-email').value) === false) {
      document.querySelector('.card-email').value = '';
    }
  })
}
validateEmail();

function flipСard() {
  document.querySelector('.card-cvv').addEventListener('focus', function () {
    setTimeout(() => {
      document.querySelector('.front').style.transform = "perspective(1000px) rotateY(-180deg)";
      document.querySelector('.back').style.transform = "perspective(1000px) rotateY(0deg)";
    }, 700);
  })

  document.querySelector('.card-cvv').addEventListener('blur', function () {
    setTimeout(function () {
      document.querySelector('.back').style.transform = "perspective(1000px) rotateY(-180deg)";
      document.querySelector('.front').style.transform = "perspective(1000px) rotateY(0deg)";
    }, 700);
  })
}
flipСard();


function showDate() {
  document.querySelector('.card-date').addEventListener('blur', function (element) {
    const cardMonth = document.querySelector('.card-date').value.substr(0, 2).replace(/[^0-9]/g, '');
    const cardYear = document.querySelector('.card-date').value.substr(-2, 2);
    const d1 = new Date(20 + cardYear, cardMonth - 1)
    if (d1 <= date) {
      element.target.value = '';
    }
  })
}


function showButton() {
  const numCard = document.querySelector('.card-num');
  const dateCard = document.querySelector('.card-date');
  const cvvCard = document.querySelector('.card-cvv');
  const emailCard = document.querySelector('.card-email');
  document.querySelectorAll('.input').forEach((elem) => {
    elem.addEventListener('blur', () => {
      if (numCard.value != '' && dateCard.value != '' && cvvCard.value != '' && emailCard.value != '') {
        document.querySelector('.card-btn').removeAttribute("disabled");
      } else {
        document.querySelector('.card-btn').setAttribute("disabled", "disabled");
      }
    })
  })
  document.querySelector('.card-btn').addEventListener('click', e => e.preventDefault());
}
showButton();
