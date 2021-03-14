
const importAll = (r:any) => {
  return r.keys().map((key:any) => r(key))
}

export default importAll(require.context('./type', true, /\.ts$/))
