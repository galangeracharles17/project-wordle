import React from 'react';
function CategorySelection({
  handleAnswerCategory,
  setAnswerCategory,
  handleRestart,
}) {
  const [selectCategory, setSelectCategory] = React.useState('');

  const categoryValue = [
    { value: 'WORDS', textValue: 'General' },
    { value: 'COMPUTERS', textValue: 'Computers' },
    { value: 'ANIMALS', textValue: 'Animals' },
    { value: 'PLACES', textValue: 'Places' },
    { value: 'FOODS', textValue: 'Foods' },
  ];

  React.useEffect(() => {
    setAnswerCategory(selectCategory);
  }, [setAnswerCategory, selectCategory]);

  return (
    <select
      name='category'
      value={selectCategory}
      onChange={(event) => {
        handleRestart();

        const nextSelectCategory = event.target.value;

        setSelectCategory(nextSelectCategory);

        handleAnswerCategory(nextSelectCategory);
      }}
    >
      {' '}
      <option disabled value=''>
        Select Category
      </option>
      {categoryValue.map(({ value, textValue }, index) => (
        <option key={index} value={value}>
          {textValue}
        </option>
      ))}
    </select>
  );
}

export default CategorySelection;
