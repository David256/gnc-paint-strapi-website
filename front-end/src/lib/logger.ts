import log from 'loglevel'

if (process.env.NODE_ENV === 'development') {
  log.setLevel('DEBUG')
} else {
  log.setLevel('WARN')
}

const logger = log

export default logger
