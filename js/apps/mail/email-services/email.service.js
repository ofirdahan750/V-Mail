import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js';

const EMAIL_KEY = 'emails';
const gEmail = _createEmails();

export const emailService = {
    query,
    getEmptyMail,
    remove,
    getById,
    save,
    post
}

function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}

function getById(id) {
    return storageService.get(EMAIL_KEY, id)
}


function query() {
    return storageService.query(EMAIL_KEY)
}



function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {

        emails = []
        let i = 0
        while (i < 10) {
            let newMail =

            {
                'id': utilService.makeId(), //random from util service
                'from': utilService.makeName(), //NAME OF THE THE the sender
                'title': utilService.makeTitle(), //title
                'text': utilService.makeTxt(), //txt body
                'year': utilService.randomDataYear(),//to-min random time unit
                'mouth': utilService.randomDataMouth(),
                'day': utilService.randomDataDay(),
                'hour': utilService.randomDataHour(),
                'min': utilService.randomDataMin(),
                'isRead': false,//IS THE MAIL READ,
                'isOpen':false,
                'isInbox':true
            }


            emails.push(newMail)
            i++
        }
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
    return emails
}
function save(email) {
    return storageService.put(EMAIL_KEY, email)
}
function post(email) {
    return storageService.post(EMAIL_KEY, email)

}


function getEmptyMail() {
    return {
        'id': utilService.makeId, //random from util service
        // 'from': utilService.makeName, //NAME OF THE THE the sender
        'title': '', //title
        'text': '', //txt body
        'year': new Date().getUTCFullYear(),//to-min random time unit
        'mouth': new Date().getUTCMonth() + 1,
        'day': new Date().getUTCDate(),
        'hour': new Date().getHours(),
        'min': new Date().getUTCMinutes(),
        'isRead': true,//IS THE MAIL READ
        'isOpen':false,
        'isInbox':false
    }
}