import { useState } from "react";
import { FadeIn } from "@/components/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido." }),
  empresa: z.string().min(2, { message: "La empresa es requerida." }),
  cargo: z.string().min(2, { message: "El cargo es requerido." }),
  email: z.string().email({ message: "Correo electrónico inválido." }),
  telefono: z.string().min(6, { message: "Teléfono es requerido." }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      cargo: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Mensaje Enviado",
        description: "Nos pondremos en contacto con usted a la brevedad.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="contacto" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Hablemos de Rentabilidad</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                ¿Listo para optimizar su gestión minera?
              </h3>
              <p className="text-lg text-muted-foreground mb-12">
                Agendemos una reunión de diagnóstico inicial para entender los desafíos específicos de su operación y cómo podemos ayudar.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                    <a href="mailto:jccente@jccconsulting.com.pe" className="text-lg text-white hover:text-primary transition-colors">
                      jccente@jccconsulting.com.pe
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Teléfono / WhatsApp</p>
                    <a href="tel:+51984607523" className="text-lg text-white hover:text-primary transition-colors">
                      +51 984 607 523
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Ubicación</p>
                    <p className="text-lg text-white">
                      Lima, Perú
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn transition={{ delay: 0.2 }}>
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl">
                <h4 className="text-2xl font-display font-bold text-white mb-8">Envíenos un mensaje</h4>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Nombre</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej. Juan Pérez" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Compañía Minera..." {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="cargo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Cargo</FormLabel>
                            <FormControl>
                              <Input placeholder="Gerente General" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telefono"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Teléfono</FormLabel>
                            <FormControl>
                              <Input placeholder="+51 999 999 999" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Email Corporativo</FormLabel>
                          <FormControl>
                            <Input placeholder="juan.perez@empresa.com" type="email" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mensaje"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Cuéntenos sobre sus desafíos actuales..." 
                              className="min-h-[120px] bg-background resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensaje
                          <CheckCircle2 className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
