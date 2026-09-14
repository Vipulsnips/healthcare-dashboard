import {
  Card,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export type Patient = {
  name: string;
  id: string;
  age: number;
  gender: string;
  condition: string;
  lastVisit: string;
  status: string;
};

type PatientTableProps = {
  patients: Patient[];
};

function getStatusColor(status: string) {
  if (status === "Stable") {
    return {
      color: "#2E7D32",
      backgroundColor: "#E8F5E9",
    };
  }

  if (status === "Follow-up") {
    return {
      color: "#B26A00",
      backgroundColor: "#FFF4E5",
    };
  }

  return {
    color: "#C62828",
    backgroundColor: "#FFEBEE",
  };
}

export default function PatientTable({
  patients,
}: PatientTableProps) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <TableContainer
        sx={{
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            minWidth: 900,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Last Visit</TableCell>
              <TableCell>Status</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <TableRow key={patient.id} hover>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {patient.name}
                    </Typography>
                  </TableCell>

                  <TableCell>{patient.id}</TableCell>

                  <TableCell>{patient.age}</TableCell>

                  <TableCell>{patient.gender}</TableCell>

                  <TableCell>{patient.condition}</TableCell>

                  <TableCell>{patient.lastVisit}</TableCell>

                  <TableCell>
                    <Chip
                      label={patient.status}
                      size="small"
                      sx={{
                        ...getStatusColor(patient.status),
                        fontWeight: 500,
                        borderRadius: 1.5,
                      }}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreHorizIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  align="center"
                  sx={{
                    py: 5,
                    color: "text.secondary",
                  }}
                >
                  No patients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}