import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: Request) {
  const data = await request.json();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  const newProject = await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      identificacion: data.identificacion,
      dx1: data.dx1,
      cups:data.cups,
      especialidad: data.especialidad,
      medico_especialista: data.medico_especialista,
      observacion: data.observacion,
      presupuesto_regional_actual: data.presupuesto_regional_actual,
      costo_total_cups_relacionados: data.costo_total_cups_relacionados,
      saldo_de_presupuesto: data.saldo_de_presupuesto,
      definicion_comite_regional: data.definicion_comite_regional,
      triage: data.triage,
      observaciones_comite: data.observaciones_comite,
      pertinencia_medica: data.pertinencia_medica,
      fecha_de_cirugia: data.fecha_de_cirugia,
      numero_de_orden_qx: data.numero_de_orden_qx,
      observaciones_trabajadora_social: data.observaciones_trabajadora_social,
      cirugia_ejecutada: data.cirugia_ejecutada,
      
      user: {
        connect: {
          id: parseInt(session.user.id),
        },
      },
    },
  });

  return NextResponse.json(newProject, {
    status: 201,
  });
}
