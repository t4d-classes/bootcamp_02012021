export const ColorList = (props) => {

  const colorListItems = props.colors.map(color => {

    const deleteColor = () => props.onDeleteColor(color.id);
  
    return (
      <li key={color.id}>
        {color.name}
        <button type="button"
          onClick={deleteColor}>
            X
        </button>
      </li>
    ); 
  });

  return (
    <ul>
      {colorListItems}
    </ul>
  );

};