import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase-client";
import { programas } from "@/lib/xentra-content";

const leadSchema = z.object({
  nombre: z.string().trim().min(2, "Cuéntanos tu nombre completo."),
  email: z.string().trim().email("Escribe un correo válido."),
  telefono: z.string().trim().optional(),
  programaInteres: z.string().optional(),
  mensaje: z.string().trim().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { nombre: "", email: "", telefono: "", programaInteres: "", mensaje: "" },
  });

  const programaInteres = watch("programaInteres");

  async function onSubmit(values: LeadFormValues) {
    setStatus("loading");
    const { error } = await supabase.from("leads").insert({
      nombre: values.nombre,
      email: values.email,
      telefono: values.telefono || null,
      programa_interes: values.programaInteres || null,
      mensaje: values.mensaje || null,
      origen: "sitio_web",
    });

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-turquesa-claro/30 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-10 w-10 text-turquesa" />
        <h3 className="text-lg font-semibold text-petroleo">¡Gracias! Ya recibimos tus datos.</h3>
        <p className="text-sm text-gris-medio">
          Te contactaremos en las próximas horas. Si prefieres, también puedes escribirnos por
          WhatsApp mientras tanto.
        </p>
        <Button variant="outline" className="mt-2" onClick={() => setStatus("idle")}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-gris-secundario bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo</Label>
          <Input id="nombre" placeholder="Tu nombre" {...register("nombre")} />
          {errors.nombre && <p className="text-xs text-red-600">{errors.nombre.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo</Label>
          <Input id="email" type="email" placeholder="tu@correo.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono (opcional)</Label>
          <Input id="telefono" placeholder="+51 9xx xxx xxx" {...register("telefono")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="programaInteres">Programa de interés</Label>
          <Select
            value={programaInteres ?? ""}
            onValueChange={(value) => setValue("programaInteres", value)}
          >
            <SelectTrigger id="programaInteres">
              <SelectValue placeholder="Elige un programa" />
            </SelectTrigger>
            <SelectContent>
              {programas.map((p) => (
                <SelectItem key={p.nombre} value={p.nombre}>
                  {p.nombre}
                </SelectItem>
              ))}
              <SelectItem value="Aún no estoy seguro">Aún no estoy seguro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje (opcional)</Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos qué te gustaría resolver con este programa."
          rows={4}
          {...register("mensaje")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          No pudimos enviar tu consulta. Intenta de nuevo o escríbenos directo por WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-naranja text-white hover:brightness-110 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Enviar mis datos
      </Button>
    </form>
  );
}
