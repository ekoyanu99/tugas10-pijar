import Produk from "../models/ProdukModel.js";

export const getProduks = async(req,res) =>{
    try {
        const response = await Produk.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messsage)
    }
}

export const getProduksById = async(req,res) =>{
    try {
        const response = await Produk.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messsage)
    }
}

export const createProduk = async(req,res) =>{
    try {
        await Produk.create(req.body);
        res.status(201).json({msg: "Produk Created"});
    } catch (error) {
        console.log(error.messsage)
    }
}

export const updateProduk = async(req,res) =>{
    try {
        await Produk.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg: "Produk Updated"});
    } catch (error) {
        console.log(error.messsage)
    }
}

export const deleteProduk = async(req,res) =>{
    try {
        await Produk.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg: "Produk Deleted"});
    } catch (error) {
        console.log(error.messsage)
    }
}