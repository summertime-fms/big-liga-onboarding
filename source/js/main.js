import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

import {initLoader} from './modules/init-loader';
import {showMore} from './modules/show-additional-info';


// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initLoader();
showMore();
