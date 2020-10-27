import React, {useEffect, useState} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead,
    TablePagination, TableRow, Grid } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { Data, Column } from '../../interfaces/client';
import { getClients, deleteClient } from "../../services/userService";

import useStyles from './TableStyles';

const columns: Column[] = [
    { id: 'firstname', label: 'Firstname', minWidth: 120 },
    { id: 'surname', label: 'Surname', minWidth: 120 },
    { id: 'address', label: 'Address', minWidth: 150 },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 120,
        align: 'right',
    },
    {
        id: 'ssn',
        label: 'SSN',
        minWidth: 120,
        align: 'right',
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 35,
        align: 'right',
    }
];

const TableClients: React.FC = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [rows, setRows] = useState([]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteRow = async (id: string) => {
        await deleteClient(id);
        setRows(prev => prev.filter((item => item["_id"] !== id)))
    }

    useEffect( () => {
        const getRows = async () => {
            const lists = await getClients();
            if(lists) setRows(lists.data);
        }
        getRows();
    }, [rows])

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: Data) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row["_id"]} >
                                    {columns.map((column) => {
                                        if(column.id === 'action')
                                            return (
                                            <TableCell key={column.id} align={column.align}>
                                                <Grid item xs={8} className={classes.icon}>
                                                    <DeleteOutlinedIcon onClick={ () => deleteRow(row["_id"])}/>
                                                </Grid>
                                            </TableCell>
                                            );
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}

                                </TableRow>
                            );
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableClients;