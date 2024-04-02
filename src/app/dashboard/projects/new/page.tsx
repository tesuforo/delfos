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
      tiene_correo:"",

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
      toast.success("Project deleted successfully");
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
        setValue("tiene_correo", res.data.tiene_correo);
      });
    }
  }, []);

 
   return (
    <div>
      <Container size="2" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">

              
            <form   className="flex flex-col gap-y-2" onSubmit={onSubmit}>
  
              <Heading>
                {params.projectId ? "Editar Radicación" : "Nueva Radicación"}
              </Heading>

 <div className="grid md:grid-cols-2 md:gap-6">
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
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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

        <div className="grid md:grid-cols-2 md:gap-6">

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

              

 
              <label> DX 1</label>
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



<div className="grid md:grid-cols-2 md:gap-6">


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

        <label className="block" htmlFor="tiene_correo">Tiene Correo * </label>

            <select name="tiene_correo" onChange={(e)=>setValue("tiene_correo",e.target.value)}  className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="">Seleccione </option>
              <option value="SI">SI</option>
              <option value="NO">NO</option>
            </select>

      
    </div>




    

<div className="grid md:grid-cols-2 md:gap-6">

              <Button>
                {params.projectId ? "Editar QX" : "Radicar QX"}
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
                  Delete Project
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
