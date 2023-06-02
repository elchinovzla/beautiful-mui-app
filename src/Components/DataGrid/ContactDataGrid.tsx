import React, {useCallback} from "react"
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useTheme, Theme } from "@mui/material/styles";
import { contactData } from "../../Data/ContactData";

const columns = (theme: Theme) => [
    {
        field: 'name',
        headerName: 'Name',
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams) => {
            return (<div>{cellValues.value}</div>)
        }
    },
    {
        field: 'role',
        headerName: 'Role',
        minWidth: 100,
        renderCell: (cellValues: GridRenderCellParams) => {
            return (<div>{cellValues.value}</div>)
        }
    },
    {
        field: 'skills',
        headerName: 'Skills',
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams) => {
            return (<div style={{color: theme.palette.primary.main}}>{cellValues.value ?  cellValues.value[0] : ''}</div>)
        }
    },
    {
        field: 'startDate',
        headerName: 'Start Date',
        minWidth: 120,
        renderCell: (cellValues: GridRenderCellParams) => {
            return (<div>{cellValues.value}</div>)
        }
    },
    {
        field: 'preference',
        headerName: 'Work Preference',
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams) => {
            return (<div>{cellValues.value}</div>)
        }
    }
];

const ContactDataGrid = () => {
    const rows = () => [...contactData];
    const theme = useTheme();

    return (
        <DataGrid
            autoHeight
            initialState={{
                pagination: {
                    paginationModel: {pageSize: 5}
                }
            }}
            pageSizeOptions={[1,2,5]}
            rows={rows()}
            columns={columns (theme)}
            columnHeaderHeight={60}
            rowHeight={120}
        />
    )
}

export default ContactDataGrid;