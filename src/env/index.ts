// eslint-disable-next-line import/no-default-export
export default await (await fetch(require('./env.json'))).json()
