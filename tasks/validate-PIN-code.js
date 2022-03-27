// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    if (!pin) {
        return false
    }

    if([4,6].includes(pin.length) === false) {
        return false
    }

    const reg = new RegExp('^[0-9]*$');

    return reg.test(pin)
}
