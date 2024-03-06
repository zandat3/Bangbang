//base by Malibu
//re-upload? recode? copy code? give credit ya :)
//YouTube: @non
//Instagram: _m.a.l.i.b.u__
//Telegram: https://t.me/theetechpalace
//GitHub: @owlai01
//WhatsApp: +254712703241
//want more free bot scripts? subscribe to my telegram  channel: https://t.me/+cBmC5dzy78Y2YzA0

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
