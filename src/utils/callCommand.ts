import { spawn } from 'child_process';
import 'dotenv/config';
import path from 'path';
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

    const p = spawn(path.join(__dirname, 'change.sh'), [user, server]);

    p.stdout.on('data', function (data) {
      console.log(data.toString());
    });

    p.stdin.write(`${oldPass}\n`);
    p.stdin.write(`${newPass}\n`);
    p.stdin.write(`${newPass}\n`);

    p.on('exit', (code) => {
      console.log(code);
      if (code === 127) {
        console.log('Please run:\n sudo apt install samba-common-bin');
      }
      resolve(code);
    });
  });
};
