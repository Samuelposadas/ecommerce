const validate = (input) => {
  let errors = {};
  if (input.rating < 1 || input.rating > 5) {
    errors.rating = "Rating should be greater than 1 and less than 5";
  }
  if (input.stock < 1) {
    errors.stock = "Stock should be greater than 1";
  }

  if (input.salePrice < 1) {
    errors.salePrice = "Sale price should be greater than 1";
  }
  if (input.purchasePrice < 1) {
    errors.purchasePrice = "Purchase price should be greater than 1";
  }
  input.supplier
    ? (errors.supplier = "")
    : (errors.supplier = "You must provide a supplier");
  input.name ? (errors.name = "") : (errors.name = "You must provide a name");
  input.description
    ? (errors.description = "")
    : (errors.description = "You must provide a description");
  input.categories.length === 0
    ? (errors.categories = "Choose at least one category")
    : (errors.categories = "");
  if (
    !input.imgTotal.includes("https://" || "http://") &&
    input.img.length === 0
  ) {
    errors.imgTotal = "This isn't a valid image address";
  } else {
    errors.imgTotal = "";
  }
  if (input.img.length === 0) {
    errors.img = "Image is required";
  } else {
    errors.img = "";
  }
  if (input.supplier === 0) {
    errors.supplier = "Supplier is required";
  } else {
    errors.supplier = "";
  }
  return errors;
};
export default validate;
