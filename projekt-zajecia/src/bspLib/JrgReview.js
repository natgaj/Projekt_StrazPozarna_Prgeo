import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { BSP_data } from "./jrg_data";
import { getItem } from "localforage";
import "./JrgLib.css"


function List_review() {
    const filterd_data = BSP_data;
    const style = {
        border: "2px solid grey",
        borderRadius: "5px",
        margin: "1vh 1vw",
        display: "flex",
        justifyContent: "flex-end",
    };
    return (
        <div className="lib_main">
            <h1 className="lib_tilte" > LISTA JEDNOSTEK RATOWNICZO-GAŚNICZYCH W WARSZAWIE </h1>
            <div className="block_review" style={style}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size='xx-small' aria-label="a dense table" className="custom_table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}> Lp.</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Nazwa</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Specjalizacja</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Dowódca</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Zastępca dowódcy</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Ulica</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Kod pocztowy</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Miasto</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Telefon</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Email</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Logo</TableCell>
                                <TableCell align="center" style={{ color: "black", fontSize: "20px" }}>Więcej</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterd_data.map((row) => (
                                <TableRow
                                    hover
                                    key={row.prop.key}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.prop.key}
                                    </TableCell>
                                    <TableCell align="left">{row.prop.NAZWA}</TableCell>
                                    <TableCell align="left">{row.prop.SPECJALIZACJA}</TableCell>
                                    <TableCell align="left">{row.prop.DOWODCA}</TableCell>
                                    <TableCell align="right">{row.prop.ZASTEPCADOWODCY}</TableCell>
                                    <TableCell align="right">{row.prop.ULICA}</TableCell>
                                    <TableCell align="right">{row.prop.KODPOCZTOWY}</TableCell>
                                    <TableCell align="center">{row.prop.MIASTO}</TableCell>
                                    <TableCell align="center">{row.prop.TELEFON}</TableCell>
                                    <TableCell align="center">{row.prop.EMAIL}</TableCell>
                                    <TableCell align="center">
                                        <img
                                            src={row.prop.LOGO}
                                            alt="Logo"
                                            style={{ width: "130px", height: "150px" }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to={row.prop.key}>
                                            <ManageSearchIcon />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    );
}

export default List_review;
