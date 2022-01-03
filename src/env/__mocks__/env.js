// eslint-disable-next-line import/no-default-export
export default Object.fromEntries(
  Object.entries(process.env).filter(([k]) => k.startsWith('REACT_APP_'))
)
