
// 1
//Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

  let promise = new Promise(function(resolve, reject){
    setTimeout(() =>{
    resolve('All right');
    }, 3000);
    });
    promise
    .then(
    result => {alert('All right');}
    );

// 2
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).
    let promise = new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error("Whoops!")), 3000);
    });

// 3
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
      };
      
      let array =[
      new Promise(function(resolve, reject){
      let waitTime = getRandom(1, 6);
      setTimeout(() =>{
      resolve(waitTime);
      }, waitTime * 1000);
      }),
      new Promise(function(resolve, reject){
      let waitTime = getRandom(1, 6);
      setTimeout(() =>{
      resolve(waitTime);
      }, waitTime * 1000);
      }),
      new Promise(function(resolve, reject){
      let waitTime = getRandom(1, 6);
      setTimeout(() =>{
      resolve(waitTime);
      }, waitTime * 1000);
      })
      ];
      
      function sumOfArr(arr){
      var sum = 0;
      for(var i = 0; i < arr.length; i++){
      sum += arr[i];
      };
      alert(sum);
      };
      
      Promise.all(array).then(results => sumOfArr(results));

// 4
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(result => result.filter(item => item.id % 2 === 0))
.then(result => console.log(result));*/

// 5
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1



let container = document.getElementById('1')

function createElement(title, body){
    let element = document.createElement(title);
    element.className = body;
    return element;
}

function createCard(data){
    data.forEach(el => {
        let card = createElement('div', 'card')
        let userName = createElement('h2', 'name')
        let userInfo = createElement('p', 'info')
        let {email, name, phone, website} = el
        userName.innerHTML = name
        userInfo.innerHTML = `email: ${email}, phone:${phone}, website: ${website}`;
        card.append(userName)
        card.append(userInfo)
        container.append(card)
    })
}

let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(res => createCard(res));

   // 6
   //Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. /////Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

    const container = document.getElementById("2")

    function createTodosContainer (title, isComplete) {
      let todoList = document.createElement("div");
      todoList.classList.add("todoList");
      let todoTitle = document.createElement("h2");
      let todoInput = document.createElement("input");
      todoInput.type= "checkbox";
      isComplete ? todoInput.setAttribute('checked', '') : '';
      todoTitle.append(title);
      todoList.append(todoTitle, todoInput);
      container.append(todoList);
    }

    function getUserById() {
      let userId = prompt('Введите число от 1 до 10')
      if(isNaN(userId) || userId === '' ){
          return alert('Это не ID')
      }else {
          return userId
      }
    }
    async function printTodos() {
      let userId = getUserById()
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      let result = await response.json()
      result.forEach(item => {
        let { title, complete } = item
        createTodosContainer(title, complete)
      })
    }

    printTodos()

//7
   // Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото

//Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

const container = document.getElementById("3")

async function getUsersPhotoes() {
  let response =await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
  let result = await response.json();
  result.forEach(element => {
    let img = document.createElement("img");
    img.classList.add("img");
    img.src =element.url;
    container.append(img)
  });
};

getUsersPhotoes()

container.addEventListener('click', event => {
  if(event.target.tagName === 'IMG') {
      togglePhotoesSize(event.target)
  }
})

function togglePhotoesSize(img) {
  img.classList.toggle("zoom")
}
