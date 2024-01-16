// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    foreignKey: "category_id",
    unique: false,
  },
  // alias for the association
  as: "versa_goods",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: "product_tag",
    unique: false,
  },
  // alias for the association
  as: "tag_blend",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: "tag_id",
  },
  // alias for the association
  as: "products",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  // alias for the association
  as: "products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
