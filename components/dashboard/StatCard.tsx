import { Box, Card, Typography } from "@mui/material";

type StatCardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        flex: 1,
        p: 2.5,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          color: "text.secondary",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: "text.primary",
          lineHeight: 1.2,
        }}
      >
        {value}
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{
            fontSize: 13,
            color: "text.secondary",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Card>
  );
} 