"use client";

import { useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import AppShell from "@/components/layout/AppShell";

// --------------------------------------------------
// EMILY JOHNSON
// Only patient required for this demo
// --------------------------------------------------

const patient = {
  name: "Emily Johnson",
  id: "PT-10245",
  age: 32,
  gender: "Female",
  condition: "Hypertension",
  lastVisit: "Aug 18",
  status: "Stable",

  bloodGroup: "O+",
  dateOfBirth: "March 15, 1994",
  phone: "(555) 123-4567",
  email: "emily.j@email.com",
  address: "123 Oak Street, Springfield, IL 62704",

  emergencyName: "Robert Johnson",
  emergencyRelationship: "Spouse",
  emergencyPhone: "(555) 987-6543",

  bloodPressure: "120/80",
  heartRate: "72",
  temperature: "98.4",
  oxygen: "98%",
};

// --------------------------------------------------
// STATUS
// --------------------------------------------------

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

// --------------------------------------------------
// SMALL REUSABLE COMPONENTS
// --------------------------------------------------

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 13,
          color: "text.secondary",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: 0.3,
          fontSize: 14,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

function VitalCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#E4F4E9",
        borderRadius: 2,
        p: 2,
        minHeight: 112,
      }}
    >
      <Typography
        sx={{
          fontSize: 13,
          color: "#34785D",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          fontSize: 23,
          fontWeight: 600,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          color: "text.secondary",
        }}
      >
        {unit}
      </Typography>

      <Chip
        label="Normal"
        size="small"
        sx={{
          mt: 0.5,
          height: 20,
          fontSize: 11,
          color: "#34785D",
          backgroundColor: "#FFFFFF",
        }}
      />
    </Box>
  );
}

// --------------------------------------------------
// TAB 1 — OVERVIEW
// --------------------------------------------------

function OverviewTab() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "1.1fr 0.9fr",
        },
        gap: 2,
      }}
    >
      {/* Patient Information */}
      <Card
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: {
            xs: 2,
            md: 2.5,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Patient Information
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            columnGap: 4,
            rowGap: 2,
            mt: 2,
          }}
        >
          <InfoItem label="Full Name" value={patient.name} />
          <InfoItem label="Date of Birth" value={patient.dateOfBirth} />

          <InfoItem label="Gender" value={patient.gender} />
          <InfoItem label="Blood Group" value={patient.bloodGroup} />

          <InfoItem label="Phone" value={patient.phone} />
          <InfoItem label="Email" value={patient.email} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <InfoItem label="Address" value={patient.address} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Emergency Contact
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 2,
            mt: 1.5,
          }}
        >
          <InfoItem
            label="Name"
            value={patient.emergencyName}
          />

          <InfoItem
            label="Relationship"
            value={patient.emergencyRelationship}
          />

          <InfoItem
            label="Phone"
            value={patient.emergencyPhone}
          />
        </Box>
      </Card>

      {/* Current Vitals */}
      <Card
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: {
            xs: 2,
            md: 2.5,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Current Vitals
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 1.5,
          }}
        >
          <VitalCard
            label="Blood Pressure"
            value={patient.bloodPressure}
            unit="mmHg"
          />

          <VitalCard
            label="Heart Rate"
            value={patient.heartRate}
            unit="bpm"
          />

          <VitalCard
            label="Temperature"
            value={patient.temperature}
            unit="°F"
          />

          <VitalCard
            label="SpO₂"
            value={patient.oxygen}
            unit="Oxygen"
          />
        </Box>
      </Card>
    </Box>
  );
}

// --------------------------------------------------
// TAB 2 — MEDICAL HISTORY
// --------------------------------------------------

