let isOpen = false //поумолчанию окно закрыто

function openMenu() {
    const navimob = document.getElementById("myNaviMob")

    if(isOpen) {  //контенейр открыт
        navimob.style.display = "none" //контейнер закрываем
        isOpen = false // задаётся переменная для того чтобы зафикировать резултат
    } else { //контейнр закрыт
        navimob.style.display = "flex" //контейнер открываем
        isOpen = true // задаётся переменнвя для того чтобы зафиксировать результат
    }

    
}