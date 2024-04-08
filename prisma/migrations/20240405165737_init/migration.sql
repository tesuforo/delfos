-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "dx1" TEXT NOT NULL,
    "cups" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "medico_especialista" TEXT NOT NULL,
    "observacion" TEXT NOT NULL DEFAULT '',
    "presupuesto_regional_actual" TEXT NOT NULL,
    "costo_total_cups_relacionados" TEXT NOT NULL,
    "saldo_de_presupuesto" TEXT NOT NULL,
    "definicion_comite_regional" TEXT NOT NULL,
    "triage" TEXT NOT NULL,
    "observaciones_comite" TEXT NOT NULL,
    "pertinencia_medica" TEXT NOT NULL,
    "fecha_de_cirugia" TIMESTAMP(3) NOT NULL,
    "numero_de_orden_qx" TEXT NOT NULL,
    "observaciones_trabajadora_social" TEXT NOT NULL,
    "cirugia_ejecutada" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidad" (
    "id" SERIAL NOT NULL,
    "especialidades" TEXT NOT NULL,
    "description_especialidades" TEXT NOT NULL,

    CONSTRAINT "especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnostico" (
    "id" SERIAL NOT NULL,
    "simbolo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "limite_inferior" INTEGER NOT NULL,
    "limite_superior" INTEGER NOT NULL,
    "afeccion_principal" INTEGER NOT NULL,
    "observaciones" TEXT NOT NULL,

    CONSTRAINT "diagnostico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cups" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "num_grupo" INTEGER NOT NULL,
    "regional" TEXT NOT NULL,
    "resolucion_cups" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "cups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sedes" (
    "id" SERIAL NOT NULL,
    "nombre_sede" TEXT NOT NULL,
    "codigo_sede" INTEGER NOT NULL,
    "codigo_contrato" INTEGER NOT NULL,
    "departamento" TEXT NOT NULL,
    "regional" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "sedes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "id" SERIAL NOT NULL,
    "nombre_medico" TEXT NOT NULL,
    "codigo_medico" INTEGER NOT NULL,
    "direcion_medico" TEXT NOT NULL,
    "email_medico" TEXT NOT NULL,
    "codigo_sede" INTEGER NOT NULL,
    "especialidades" TEXT NOT NULL,
    "regional" TEXT NOT NULL,
    "sede" TEXT NOT NULL,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre_completo" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "edad_actual" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "sede_atencion" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "regional" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "direccion_paciente" TEXT NOT NULL,
    "barrio" TEXT NOT NULL,
    "telefono1" TEXT NOT NULL,
    "telefono2" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "tiene_redes_sociales_paciente" TEXT NOT NULL,
    "tiene_correo_paciente" TEXT NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regional" (
    "id" SERIAL NOT NULL,
    "regional" TEXT NOT NULL,

    CONSTRAINT "regional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
