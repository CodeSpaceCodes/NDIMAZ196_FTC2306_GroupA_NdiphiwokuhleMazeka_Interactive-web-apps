// scripts.js
/*added imports of the whole files and selected the required fields to log on console*/

// the imports could have been done differently by importing specifically the
// required variable but this method is prefered in the event the variables to
// be imported are a lot

import * as nwabisa from './nwabisa.js';
import * as johhanes from './johannes.js';
import * as alex from './alex.js'

console.log('Roles:', nwabisa.role, johhanes.role, alex.role)