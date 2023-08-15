import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddProduk = () => {
    const [namaProduk, setnamaProduk] = useState("");
    const [keterangan, setketerangan] = useState("");
    const [harga, setharga] = useState(0);
    const [jumlah, setjumlah] = useState(0);
    const navigate = useNavigate();

    const saveProduk = async (e) => {
        e.preventDefault();
        try {
        await axios.post("http://localhost:5000/produks", {
            namaProduk,
            keterangan,
            harga,
            jumlah,
        });
        navigate("/");
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered is-mobile">
        <div className="column is-half">
            <div className="field">
                <Link to={'/'} className="button is-danger">Back</Link>
            </div>
            <form onSubmit={saveProduk}>
            <div className="field">
                <label className="label">Nama Produk</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                    value={namaProduk}
                    onChange={(e) => setnamaProduk(e.target.value)}
                    placeholder="Nama Produk"
                />
                </div>
            </div>
            <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setketerangan(e.target.value)}
                    placeholder="Keterangan"
                />
                </div>
            </div>
            <div className="field">
                <label className="label">Harga</label>
                <div className="control">
                <input
                    type="number"
                    className="input"
                    value={harga}
                    onChange={(e) => setharga(e.target.value)}
                    placeholder="Harga"
                />
                </div>
            </div>
            <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                <input
                    type="number"
                    className="input"
                    value={jumlah}
                    onChange={(e) => setjumlah(e.target.value)}
                    placeholder="Jumlah"
                />
                </div>
            </div>
            <div className="field">
                <button type="submit" className="button is-success">
                Save
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default AddProduk;