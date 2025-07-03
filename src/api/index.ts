import {Router} from 'express';

import emojis from './emojis/emojis';

const router = Router();


router.use('/emojis', emojis);

export default router;