function MedicalHistoryTab() {
  const history = [
    {
      date: "Aug 18, 2026",
      title: "Follow-up consultation",
      description:
        "Dr. Sarah reviewed blood pressure and medication.",
    },
    {
      date: "Jul 12, 2026",
      title: "General consultation",
      description: "Routine health examination.",
    },
    {
      date: "Jun 05, 2026",
      title: "Lab results",
      description:
        "Blood work reviewed. All values normal.",
    },
  ];

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: {
          xs: 2,
          md: 2.5,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          mb: 2.5,
        }}
      >
        Medical History
      </Typography>

      {/* Timeline */}
      {history.map((item, index) => (
        <Box
          key={item.date}
          sx={{
            display: "flex",
            position: "relative",
            minHeight:
              index === history.length - 1 ? 70 : 82,
          }}
        >
          {/* Timeline column */}
          <Box
            sx={{
              width: 24,
              flexShrink: 0,
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Vertical line */}
            {index !== history.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "#D8E6E3",
                }}
              />
            )}

            {/* Checkpoint */}
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                mt: 0.5,
                zIndex: 1,
              }}
            />
          </Box>

          {/* Event */}
          <Box
            sx={{
              ml: 1.5,
              pb:
                index === history.length - 1
                  ? 0
                  : 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                color: "text.secondary",
              }}
            >
              {item.date}
            </Typography>

            <Typography
              sx={{
                mt: 0.4,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                mt: 0.2,
                fontSize: 13,
                color: "text.secondary",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          mb: 1,
        }}
      >
        Allergies & Conditions
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Chip
          label="Penicillin allergy"
          size="small"
          sx={{
            color: "#C62828",
            backgroundColor: "#FDEAEA",
          }}
        />

        <Chip
          label="Hypertension"
          size="small"
          sx={{
            color: "#B26A00",
            backgroundColor: "#FFF3DA",
          }}
        />

        <Chip
          label="Non-smoker"
          size="small"
          sx={{
            color: "#34785D",
            backgroundColor: "#E6F5F2",
          }}
        />
      </Box>
    </Card>
  );
}

// --------------------------------------------------
// TAB 3 — APPOINTMENTS
// --------------------------------------------------

