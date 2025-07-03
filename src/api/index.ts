import {Router} from 'express';

import emojis from './modules/modules.get';

const router = Router();


router.use('/modules', emojis);

export default router;
