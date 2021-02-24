import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js';

const EMAIL_KEY = 'email';
const gEmail = _createEmails();

export const emailService = {
    query,
    getEmptyMail
}


function query() {
    return storageService.query(EMAIL_KEY)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {

        emails= []
        let i = 0
        while (i < 10) {
            let newMail = [
            
                {
                    'id': utilService.makeId(), //random from util service
                    'from': utilService.makeName(), //NAME OF THE THE the sender
                    'title':utilService.makeTitle(), //title
                    'text': utilService.makeTxt(), //txt body
                    'year': utilService.randomDataYear(),//to-min random time unit
                    'mouth': utilService.randomDataMouth(),
                    'day': utilService.randomDataDay(),
                    'hour': utilService.randomDataHour(),
                    'min': utilService.randomDataMin(),
                    'isRead':false//IS THE MAIL READ
                }
                
            ]
            emails.push(newMail)
            i++
        }
        utilService.saveToStorage(EMAIL_KEY , emails)
    }
    return emails
}



function getEmptyMail() {
    return {
        'id': utilService.makeId, //random from util service
        // 'from': utilService.makeName, //NAME OF THE THE the sender
        'title':'', //title
        'text': '', //txt body
        'year': new Date().getUTCFullYear(),//to-min random time unit
        'mouth': new Date().getUTCMonth()+1,
        'day': new Date().getUTCHours()+2,
        'hour': utilService.randomDataHour,
        'min': new Date().getUTCMinutes(),
        'isRead':true//IS THE MAIL READ
        }
}