function AppointmentsTab() {
  const appointments = [
    {
      date: "Aug 18, 2026",
      doctor: "Dr. Sarah",
      type: "Follow-up",
      status: "Completed",
      notes: "BP reviewed, medication adjusted",
    },
    {
      date: "Aug 25, 2026",
      doctor: "Dr. Sarah",
      type: "Check-up",
      status: "Scheduled",
      notes: "Routine follow-up",
    },
    {
      date: "Jul 12, 2026",
      doctor: "Dr. Patel",
      type: "Consultation",
      status: "Completed",
      notes: "General examination",
    },
  ];

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
      <Box sx={{ p: 2.5, pb: 1.5 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Recent Appointments
        </Typography>
      </Box>

      <TableContainer sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow>
              <TableCell>DATE</TableCell>
              <TableCell>DOCTOR</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>NOTES</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={
                  appointment.date +
                  appointment.type
                }
              >
                <TableCell>
                  {appointment.date}
                </TableCell>

                <TableCell>
                  {appointment.doctor}
                </TableCell>

                <TableCell>
                  {appointment.type}
                </TableCell>

                <TableCell>
                  <Chip
                    label={appointment.status}
                    size="small"
                    sx={{
                      color:
                        appointment.status ===
                        "Completed"
                          ? "#34785D"
                          : "#4C8BC2",

                      backgroundColor:
                        appointment.status ===
                        "Completed"
                          ? "#E4F4E9"
                          : "#E5F1FA",
                    }}
                  />
                </TableCell>

                <TableCell>
                  {appointment.notes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

// --------------------------------------------------
// TAB 4 — DOCUMENTS
// --------------------------------------------------

function DocumentsTab() {
  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const documents = [
    {
      name: "Blood Test Results.pdf",
      date: "Uploaded Aug 18, 2026",
      size: "240 KB",
      background: "#FDEAEA",
      color: "#E57373",
    },
    {
      name: "ECG Report.pdf",
      date: "Uploaded Jul 12, 2026",
      size: "1.2 MB",
      background: "#E5F1FA",
      color: "#5B9BC9",
    },
    {
      name: "Prescription History.pdf",
      date: "Uploaded Jun 05, 2026",
      size: "88 KB",
      background: "#E6F5F2",
      color: "#58B7A8",
    },
  ];

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: {
          xs: 2,
          md: 2.5,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Documents
        </Typography>

        <input
          ref={fileInputRef}
          type="file"
          hidden
        />

        <Button
          variant="outlined"
          startIcon={<UploadFileOutlinedIcon />}
          onClick={() =>
            fileInputRef.current?.click()
          }
          sx={{
            textTransform: "none",
            borderColor: "primary.main",
            color: "primary.main",
          }}
        >
          Upload
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {documents.map((document) => (
          <Box
            key={document.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                minWidth: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1.5,
                backgroundColor:
                  document.background,
                color: document.color,
              }}
            >
              <DescriptionOutlinedIcon />
            </Box>

            <Box
              sx={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {document.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "text.secondary",
                  mt: 0.2,
                }}
              >
                {document.date} · {document.size}
              </Typography>
            </Box>

            <IconButton size="small">
              <DownloadOutlinedIcon
                fontSize="small"
              />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

// --------------------------------------------------
// MAIN PATIENT DETAIL PAGE
// --------------------------------------------------

export default function PatientDetailPage() {
  const params = useParams();
  const router = useRouter();

  const patientId = params.id as string;

  const [activeTab, setActiveTab] = useState(0);

  // Only Emily Johnson is implemented.
  if (patientId !== "PT-10245") {
    return (
      <AppShell pageTitle="Patient Details">
        <Box
          sx={{
            pt: 12,
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Typography variant="h4">
            Patient not found
          </Typography>

          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() =>
              router.push("/patients")
            }
            sx={{
              mt: 2,
              textTransform: "none",
            }}
          >
            Back to Patients
          </Button>
        </Box>
      </AppShell>
    );
  }

  return (
    <AppShell pageTitle="Patient Details">
      <Box
        sx={{
          pt: 12,
          px: {
            xs: 2,
            md: 4,
          },
          pb: 4,
        }}
      >
        {/* Back to Patients */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() =>
            router.push("/patients")
          }
          sx={{
            mb: 2,
            textTransform: "none",
            color: "primary.main",
            px: 0,
          }}
        >
          Back to Patients
        </Button>

        {/* Patient Header */}
        <Card
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
              justifyContent: "space-between",
              gap: 2,
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            {/* Patient identity */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 54,
                  height: 54,
                  backgroundColor: "#DCECF8",
                  color: "#55A0CE",
                  fontSize: 18,
                }}
              >
                EJ
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 22,
                    },
                    fontWeight: 600,
                  }}
                >
                  Emily Johnson
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 1,
                    mt: 0.3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    PT-10245
                  </Typography>

                  <Typography color="text.secondary">
                    ·
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    Female
                  </Typography>

                  <Typography color="text.secondary">
                    ·
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    32 years
                  </Typography>

                  <Typography color="text.secondary">
                    ·
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    Blood Group: O+
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Actions */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Chip
                label="Stable"
                size="small"
                sx={{
                  ...getStatusColor("Stable"),
                  fontWeight: 500,
                  borderRadius: 1.5,
                }}
              />

              <Button
                variant="contained"
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-flex",
                  },
                  textTransform: "none",
                  boxShadow: "none",
                }}
              >
                Edit Patient
              </Button>

              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>

        {/* Tabs */}
        <Box
          sx={{
            mt: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => {
              setActiveTab(newValue);
            }}
            variant="scrollable"
            scrollButtons={false}
            sx={{
              minHeight: 46,

              "& .MuiTab-root": {
                minHeight: 46,
                minWidth: "auto",
                mr: {
                  xs: 2,
                  sm: 4,
                },
                px: 0,
                textTransform: "none",
                fontSize: 14,
                color: "text.secondary",
              },

              "& .Mui-selected": {
                color: "primary.main",
              },

              "& .MuiTabs-indicator": {
                backgroundColor: "primary.main",
                height: 2,
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Medical History" />
            <Tab label="Appointments" />
            <Tab label="Documents" />
          </Tabs>
        </Box>

        {/* Tab content */}
        <Box sx={{ mt: 2 }}>
          {activeTab === 0 && <OverviewTab />}

          {activeTab === 1 && (
            <MedicalHistoryTab />
          )}

          {activeTab === 2 && (
            <AppointmentsTab />
          )}

          {activeTab === 3 && (
            <DocumentsTab />
          )}
        </Box>
      </Box>
    </AppShell>
  );
}