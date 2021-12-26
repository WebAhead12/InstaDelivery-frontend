import { AutoComplete } from "antd";

const Complete = (props) => {
  //find obj by name and return it;
  const findProduct = (name) => {
    const result = props.products.filter((item) => item.name === name);
    if (result.length) {
      return result[0];
    } else {
      return -1;
    }
  };
  const allItems = [
    ...props.products.map((item) => {
      return { value: item.name };
    }),
  ];
  const options = allItems;

  return (
    <AutoComplete
      allowClear
      style={{
        width: 200,
      }}
      options={options}
      placeholder="Search for a product here..."
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(searchWord) => {
        let item = { ...findProduct(searchWord) };
        if (!searchWord) {
          props.toggleTheSearchState();
          return;
        } else if (!item.name) {
          return;
        } else {
          props.toggleTheSearchState();
          item = { ...item, isSearched: true };
          props.updateItem(item);
        }
      }}
    />
  );
};

export default Complete;
