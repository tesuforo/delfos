"use client";

import {
  TextField,
  TextArea,
  Button,
  Container,
  Flex,
  Card,
  Table,
  TableRow,
  Heading,
} from "@radix-ui/themes";



import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useEffect } from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from "react";
import { MenuItem } from "@mui/material";
import { Value } from "@radix-ui/react-select";


function TaskNewPage() {
  const {control, handleSubmit, setValue } =    useForm({
    values: {
      title: "",
      description: "",
      identificacion: "",
      dx1: "",
      cups:"",
      especialidad: "",
      medico_especialista: "",
      observacion: "",
      createdAt: "",
      updatedAt: "",
      presupuesto_regional_actual: "",
      costo_total_cups_relacionados: "",
      saldo_de_presupuesto: "",
      definicion_comite_regional: "",
      triage: "",
      observaciones_comite: "",
      pertinencia_medica: "",
    

    },
  });




  


  const router = useRouter();
  const params = useParams() as { projectId: string };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  
  
   


    if (!params.projectId) {
      const res = await axios.post(`/api/projects`, data);
      if (res.status === 201) {
        router.push(`/dashboard`);
        router.refresh();
      }
    } else {
      const res = await axios.put(`/api/projects/${params.projectId}`, data)
      if (res.status === 200) {
        router.push(`/dashboard`);
        router.refresh();
      }
    }
  });

  const handleDelete = async (projectId: string) => {
    console.log(projectId);
    const res = await axios.delete(`/api/projects/${projectId}`);

    if (res.status === 200) {
      toast.success("Radicacion Eliminada successfully");
    }

    router.push(`/dashboard`);
    router.refresh();
  };

  useEffect(() => {
    if (params.projectId) {
      axios.get(`/api/projects/${params.projectId}`).then((res) => {
        console.log(res);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
        setValue("identificacion", res.data.identificacion);
        setValue("dx1", res.data.dx1);
        setValue("cups", res.data.cups);
        setValue("especialidad", res.data.especialidad);
        setValue("medico_especialista", res.data.medico_especialista);
        setValue("observacion", res.data.observacion);
        setValue("createdAt",res.data.createdAt)
        setValue("updatedAt",res.data.updatedAt)
        setValue("presupuesto_regional_actual",res.data.presupuesto_regional_actual)
        setValue("costo_total_cups_relacionados",res.data.costo_total_cups_relacionados)
        setValue("saldo_de_presupuesto",res.data.saldo_de_presupuesto)
        setValue("definicion_comite_regional",res.data.definicion_comite_regional)
        setValue("triage",res.data.triage)
        setValue("observaciones_comite",res.data.observaciones_comite)
        setValue("pertinencia_medica",res.data.pertinencia_medica)

      });
    }
  }, []);

 
   return (
    <div>
      <Container size="4" height="100%" className="p-3 md:p-0">
        <Flex >
          <Card className="w-full p-7">

              
            <form   className="flex flex-col gap-y-2" onSubmit={onSubmit}>
  
              <Heading>
                
                {params.projectId ? "Editar Radicación" : "Nueva Radicación"}
              </Heading>

 <div className="grid md:grid-cols-2 md:gap-4">
               <label>Indentificación</label>
              <Controller
                name="identificacion"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Identificacion del Usuario"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />
              <label> Nombre Completo</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Nombre Completo"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />
    </div>
        <div className="grid md:grid-cols-2 md:gap-4">

              <label> Sede Atencion</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Sede de Atención"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />
              <label> Diagnostico </label>
              <Controller
                name="dx1"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Diagnostico"
                      {...field}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  );
                }}
              />
</div>
<div className="grid md:grid-cols-2 md:gap-4">
              <label> CUPS</label>
              <Controller
                name="cups"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="CUPS"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />     
    </div>
<div className="grid md:grid-cols-2 md:gap-4">
            
             <label className="block" htmlFor="Especialidad">Especialidad  </label>

            <select name="especialidad" onChange={(i)=>setValue("especialidad",i.target.value)}  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="">Seleccione </option>
              <option value="Medicina General">Medicina General</option>
              <option value="otras">otras</option>
            </select>

             <label className="block" htmlFor="Medico Especialista">Medico Especialista  </label>
            <select name="medico_especialista" onChange={(e)=>setValue("medico_especialista",e.target.value)}  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="">Seleccione </option>
              <option value="Pedro Perez">Pedro Perez</option>
              <option value="otras">otras</option>
            </select>
</div>


  

  <div className="grid md:grid-cols-2 md:gap-4">



 <label> Observación</label>
              <Controller
                name="observacion"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea
                      size="3"
                      placeholder="Observacion"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />    
              <label> Fecha de Radicacion</label>
              <Controller
                name="createdAt"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Fecha Radicación"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />     





    
  </div>
  <Card className="w-full p-7">
    
      <div className="grid md:grid-cols-2 md:gap-4">
               <label>Fecha Respuesta Comite Regional</label>
              <Controller
                name="updatedAt"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Fecha Respuesta Comite"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />
              <label>  Presupuesto Regional Actual</label>
              <Controller
                name="presupuesto_regional_actual"
               
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="0"
                      {...field}
                     className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />

               <label>  Costo Total CUPS Relacionados</label>
              <Controller
                name="costo_total_cups_relacionados"
               
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="0"
                      {...field}
                     className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />
                <label>  Saldo de presupuesto</label>
              <Controller
                name="saldo_de_presupuesto"
               
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="0"
                      {...field}
                     className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />

             <label className="block" htmlFor="definicion_comite_regional">Definicion Comite Regional </label>

            <select name="definicion_comite_regional" onChange={(a)=>setValue("definicion_comite_regional",a.target.value)}  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="">Seleccione </option>
              <option value="Aprobado">Aprobado</option>
              <option value="Rechazado">Rechazado</option>
            </select>


            <label className="block" htmlFor="triage">Triage </label>

            <select name="triage" onChange={(u)=>setValue("triage",u.target.value)}  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="">Seleccione </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

             

             <label> Observaciónes Comite</label>
              <Controller
                name="observaciones_comite"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea
                      size="3"
                      placeholder="observaciones_comite"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />    


              <label> Pertinencia Medica</label>
              <Controller
                name="pertinencia_medica"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea
                      size="3"
                      placeholder="pertiencia medica"
                      {...field}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  );
                }}
              />    




    </div>

      
    
  </Card>




<div className="grid md:grid-cols-2 md:gap-5">

              <Button>
                {params.projectId ? " Respuesta Comite Regional QX" : "Radicar QX"}
              </Button>

</div>
            </form>

            

            <div className="flex justify-end my-4">
              {params.projectId && (
                <Button
                  color="red"
                  onClick={() => handleDelete(params.projectId)}
                >
                  <TrashIcon />
                  Borrar Radicación
                </Button>
              )}
              </div>


              
            
          </Card>
        </Flex>
      </Container>
    </div>
  );




  }


export default TaskNewPage;
