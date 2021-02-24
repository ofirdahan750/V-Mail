import { utilService } from '../util.service.js'
import { storageService } from './async-storage.service.js'

const EMAIL_KEY = 'email'
const gEmail = [
{
    'id': utilService.makeId, //random from util service
    'from': utilService.makeName, //NAME OF THE THE the sender
    'title':utilService.makeTitle, //title
    'text': utilService.makeTxt, //txt body
    'year': utilService.randomDataYear,//to-min random time unit
    'mouth': utilService.randomDataMouth,
    'day': utilService.randomDataDay,
    'hour': utilService.randomDataHour,
    'min': utilService.randomDataMin,
    'isRead':false//IS THE MAIL READ
    }
]