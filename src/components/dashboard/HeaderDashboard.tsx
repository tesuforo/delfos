"use client";
import { Button, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

function HeaderDashboard() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-4">
      <Heading>Radicacion Quirurgica</Heading>
      <Button onClick={() => router.push("/dashboard/projects/new")}>
        Agregar Radicación
      </Button>
    </div>
  );
}
export default HeaderDashboard;
