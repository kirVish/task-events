/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const newButt = document.createElement('button');
    newButt.innerHTML = 'Удали меня';
    newButt.addEventListener('click', () => {
        newButt.remove();
    });
    document.body.append(newButt);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ulLi = document.createElement('ul');
    arr.map((element) => {
        const item = document.createElement('li');
        item.innerHTML = element;
        item.addEventListener('mouseover', () => {
            item.setAttribute('title', item.innerHTML);
        });
        ulLi.append(item);
    });
    document.body.append(ulLi);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.innerHTML = 'tensor';
    link.setAttribute('href', 'https://tensor.ru/');
    link.addEventListener('click', () => {
        link.innerHTML = link.innerHTML + ' ' + link.getAttribute('href');
    });
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ulli = document.createElement('ul');
    function newItem() {
        const item = document.createElement('li');
        item.innerHTML = 'Пункт';
        item.addEventListener('click', () => {
            item.innerHTML += '!';
        });
        ulli.append(item);
    }
    newItem();
    const newButt = document.createElement('button');
    newButt.innerHTML = 'Добавить пункт';
    newButt.addEventListener('click', newItem);
    document.body.append(ulli);
    document.body.append(newButt);
}
