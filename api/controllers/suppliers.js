const { Supplier } = require("../db/db");

const postSupplier = async(req, res) => {
    const dataSupplier = req.body;
    try{
        const foundSupplier = await Supplier.findOne({where: {name: dataSupplier.name}})
        if(foundSupplier){
            res.send("Este proveedor ya se encuentra registrado");
        }else{
            await Supplier.create({
                name: dataSupplier.name,
                phone: dataSupplier.phone,
                email: dataSupplier.email
            })
            res.send("Proveedor creado con éxito")
        }
    }catch(error){
        console.log(error);
    }
}

module.exports= { postSupplier }