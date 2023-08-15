import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditProduk = () => {
    const [namaProduk, setnamaProduk] = useState("");
    const [keterangan, setketerangan] = useState("");
    const [harga, setharga] = useState(0);
    const [jumlah, setjumlah] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProdukById();
    }, []);

    const updateProduk = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/produks/${id}`, {
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

    const getProdukById = async () => {
        const response = await axios.get(`http://localhost:5000/produks/${id}`);
        setnamaProduk(response.data.namaProduk);
        setketerangan(response.data.keterangan);
        setharga(response.data.harga);
        setjumlah(response.data.jumlah);
    }

    return (
        <div className="columns mt-5 is-centered is-mobile">
            <div className="column is-half">
                <div className="field">
                    <Link to={'/'} className="button is-danger">Back</Link>
                </div>
                <form onSubmit={updateProduk}>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduk;