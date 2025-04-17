// TODO: Include from themes package
import tokens from './_basis.token.json';
import tokenList from './_list.json';

export const TokenUses = ({ tokenType }) => {
  const tokenNames = tokenList
    .filter((token) => token.path[0] === 'basis' && token.path[1] === tokenType)
    .map((token) => token.path.join('.'))
    .sort();

  const tokenUses = {};
  for (const tokenName of tokenNames) {
    const uses = Array.from(findUses(tokenName, tokens));
    if (uses.length) {
      tokenUses[tokenName] = uses;
    }
  }

  return Object.keys(tokenUses).map((tokenName) => (
    <div key={tokenName}>
      <h3>{tokenName}</h3>
      <ul>
        {tokenUses[tokenName]?.map((tokenUse, index) => (
          <li key={tokenName + tokenUse + index}>
            <code>{tokenUse}</code>
          </li>
        ))}
      </ul>
    </div>
  ));
};

const findUses = (tokenName, obj, path = [], result = []) => {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    return result;
  }

  for (const key of Object.keys(obj)) {
    const deeperPath = path.concat(key);

    if (key === '$value' && obj.$value === `{${tokenName}}`) {
      result.push(path.slice(1).join('.'));
    } else {
      findUses(tokenName, obj[key], deeperPath, result);
    }
  }

  return result;
};
