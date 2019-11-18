import Queue from 'bull'
import redisConfig from '../config/redis'

import jobs from '../jobs'
const queues = Object.values(jobs).map(job => {
  return ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options
  })
})

module.exports = {
  queues,
  add (name, data) {
    const queue = this.queues.find(queue => queue.name === name)
    console.log(name)

    return queue.bull.add(data, queue.options)
  },
  process () {
    return this.queues.forEach(queue => {
    //   console.log('queue', queue)

      queue.bull.process(queue.handle)

    //   queue.bull.on('failed', (job, err) => {
    //     console.log('Job failed', queue.key, job.data)
    //     console.log(err)
    //   })
    })
  }
}
