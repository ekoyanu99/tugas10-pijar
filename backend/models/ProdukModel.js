import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Produk = db.define('produk',{
    namaProduk: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
},{
    freezeTableName:true,
    timestamps: false,
})

export default Produk;

(async()=>{
    await db.sync();
})();