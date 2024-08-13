import BarberShopItem from "@/components/barbershop-item"
import Header from "@/components/header"
import Search from "@/components/search"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { db } from "@/lib/prisma"
import {
  FlameIcon,
  FootprintsIcon,
  Scissors,
  SearchIcon,
  SquareDashedMousePointer,
  TowerControl,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface QuickSearchOptions {
  icon: ReactNode
  title: string
}

export const quickSearchOptions: QuickSearchOptions[] = [
  {
    icon: <Scissors className="size-4" />,
    title: "Cabelo",
  },
  {
    icon: <FlameIcon className="size-4" />,
    title: "Barba",
  },
  {
    icon: <TowerControl className="size-4" />,
    title: "Acabamento",
  },
  {
    icon: <FootprintsIcon className="size-4" />,
    title: "Pézinho",
  },
  {
    icon: <TowerControl className="size-4" />,
    title: "Sombrancelha",
  },
  {
    icon: <SquareDashedMousePointer className="size-4" />,
    title: "Hidratação",
  },
]

const Home = async () => {
  const barberShops = await db.barbershop.findMany()
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Giovani</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        <Search />

        <div className="mt-6 flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((quickSearch) => (
            <Button variant="secondary" className="gap-2" asChild>
              <Link href={`/barbershops?service=${quickSearch.title}`}>
              {quickSearch.icon}
              {quickSearch.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            alt="banner"
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-4 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">
                Corte de cabelo
                <div className="flex gap-2">
                  <Avatar className="size-6">
                    <AvatarImage src="https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png"></AvatarImage>
                  </Avatar>
                  <p className="text-sm">Barbearia do Gio</p>
                </div>
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">16:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
