import 'dotenv/config'

import Queue from './libs/Queue'

const start = async () => {
  await Queue.add('getCoinsAndSave')
  await Queue.add('sendReport')
}
start()
Queue.process()
