"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z
    .string({ required_error: "E-mail invalido" })
    .email({ message: "E-mail invalido" }),
  password: z.string().min(6, { message: "Minimo 6 caracteres" }),
});

type FormValues = z.infer<typeof schema>;

const DashBoardLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onHandleSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <h2 className="text-lg font-semibold">Login Administrativo</h2>

      <form
        className="flex flex-col gap-5 mt-10"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div>
          <Input
            className={`${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500`}
            placeholder="E-mail"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-xs text-red-500 my-2 mx-3">
              {errors?.email?.message}
            </p>
          )}
        </div>

        <div>
          <Input
            className={`${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500`}
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500 my-2 mx-3">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default DashBoardLogin;
