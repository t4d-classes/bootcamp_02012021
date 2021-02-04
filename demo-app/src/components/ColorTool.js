import { useList } from '../hooks/useList';
import { ColorsPropType } from '../prop-types/colors';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';

export const ColorTool = ({ colors: initialColors }) => {
  const [colors, appendColor, , removeColor] = useList([...initialColors]);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
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
