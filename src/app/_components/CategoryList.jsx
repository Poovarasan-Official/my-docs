import Link from "next/link";
import {
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Button,
} from "@mui/material";

const categories = [
  { name: "HTML", path: "/docs/html" },
  { name: "CSS", path: "/docs/css" },
  { name: "JavaScript", path: "/docs/javascript/intro" },
  { name: "ReactJS", path: "/docs/react/intro" },
  { name: "NodeJS", path: "/docs/nodejs/intro" },
  { name: "MongoDB", path: "/docs/mongodb/intro" },
  { name: "DSA", path: "/docs/dsa" },
  { name: "Problems Solving", path: "/docs/problems" },
];

export default function CategoryPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Full Stack Menu
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {categories.map((category) => (
          <ListItem key={category.name} disablePadding>
            <ListItemButton component={Link} href={category.path}>
              <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
                  <Button variant="outlined" fullWidth>
                    {category.name}
                  </Button>
                </Stack>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
