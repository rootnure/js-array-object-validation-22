/**
 * 1. if ticket count is less than 100, per ticket price: 100
 * 2. if ticket count is more than 100 but less than 200
 *      first 100 ----> 100tk.
 *      100+ ----> 90tk.
 * 3. if you purchase more than 200 tickets
 *      first 100 ----> 100tk.
 *      101-200 ----> 90tk.
 *      200+ ----> 75tk.
 */

function ticketCost(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 75;
    let total = 0;
    if (ticketQuantity <= 100) {
        total = first100Rate * ticketQuantity;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = first100Rate * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = second100Rate * restTicketQuantity;
        total = first100Price + restTicketPrice;
    }
    else {
        const first100Price = first100Rate * 100;
        const second100Price = second100Rate * 100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketRate * restTicketQuantity;
        total = first100Price + second100Price + restTicketPrice;
    }
    return total;
}

const finalCost = ticketCost(1000);
console.log(finalCost);