import {
  Box,
  Pagination,
  Typography,
} from "@mui/material";

export default function PatientPagination() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: 13,
          color: "text.secondary",
        }}
      >
        Showing 1–6 of 1,248 patients
      </Typography>

      <Pagination
        count={208}
        page={1}
        size="small"
        shape="rounded"
      />
    </Box>
  );
}