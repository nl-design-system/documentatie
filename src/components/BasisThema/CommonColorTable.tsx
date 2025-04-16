import { ColorSample } from '@utrecht/component-library-react';

// TODO: Include from themes package
import tokens from './_basis.token.json';
// import tokens from '@nl-design-system-unstable/basis-design-tokens/dist/tokens.json';

export const CommonColors = () => {
  const colorCategories = Object.entries(tokens.common.basis.color).filter(
    (colorCategory) => colorCategory[0] !== 'transparent',
  );
  return (
    <>
      {colorCategories.map((colorCategory) => (
        <CommonColorTable key={colorCategory[0]} colorCategory={colorCategory} />
      ))}
    </>
  );
};

const CommonColorTable = ({ colorCategory }) => {
  const colorTypeNames = Object.keys(colorCategory[1]);
  const colorCategoryName = colorCategory[0];
  return (
    <table>
      <caption>{colorCategoryName}</caption>
      <thead>
        <tr>
          <th scope="col">Tokennaam</th>
          <th scope="col">Defaultwaarde</th>
          <th scope="col">Kleurcode</th>
          <th scope="col">Kleur</th>
        </tr>
      </thead>
      <tbody>
        {colorTypeNames.map((colorTypeName) => (
          <CommonColorRow key={colorTypeName} colorCategoryName={colorCategoryName} colorTypeName={colorTypeName} />
        ))}
      </tbody>
    </table>
  );
};

const CommonColorRow = ({ colorCategoryName, colorTypeName }) => {
  const tokenName = `basis.color.${colorCategoryName}.${colorTypeName}`;
  const sourceTokenName = getCommonSourceTokenName(colorCategoryName, colorTypeName);
  const color = getCommonSourceTokenValue(colorCategoryName, colorTypeName);

  return (
    <tr>
      <th id={tokenName} scope="row" style={{ textAlign: 'left' }}>
        {tokenName}
      </th>
      <td>{sourceTokenName}</td>
      <td>
        <code>{color}</code>
      </td>
      <td>
        <ColorSample color={color} aria-labelledby={tokenName} />
      </td>
    </tr>
  );
};

const getTokenName = (tokenCode) => {
  // Remove "{" and "}" from beginning and end
  return tokenCode.substring(1, tokenCode.length - 1);
};

const getCommonSourceTokenName = (colorCategoryName, colorTypeName) => {
  const sourceTokenCode = tokens.common.basis.color[colorCategoryName][colorTypeName].$value;
  return getTokenName(sourceTokenCode);
};

const getCommonSourceTokenValue = (colorCategoryName, colorTypeName) => {
  const sourceTokenName = getCommonSourceTokenName(colorCategoryName, colorTypeName);
  const tokenPath = sourceTokenName.split('.');
  const colorValue = tokens.brand[tokenPath[0]][tokenPath[1]][tokenPath[2]][tokenPath[3]].$value;
  return colorValue;
};
