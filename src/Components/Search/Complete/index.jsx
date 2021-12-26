import { AutoComplete } from "antd";
import { findProduct } from "../../../utils/functions";

const Complete = (props) => {
  //map the array to match the ant-design component requirement for auto complete.
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
        let item = { ...findProduct(props.products, searchWord) };
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
