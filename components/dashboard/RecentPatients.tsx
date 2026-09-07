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

const patients = [
  {
    name: "Emily Johnson",
    id: "PT-10245",
    age: 32,
    gender: "Female",
    condition: "Hypertension",
    lastVisit: "Aug 18",
    status: "Stable",
  },
  {
    name: "Michael Brown",
    id: "PT-10312",
    age: 45,
    gender: "Male",
    condition: "Diabetes T2",
    lastVisit: "Aug 16",
    status: "Follow-up",
  },
  {
    name: "Olivia Davis",
    id: "PT-10198",
    age: 28,
    gender: "Female",
    condition: "Asthma",
    lastVisit: "Aug 14",
    status: "Stable",
  },
];

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

export default function RecentPatients() {
  return (
    <Card
      elevation={0}
      sx={{
        mt: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Typography
        sx={{
          p: 2.5,
          pb: 1,
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        Recent Patients
      </Typography>

      <TableContainer>
        <Table>
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
            {patients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell>
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}