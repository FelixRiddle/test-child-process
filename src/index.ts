import { spawn } from 'child_process';

// SHow colors
process.env.FORCE_COLOR = 'true';

const npmCmd = spawn('npm', ['run', 'dev'], {
    cwd: "/home/felix/Repositories/Javascript/interactive-terminal",
    // Is it good that it uses the env of this app? Dunno
    env: process.env
});

npmCmd.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});

npmCmd.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});

npmCmd.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

npmCmd.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
