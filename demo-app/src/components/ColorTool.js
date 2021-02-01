export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'yellow' },
    { id: 2, name: 'teal' },
    { id: 3, name: 'orange' },
    { id: 4, name: 'blue' },
    { id: 5, name: 'green' },
  ];

  // const colorListItems = colors.map(color => {
  //   return <li key={color.id}>{color.name}</li>;
  // });

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
    </>
  );


};