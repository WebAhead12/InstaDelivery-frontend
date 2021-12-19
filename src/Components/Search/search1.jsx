import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog() {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      name: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
    });

    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="productName"
        options={allProducts}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Search for a product..." />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new film</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="name"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const allProducts = [
  {
    id: "101",
    imgUrl: "/store/dairy/1 milk.jpg",
    name: "1% Milk",
    price: "10.90",
  },
  {
    id: "102",
    imgUrl: "/store/dairy/3 milk.jpg",
    name: "3% Milk",
    price: "10.90",
  },
  {
    id: "103",
    imgUrl: "/store/dairy/large yogurt.jpg",
    name: "Large Yogurt",
    price: "25.90",
  },
  {
    id: "104",
    imgUrl: "/store/dairy/eggs.jpg",
    name: "Eggs",
    price: "29.90",
  },

  {
    id: "105",
    imgUrl: "/store/dairy/oat milk.jpg",
    name: "Oat Milk",
    price: "11.90",
  },
  {
    id: "106",
    imgUrl: "/store/dairy/almond milk.jpg",
    name: "Almond Milk",
    price: "11.90",
  },
  {
    id: "107",
    imgUrl: "/store/dairy/hazelnut milk.jpg",
    name: "Hazelnut Milk",
    price: "11.90",
  },
  {
    id: "108",
    imgUrl: "/store/dairy/cashew milk.jpg",
    name: "Cashew Milk",
    price: "11.90",
  },
  {
    id: "109",
    imgUrl: "/store/dairy/soy milk.jpg",
    name: "Soy Milk",
    price: "11.90",
  },
  {
    id: "1010",
    imgUrl: "/store/dairy/coconut milk.jpg",
    name: "Coconut Milk",
    price: "11.90",
  },
  {
    id: "1011",
    imgUrl: "/store/dairy/chocolate soy milk.jpg",
    name: "Choc. Soy Milk",
    price: "11.90",
  },
  {
    id: "1012",
    imgUrl: "/store/dairy/vanilla soy milk.jpg",
    name: "Van. Soy Milk",
    price: "11.90",
  },
  {
    id: "1013",
    imgUrl: "/store/dairy/yellow cheese.jpg",
    name: "Yellow Cheese",
    price: ".90",
  },
  {
    id: "1014",
    imgUrl: "/store/dairy/mozzerella cheese.jpg",
    name: "Mozzerella",
    price: "19.90",
  },
  {
    id: "1015",
    imgUrl: "/store/dairy/cheddar.jpg",
    name: "Cheddar",
    price: "23.90",
  },

  {
    id: "201",
    imgUrl: "/store/bakery/bagels.jpg",
    name: "Bagels 1c.",
    price: "1.90",
  },
  {
    id: "202",
    imgUrl: "/store/bakery/baguette.jpg",
    name: "Baguettes 2c.",
    price: "2.90",
  },
  {
    id: "203",
    imgUrl: "/store/bakery/bread no gluten.jpg",
    name: "Gluten-free loaf",
    price: "12.90",
  },
  {
    id: "204",
    imgUrl: "/store/bakery/half baguettes.jpg",
    name: "Half-baguette 7c.",
    price: "4.90",
  },
  {
    id: "205",
    imgUrl: "/store/bakery/burger buns.png",
    name: "Burger Buns 4c.",
    price: "9.90",
  },
  {
    id: "206",
    imgUrl: "/store/bakery/wheat bread.jpg",
    name: "Wheat Loaf",
    price: "10.90",
  },
  {
    id: "207",
    imgUrl: "/store/bakery/white bread.jpg",
    name: "White Loaf",
    price: "10.90",
  },
  {
    id: "208",
    imgUrl: "/store/bakery/croissant.jpg",
    name: "Croissant 1c.",
    price: "1.90",
  },
  {
    id: "209",
    imgUrl: "/store/bakery/chocolate croissant.jpg",
    name: "Choc. Croissant",
    price: "1.90",
  },
];
