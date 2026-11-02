import {existsSync} from 'node:fs';
import {createRequire} from 'node:module';import {pathToFileURL} from 'node:url';
for(const file of ['.env.local','.env'])if(existsSync(file))process.loadEnvFile(file);
const command=process.argv[2];if(!['dev','build','start'].includes(command))throw new Error('使用 dev、build 或 start');
process.env.NEXT_TELEMETRY_DISABLED='1';const cli=createRequire(import.meta.url).resolve('next/dist/bin/next');
process.argv=[process.execPath,cli,command,...(command==='build'?[]:['--hostname',process.env.BIND_HOST||'127.0.0.1','--port',process.env.PORT||'43686']),...process.argv.slice(3)];await import(pathToFileURL(cli).href);


