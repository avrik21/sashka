{
    const sectionMain = document.querySelector('.main-section')
    const sectionPoster = document.querySelector('.poster-section')
    const sectionTickets = document.querySelector('.tickets-section')
    const sectionContact = document.querySelector('.contact-section')
    const posterBtn = document.querySelector('.poster-btn')
    const logo = document.querySelector('.logo')
    const tickets = document.querySelector('.tickets')
    const contact = document.querySelector('.contact')
    const footerEnd = document.querySelector('.footer-end')
    const posters = document.querySelectorAll('.posters')

    posters[0].onclick = function (event) {
        let tag = event.target.tagName
        
        if (tag !== 'BUTTON') return

        sectionTickets.hidden = false
        sectionMain.hidden = true
        sectionPoster.hidden = true
        sectionContact.hidden = true
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }

    posters[1].onclick = function (event) {
        let tag = event.target.tagName
        
        if (tag !== 'BUTTON') return

        sectionTickets.hidden = false
        sectionMain.hidden = true
        sectionPoster.hidden = true
        sectionContact.hidden = true
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }

    logo.onclick = function () {
        sectionMain.hidden = false
        sectionPoster.hidden = true
        sectionTickets.hidden = true
        sectionContact.hidden = true
    }
    posterBtn.onclick = function () {
        sectionMain.hidden = true
        sectionPoster.hidden = false
        sectionTickets.hidden = true
        sectionContact.hidden = true
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }
    tickets.onclick = function () {
        sectionTickets.hidden = false
        sectionMain.hidden = true
        sectionPoster.hidden = true
        sectionContact.hidden = true
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }
    contact.onclick = function () {
        sectionTickets.hidden = true
        sectionMain.hidden = true
        sectionPoster.hidden = true
        sectionContact.hidden = false
        footerEnd.innerText = 'Сайт концертно-экскурсионных программ'
    }
}

{
    const month = document.querySelector('.month')
    const left = document.querySelector('.btn-left')
    const right = document.querySelector('.btn-right')

    let months = ['Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль']
    
    
    let i = 0
    month.innerText = months[i]
    left.onclick = function () {
        i = i - 1
        if (i == 11)  i = 0 
        if (i == -1) i = 11
        month.innerText = months[i]
    }
    right.onclick = function () {
        i = i + 1
        if (i == 11) i = 0
        month.innerText = months[i]
    }
}

{
    const ticketsBtn = document.querySelector('.tickets-btn')

    ticketsBtn.onclick = function () {
        alert('БИЛЕТ ЗАКАЗАН!!!')
    }
}