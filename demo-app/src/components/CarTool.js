import { ToolHeader } from './ToolHeader';
import { CarTableContainer } from '../containers/CarTableContainer';
import { AddCarFormContainer } from '../containers/AddCarFormContainer';
import { ToolFooter } from './ToolFooter';

export const CarTool = () => {
  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTableContainer />
      <AddCarFormContainer />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );
};
