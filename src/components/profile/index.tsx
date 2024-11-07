import { useSelector } from "react-redux"
import { selectCurrent } from "../../features/user/userSlice"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { BASE_URL } from "../../constants"
import { Link } from "react-router-dom"
import { MdAlternateEmail } from "react-icons/md"

export const Profile = () => {
  const current = useSelector(selectCurrent)
  //   console.log("dsdsad", current)
  if (!current) {
    return null
  }
  const { name, email, avatarUrl, id } = current
  return (
    <Card className="py-4 w-[302px] ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <Image
          alt="Profile photo"
          className="object-cover rounded-xl pointer-events-none"
          src={`${BASE_URL}${avatarUrl}`}
          width={370}
        />
      </CardHeader>
      <CardBody>
        <Link to={`/users/${id}`}>
          <h4 className="font-bold text-large mb-2">{name}</h4>
        </Link>
        <p className="text-default-500 flex items-center gap-2">
          <MdAlternateEmail />
          {email}
        </p>
      </CardBody>
    </Card>
  )
}
