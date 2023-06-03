const toParams = (params) => {
  return '?' + new URLSearchParams(params).toString();
}

export default toParams