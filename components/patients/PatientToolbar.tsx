import { Box, Button, InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

export default function PatientToolbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 3,
        mb: 2,
      }}
    >
      {/* Search */}
      <Box
        sx={{
          width: 320,
          height: 42,
          display: "flex",
          alignItems: "center",
          px: 1.5,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          backgroundColor: "background.paper",
        }}
      >
        <SearchIcon
          sx={{
            fontSize: 20,
            color: "text.secondary",
            mr: 1,
          }}
        />

        <InputBase
          placeholder="Search patients..."
          sx={{
            flex: 1,
            fontSize: 14,
          }}
        />
      </Box>

      {/* Filter */}
      <Button
        variant="outlined"
        startIcon={<FilterListOutlinedIcon />}
        sx={{
          height: 42,
          textTransform: "none",
          color: "text.primary",
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: "none",
        }}
      >
        Filter
      </Button>
    </Box>
  );
}
