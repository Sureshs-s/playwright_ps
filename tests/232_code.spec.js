function getDenomination(amount) {
    const denominations = [500,200, ,50,20, 10,5, 2]; // using only these denominations
    const result = {};

    denominations.forEach(note => {
        const count = Math.floor(amount / note);
        if (count > 0) {
            result[`₹${note}`] = count;
            amount %= note;
        }
    });

    if (amount > 0) {
        console.log(`Remaining ₹${amount} can't be broken using specified denominations.`);
    }

    return result;
}

// Example usage:
const amount = 100008;
const breakdown = getDenomination(amount);
console.log(`Custom denomination for ₹${amount}:`);
for (const [note, count] of Object.entries(breakdown)) {
    console.log(`${note} x ${count}`);
}
