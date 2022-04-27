import { Request, Response, Router } from 'express';
import { execute } from '../utils/callCommand';
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const oldPass = req.body.oldPass;
  const newPass = req.body.newPass;
  const user = req.body.user;

  if (oldPass && newPass && user) {
    const exiitcode = await execute(user, oldPass, newPass);
    if (exiitcode == 0) {
      res.status(200).json({ msg: 'Password Changed successfully' });
    }
    if (exiitcode == 1) {
      res.status(500).json({
        msg: 'Password/User incorrect'
      });
    }
  } else {
    res.status(500).json({ msg: 'Empty parameters' });
  }
});

export default router;
