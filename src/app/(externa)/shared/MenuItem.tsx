import Link from "next/link"

export interface MenuItemProps {
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className="text-zinc-500 hover:text-zinc-300 transition duration-200">{props.texto}</Link>
  )
}
