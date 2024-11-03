import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"
import React from "react"
import { Login } from "../../features/login"

export const Auth = () => {
  const [selected, setSelected] = React.useState("login")

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <Card className="max-w-full w-[340px] h-[450px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              selectedKey={selected}
              onSelectionChange={key => setSelected(key as string)}
            >
              <Tab key={"ligin"} title="Вход">
                <Login setSelected={setSelected} />
              </Tab>
              <Tab key={"sign-up"} title="Регистрация">
                Регистрация
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
