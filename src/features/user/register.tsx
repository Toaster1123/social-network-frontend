import { Input } from "../../components/input"
import { useState } from "react"
import { Button, Link } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../../app/services/userApi"
import { hasErrorField } from "../../utils/has-error-field"
import { ErrorMessage } from "../../components/error-message"

type Register = {
  email: string
  name: string
  password: string
}
type Props = {
  setSelected: (value: string) => void
}
export const Register: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Register>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })
  const [register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  // const [triggerCurrentCuery] = useLazyCurrentQuery()
  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap()
      setSelected("login")
    } catch (err) {
      if (hasErrorField(err)) {
        setError(err.data.error)

        console.error("Ошибка при регистрации", error)
      }
    }
  }
  return (
    <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        label="Имя"
        type="text"
        required="Обязательное поле"
      />
      <Input
        control={control}
        name="email"
        label="Email"
        required="Обязательное поле"
        type="email"
      />
      <Input
        control={control}
        name="password"
        label="Пароль"
        type="password"
        required="Обязательное поле"
      />
      <ErrorMessage error={error} />
      <p className="text-center text-small">
        Уже зарегестрированы?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onClick={() => {
            setSelected("login")
          }}
        >
          Войти{" "}
        </Link>
      </p>
      <div className="flex wrap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Зарегестрироваться
        </Button>
      </div>
    </form>
  )
}
