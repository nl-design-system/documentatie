import tokens from '@nl-design-system-unstable/basis-design-tokens/dist/tokens.json';

export const RadixColorTable = () => {
  const colorNames = Object.keys(tokens.radix.color);
  return (
    <>
      <table className="utrecht-table sb-unstyled voorbeeld-theme">
        {/* <caption>Alle radix-kleuren</caption> */}
        <thead className="utrecht-table__header">
          <tr className="utrecht-table__row">
            <td></td>
            <th className="utrecht-table__cell" scope="col">
              1
            </th>
            <th className="utrecht-table__cell" scope="col">
              2
            </th>
            <th className="utrecht-table__cell" scope="col">
              3
            </th>
            <th className="utrecht-table__cell" scope="col">
              4
            </th>
            <th className="utrecht-table__cell" scope="col">
              5
            </th>
            <th className="utrecht-table__cell" scope="col">
              6
            </th>
            <th className="utrecht-table__cell" scope="col">
              7
            </th>
            <th className="utrecht-table__cell" scope="col">
              8
            </th>
            <th className="utrecht-table__cell" scope="col">
              9
            </th>
            <th className="utrecht-table__cell" scope="col">
              10
            </th>
            <th className="utrecht-table__cell" scope="col">
              11
            </th>
            <th className="utrecht-table__cell" scope="col">
              12
            </th>
          </tr>
        </thead>
        <tbody className="utrecht-table__body">
          {colorNames.map((colorName) => (
            <RadixColorRow key={colorName} colorName={colorName} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const RadixColorRow = ({ colorName }) => {
  const colorVariations = Object.entries(tokens.radix.color[colorName]).map(([key, value], index) => ({
    colorVariation: key,
    color: value['$value'],
    complementaryColor:
      index >= 10
        ? tokens.radix.color[colorName][colorName + '1']['$value']
        : tokens.radix.color[colorName][colorName + '12']['$value'],
  }));

  return (
    <tr className="utrecht-table__row">
      <th className="utrecht-table__cell" scope="row">
        {colorName}
      </th>
      {colorVariations.map(({ colorVariation, color, complementaryColor }) => (
        <RadixColorCell
          key={colorVariation}
          colorVariation={colorVariation}
          color={color}
          complementaryColor={complementaryColor}
        />
      ))}
    </tr>
  );
};

const RadixColorCell = ({ colorVariation, color, complementaryColor }) => {
  return (
    <td
      className="utrecht-table__cell"
      title={colorVariation}
      style={{ backgroundColor: color, color: complementaryColor, width: '3rem' }}
    >
      {colorVariation}
    </td>
  );
};
