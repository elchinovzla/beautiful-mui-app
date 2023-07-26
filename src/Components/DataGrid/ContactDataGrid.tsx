import { Box, Button } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import {
  DataGrid,
  GridRenderCellParams,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";

const handlePrintClick = (cellValues: GridRenderCellParams) => {
  console.log(cellValues);
};

const datagridSx = {
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "primary.main",
    fontWeigth: "bold",
    fontSize: 20,
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": { backgroundColor: "grid.main" },
    },
  },
};

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <Box sx={{ color: "primary.main", fontSize: 18, fontWeight: "bold" }}>
          {cellValues.value}
        </Box>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams) => {
      return <div>{cellValues.value}</div>;
    },
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value ? cellValues.value[0] : ""}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams) => {
      return <div>{cellValues.value}</div>;
    },
  },
  {
    field: "preference",
    headerName: "Work Preference",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return <div>{cellValues.value}</div>;
    },
  },
  {
    field: "print",
    headerName: "Print",
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handlePrintClick(cellValues);
          }}
        >
          Print
        </Button>
      );
    },
  },
];

const ContactDataGrid = () => {
  const rows = () => [...contactData];
  const theme = useTheme();

  return (
    <DataGrid
      autoHeight
      initialState={{
        pagination: {
          paginationModel: { pageSize: 5 },
        },
        sorting: {
          sortModel: [{ field: "name", sort: "asc" }],
        },
      }}
      pageSizeOptions={[1, 2, 5]}
      rows={rows()}
      columns={columns(theme)}
      columnHeaderHeight={60}
      rowHeight={120}
      sx={datagridSx}
      slots={{
        toolbar: () => (
          <GridToolbarContainer
            sx={{
              justifyContent: "flex-end",
              "& button": { border: "none" },
              "& .MuiBox-root": { display: "none" },
            }}
          >
            <GridToolbarExport />
          </GridToolbarContainer>
        ),
      }}
    />
  );
};

export default ContactDataGrid;
