function lpsTabs(arr)
{
    // lpsTabs({
    //     buttonShowAllTabs: false,                                // есть ли кнопка при нажатии на которую будут показаны все раздела табов, то есть items табов, по умолчнию false
    //     tabsButtonsParentElementClass: 'tab__titles',            // класс-обертка для кнопок табов, на которые будем нажимать ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОНЕНИЯ
    //     tabsItemsClass: 'tab__items',                            // класс для каждого раздела табов, группа елементов обединенных для показа одновременно при нажатии кнопки табов ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОНЕНИЯ
    //     tabsButtonActiveClass: 'tab__title_active',              // класс активности для кнопки табов ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОНЕНИЯ
    //     tabsItemActiveClass: 'tab__items_active',                // класс активности для раздела табов (группы item`ов) ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОНЕНИЯ
    // });

    if(typeof arr.buttonShowAllTabs == 'undefined') {               // если разработчик не указал показывать кнопку для показа всех табов примем, что ее показывать не надо
        arr.buttonShowAllTabs = false;
    }

    const tabsButtonsParentElement = document.querySelector('.' + arr.tabsButtonsParentElementClass),
            tabsButtons = tabsButtonsParentElement.children;
            tabsItems = document.getElementsByClassName(arr.tabsItemsClass);
    let currentButtonIndex;          // тут будет хранится индекс кликнутого элемента, чтобы понять какому элементу добавлять класс активности. Индекс будет вычисляться в зависимости от того пожелал ли разработчик видеть кнопку для всех items табов

    for(let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].addEventListener('click', function() {  // при клике на любую кнопку
            for(let tabsButton of tabsButtons) {                // уберем у всех кнопок класс активности
                tabsButton.classList.remove(arr.tabsButtonActiveClass);
            }

            for(let tabsItem of tabsItems) {                // уберем у всех разделов табов класс активности
                tabsItem.classList.remove(arr.tabsItemActiveClass);
            }

            if(arr.buttonShowAllTabs) {
                currentButtonIndex = (i - 1);           // если показываем кнопку при клике на которую будут показываться все items табов то индекс item`а табов будет на один меньше чем индекс текущей кнопки
            } else {
                currentButtonIndex = i;
            }

            if(currentButtonIndex < 0) {
                tabsButtons[0].classList.add(arr.tabsButtonActiveClass); // если нажали на кнопку которыя покажет все разделы табов

                for(let tabsItem of tabsItems) {                // вставим всем разделам табов класс активности
                    tabsItem.classList.add(arr.tabsItemActiveClass);
                }
            } else {
                tabsButtons[i].classList.add(arr.tabsButtonActiveClass);

                tabsItems[currentButtonIndex].classList.add(arr.tabsItemActiveClass);
            }
        });
    }
}