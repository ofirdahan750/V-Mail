export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    makeName,
    makeTitle,
    makeYear,
    makeMouth,
    makeDay,
    makeHour,
    makeMin,
    makeTxt,
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeName() {
    var possble = ['Curtis Stalling', 'Shemika Delee', 'Jeanette Biello', 'Leandro Goin', 'Mitchel Kells', 'Colin Cauley', 'Edwin Beutler', 'ofir dahan', 'Irvin Curtis','mom']   
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeTitle() {
    var possble = ['Answered: your most burning questions about this','How to take the headache out of mind','spam spam spam spam','Leandro Goin','Mitchel Kells','Colin Cauley','Dont forget about doctor appointment next week','Tommrow is the big day','5 ways to say in shape']
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeYear() {
    var possble = [2020,2019,2018,2017]
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeMouth() {
    var possble = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeDay() {
    var possble = [01 , 02 , 03 , 04 , 05 , 06 , 07 , 08 , 09 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28]
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeHour() {
    var possble = [01 , 02 , 03 , 04 , 05 , 06 , 07 , 08 , 09 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23]
    return possble[Math.floor(Math.random() * possble.length)]
}
function makeMin() {
    var possble = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59]
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeTxt() {
    var possble = ['here with INSERT COMPANY. You’ve been using our services for awhile, so I wanted to check in to see how things are going So, what questions can I answer? What features can I demo? What issues can I solve?', 'Id love to hop on a quick call to see how I can help. Are you free anytime tomorrow between INSERT TIME? If not then, let me know what works best for yo','everybody get one','remnider:call the office for meeting','Thank you for your endorsement on LinkedIn. As a person who gives professional advice to other people, I rely on what my peers, customers and partners are saying about me and the value I bring to each of you','Scripta periculis ei eam, te pro move','t reformidans. Pri posse graeco definitiones cu, id eam populo quaes','dont forget about next week','send me the work now','wowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww','bla bal blab lbalblalba']
    return possble[Math.floor(Math.random() * possble.length)]
}


