// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import Button from "@mui/material/Button";
// import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
// import allProducts from "../../Products/allProducts";
// const filter = createFilterOptions();

// function Search1() {
//   const [value, setValue] = React.useState(null);
//   const [open, toggleOpen] = React.useState(false);

//   const handleClose = () => {
//     setDialogValue({
//       name: "",
//     });

//     toggleOpen(false);
//   };

//   const [dialogValue, setDialogValue] = React.useState({
//     name: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setValue({
//       name: dialogValue.name,
//     });

//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           if (typeof newValue === "string") {
//             // timeout to avoid instant validation of the dialog's form.
//             setTimeout(() => {
//               toggleOpen(true);
//               setDialogValue({
//                 name: newValue,
//               });
//             });
//           } else if (newValue && newValue.inputValue) {
//             toggleOpen(true);
//             setDialogValue({
//               name: newValue.inputValue,
//             });
//           } else {
//             setValue(newValue);
//           }
//         }}
//         filterOptions={(options, params) => {
//           const filtered = filter(options, params);

//           if (params.inputValue !== "") {
//             filtered.push({
//               inputValue: params.inputValue,
//               title: `Add "${params.inputValue}"`,
//             });
//           }

//           return filtered;
//         }}
//         id="productName"
//         options={allProducts}
//         getOptionLabel={(option) => {
//           // e.g value selected with enter, right from the input
//           if (typeof option === "string") {
//             return option;
//           }
//           if (option.inputValue) {
//             return option.inputValue;
//           }
//           return option.name;
//         }}
//         selectOnFocus
//         clearOnBlur
//         handleHomeEndKeys
//         renderOption={(props, option) => <li {...props}>{option.name}</li>}
//         sx={{ width: 300 }}
//         freeSolo
//         renderInput={(params) => (
//           <TextField {...params} label="Search for a product..." />
//         )}
//       />
//       <Dialog open={open} onClose={handleClose}>
//         <form onSubmit={handleSubmit}>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               value={dialogValue.name}
//               onChange={(event) =>
//                 setDialogValue({
//                   ...dialogValue,
//                   name: event.target.value,
//                 })
//               }
//               label="name"
//               type="text"
//               variant="standard"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button type="submit">Add</Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </React.Fragment>
//   );
// }
// <allProducts />;

// export default Search1;
