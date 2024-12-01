export async function load(url, context, defaultLoad) {
  console.log(url, isCssFile(url));
  if (isCssFile(url) || isSassFile(url)) {
    // Ignore import
    return {
      source: '',
      format: 'module',
    };
  }

  return defaultLoad(url, context, defaultLoad);
}

const isCssFile = (url) => /\.css$/i.test(url);

const isSassFile = (url) => /\.(sass|scss)$/i.test(url);
