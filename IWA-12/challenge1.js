// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

/* Pseudo code
*status for each book should be indicated
*action a user can perform on each book should also be indicated
*
*enable or disable buttons based on status in the statusMap object
*color of status indicator should correspond to the values in the statusMap abject
*
*/

/** books records in the server */
const books = {
    1 : {
        loadBook: document.querySelector('#book1')
    },
    2 : {
        loadBook: document.querySelector('#book2')
    },
    3 : {
        loadBook: document.querySelector('#book3')
    }
}

/**to loop through the available book records*/
for(let i = 1; i<4; i++){
    let bookStatus = books[i].loadBook.querySelector('.status').innerHTML
    books[i].loadBook.querySelector('.status').style.color = STATUS_MAP[`${bookStatus}`].color


    books[i].loadBook.querySelector('.reserve').disabled = !(STATUS_MAP[`${bookStatus}`].canReserve)
    books[i].loadBook.querySelector('.checkout').disabled = !(STATUS_MAP[`${bookStatus}`].canCheckout)
    books[i].loadBook.querySelector('.checkin').disabled = !(STATUS_MAP[`${bookStatus}`].canCheckIn)

}


// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
