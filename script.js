const input = document.getElementById("inputValue");
const button = document.getElementById("convertBtn");
const clearButton = document.getElementById("clearBtn");
const result = document.getElementById("result");


// ASCII control character names
function getAsciiName(code) {

    const names = {
        0: "NUL",
        1: "SOH",
        2: "STX",
        3: "ETX",
        4: "EOT",
        5: "ENQ",
        6: "ACK",
        7: "BEL",
        8: "BS",
        9: "TAB",
        10: "LF",
        11: "VT",
        12: "FF",
        13: "CR",
        14: "SO",
        15: "SI",
        16: "DLE",
        17: "DC1",
        18: "DC2",
        19: "DC3",
        20: "DC4",
        21: "NAK",
        22: "SYN",
        23: "ETB",
        24: "CAN",
        25: "EM",
        26: "SUB",
        27: "ESC",
        28: "FS",
        29: "GS",
        30: "RS",
        31: "US",
        127: "DEL"
    };

    return names[code];
}


// ASCII control name → ASCII code
function getAsciiCode(name) {

    const names = {
        NUL: 0,
        SOH: 1,
        STX: 2,
        ETX: 3,
        EOT: 4,
        ENQ: 5,
        ACK: 6,
        BEL: 7,
        BS: 8,
        TAB: 9,
        LF: 10,
        VT: 11,
        FF: 12,
        CR: 13,
        SO: 14,
        SI: 15,
        DLE: 16,
        DC1: 17,
        DC2: 18,
        DC3: 19,
        DC4: 20,
        NAK: 21,
        SYN: 22,
        ETB: 23,
        CAN: 24,
        EM: 25,
        SUB: 26,
        ESC: 27,
        FS: 28,
        GS: 29,
        RS: 30,
        US: 31,
        DEL: 127
    };

    return names[name];
}


// Convert button
button.addEventListener("click", function () {

    const value = input.value;

    // Empty input
    if (value.length === 0) {

        result.textContent = "Please enter a character or ASCII code";
        result.className = "error";
        return;
    }


    // SPACE keyword
    if (value.toUpperCase() === "SPACE") {

        result.textContent = "ASCII Value = 32";
        result.className = "success";
        return;
    }


    // Control character name
    const controlCode = getAsciiCode(value.toUpperCase());

    if (controlCode !== undefined) {

        result.textContent = "ASCII Value = " + controlCode;
        result.className = "success";
        return;
    }


    // Single character → ASCII
    if (value.length === 1) {

        const ascii = value.charCodeAt(0);

        if (ascii >= 0 && ascii <= 127) {

            result.textContent = "ASCII Value = " + ascii;
            result.className = "success";

        } else {

            result.textContent = "Invalid ASCII Character";
            result.className = "error";
        }

        return;
    }


    // ASCII number → Character
    if (/^\d+$/.test(value)) {

        const ascii = Number(value);

        if (ascii >= 0 && ascii <= 127) {

            const name = getAsciiName(ascii);

            if (name) {

                result.textContent = "ASCII " + ascii + " = " + name;

            } else if (ascii === 32) {

                result.textContent = "ASCII 32 = Space";

            } else {

                const character = String.fromCharCode(ascii);

                result.textContent = "Character = " + character;
            }

            result.className = "success";

        } else {

            result.textContent = "Invalid ASCII Code";
            result.className = "error";
        }

        return;
    }


    // Everything else → Invalid Input
    result.textContent = "Invalid Input";
    result.className = "error";

});


// Clear button
clearButton.addEventListener("click", function () {

    input.value = "";
    result.textContent = "";
    result.className = "";

    input.focus();

});


// Enter key
input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        button.click();

    }

});