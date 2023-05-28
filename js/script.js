function changeTheme () {
  let element = document.querySelector(".btn_theme");  
  const theme = document.querySelector("#theme_link");
  if (theme.getAttribute("href") == "style/index_light.css") {
    theme.href = "style/index_dark.css";
    element.textContent = 'Светлая';
  } else {
    theme.href = "style/index_light.css";
    element.textContent = 'Темная';
  }
}

const array_day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const array_month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

function getDayInfo (get_date) {
  var d = new Date(get_date[6]+get_date[7]+get_date[8]+get_date[9]+"-"+get_date[3]+get_date[4]+"-"+get_date[0]+get_date[1]);
  var day = d.getDay(); 
  var weekOfMonth = (0 | d.getDate() / 7)+1;
  return array_day[day] + ", " + weekOfMonth+" неделя " + array_month[d.getMonth()] + " " + d.getFullYear() + " года";
}

const array_day_add = ["01.01.2022", "15.12.2021", "04.07.2019", "25.09.2020", "04.11.2021", "18.03.2022", "11.02.2021", "23.05.2019", "03.12.2021", "10.09.2019", "21.12.2022", "31.07.2020", "27.10.2022", "08.04.2021", "15.10.2021", "10.03.2023", "16.02.2021", "03.11.2020", "19.01.2018", "24.02.2020", "11.10.2019", "11.09.2021", "08.01.2020", "20.08.2019", "23.05.2022", "29.12.2021", "16.03.2020", "04.03.2021", "17.01.2020", "07.01.2023", "27.09.2019", "26.01.2019", "18.01.2019", "21.09.2022", "31.12.2019", "02.09.2020", "10.12.2021"];

for (let i = 0; i < array_day_add.length; i++) {
  document.getElementById("dayInfo_"+i).innerHTML = getDayInfo(array_day_add[i]);
}


const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 50 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();


function openForm() {
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
}

function closeForm() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
  document.getElementById("form").reset();
}


function buyForm() {
  alert("Покупка совершена!");
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
  document.getElementById("form").reset();
}