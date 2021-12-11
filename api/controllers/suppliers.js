const { Supplier } = require("../db/db");

const postSupplier = async (req, res) => {
  const dataSupplier = req.body;
  try {
    const foundSupplier = await Supplier.findOne({
      where: { name: dataSupplier.name },
    });
    if (foundSupplier) {
      res.send("Este proveedor ya se encuentra registrado");
    } else {
      await Supplier.create({
        name: dataSupplier.name,
        phone: dataSupplier.phone,
        email: dataSupplier.email,
      });
      res.send("Proveedor creado con éxito");
    }
  } catch (error) {
    console.log(error);
  }
};

const getSuppliers = async (req, res) => {
  try {
    const dataGetSupplier = await Supplier.findAll();
    if (dataGetSupplier.length !== 0) {
      res.json(dataGetSupplier);
    } else {
      res.send("No se han encontrado Proveedores");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const delSupplier = req.params.id;
    if (isNaN(delSupplier)) {
      res.send("El id tiene que ser un número");
    } else {
      const findSupplier = await Supplier.findByPk(delSupplier);
      if (findSupplier == null) {
        res.send("No se pudo encontrar el Proveedor a eliminar");
      } else {
        await Supplier.destroy({
          where: {
            id: delSupplier,
          },
        });
        res.send("Proveedor eliminado con éxito");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postSupplier, getSuppliers, deleteSupplier };
