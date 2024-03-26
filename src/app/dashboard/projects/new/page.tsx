"use client";

import {
  TextField,
  TextArea,
  Button,
  Container,
  Flex,
  Card,
  Heading,
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useEffect } from "react";

function TaskNewPage() {
  const { control, handleSubmit, setValue } = useForm({
    values: {
      title: "",
      description: "",
      identificacion: "",
      dx1: "",
      cups: "",

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
      });
    }
  }, []);

  return (
    <div>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
              <Heading>
                {params.projectId ? "Editar Radicación" : "Nueva Radicación"}
              </Heading>

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
                    />
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
                      placeholder="nombre"
                      {...field}
                    />
                  );
                }}
              />

              <label> Sede Atencion</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField.Input
                      size="3"
                      placeholder="Search the docs…"
                      {...field}
                    />
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
                    />
                  );
                }}
              />


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
                    />
                  );
                }}
              />


               


              <Button>
                {params.projectId ? "Edit Project" : "Create Project"}
              </Button>
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
