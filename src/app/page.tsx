import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Radicación Quirurgica",
  description: "Radicacion Quirurgica",
 
};

async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <Container className="px-5 md:px-0">
      <header className="my-4 bg-slate-900 p-10 rounded-md">
        <h1 className="text-7xl my-10">Radicacíon Quirurgica</h1>
        <p>
         Para Zentria es de suma importancia garantizar el cuidado y protección de sus pacientes, Con un sistema donde el radicador  registra los  casos del evento  quirurgico  y pasan por los comites regionales para su concepto medico,  existen otros actores como los trabajadores sociales que hacen del proceso la auditoria  completa de los casos.
        </p>

        <div className="mt-5">
          <Link
            href="/auth/login"
            className=" text-white bg-blue-500 px-2 py-1 rounded-md"
          >
            Ingresa
          </Link>
        </div>
      </header>
    </Container>
  );
}
export default HomePage;
