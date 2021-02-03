import { useState } from 'react';

import { ColorsPropType } from '../prop-types/colors';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';

export const ColorTool = ({ colors: initialColors }) => {
  const [colors, setColors] = useState([...initialColors]);

  const addColor = (color) => {
    setColors([
      ...colors,
      {
        ...color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);
  };

  const deleteColor = colorId => {
    setColors(colors.filter(c => c.id !== colorId));
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: ColorsPropType,
};
