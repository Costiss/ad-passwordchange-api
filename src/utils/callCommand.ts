import { spawn } from 'child_process';
import 'dotenv/config';
export const execute = async (
  user: string,
  oldPass: string,
  newPass: string
) => {
  return await new Promise((resolve) => {
    let server: string;
    if (process.env.SERVER) {
      server = process.env.SERVER;
    } else {
      server = '127.0.0.1';
    }

    const p = spawn('src/utils/change.sh', [user, server]);

    p.stdout.on('data', function (data) {
      console.log(data.toString());
    });

    p.stdin.write(`${oldPass}\n`);
    p.stdin.write(`${newPass}\n`);
    p.stdin.write(`${newPass}\n`);

    p.on('exit', (code) => {
      console.log(code);
      resolve(code);
    });
  });
};
