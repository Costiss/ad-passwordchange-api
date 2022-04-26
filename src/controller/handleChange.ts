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
      res.status(200).json({ msg: 'Senha trocada com sucesso' });
    }
    if (exiitcode == 1) {
      res
        .status(500)
        .json({ msg: 'Senha incorreta ou não respeita politica de senhas' });
    }
  } else {
    res
      .status(500)
      .json({ msg: 'Não foram passados os parametros necessários' });
  }
});

export default router;
