"use client";

import { useState } from "react";

import {
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

type PatientToolbarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
};

export default function PatientToolbar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: PatientToolbarProps) {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (value: string) => {
    onStatusFilterChange(value);
    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 3,
        mb: 3,
      }}
    >
      {/* Search */}
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: 320,
          },
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
          value={searchTerm}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
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
        onClick={handleOpen}
        sx={{
          height: 42,
          textTransform: "none",
          color: "text.primary",
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: "none",
          ml: 2,
        }}
      >
        Filter
      </Button>

      {/* Filter Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          selected={statusFilter === "All"}
          onClick={() => handleFilterChange("All")}
        >
          All
        </MenuItem>

        <MenuItem
          selected={statusFilter === "Stable"}
          onClick={() => handleFilterChange("Stable")}
        >
          Stable
        </MenuItem>

        <MenuItem
          selected={statusFilter === "Follow-up"}
          onClick={() => handleFilterChange("Follow-up")}
        >
          Follow-up
        </MenuItem>

        <MenuItem
          selected={statusFilter === "Critical"}
          onClick={() => handleFilterChange("Critical")}
        >
          Critical
        </MenuItem>
      </Menu>
    </Box>
  );
}