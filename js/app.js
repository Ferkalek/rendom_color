/**
 * Created by Anton Ferkalek on 07.04.2016.
 */

function shuffle(count) {
    var temporaryValue,
        randomIndex,
        array = [
        {
            main: '#cccccc',
            hover: '#999999'
        },
        {
            main: '#FF0000',
            hover: '#C70000'
        },
        {
            main: '#0041FF',
            hover: '#0033C7'
        },
        {
            main: '#00FDFF',
            hover: '#00B2B3'
        },
        {
            main: '#00F94E',
            hover: '#00B338'
        },
        {
            main: '#EC00F9',
            hover: '#C501D0'
        },
        {
            main: '#7900FB',
            hover: '#6501D0'
        },
        {
            main: '#DEFB00',
            hover: '#ABC100'
        },
        {
            main: '#FF8F01',
            hover: '#C16C00'
        },
        {
            main: '#019FFF',
            hover: '#007DCA'
        },
        {
            main: '#8A6D3B',
            hover: '#7B633A'
        },
        {
            main: '#3C763D',
            hover: '#3A673A'
        },
    ],
    currentIndex = array.length,
    minArray;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    minArray = array.slice(0, count);
    return minArray;
}

console.log(shuffle(5));