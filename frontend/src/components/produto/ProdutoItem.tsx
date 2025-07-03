import { Produto } from "@/core"
import Image from "next/image"
import Link from "next/link"

export  interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {

    const {produto} = props

    return (
        <Link
        href={`/produto/${props.produto.id}`}
        className="flex flex-col bg-violet-950 border border-zinc-600 justify-center items-center rounded-md"
        >
        <div className="w-full h-48 relative">
            <Image 
                src={produto.imagem}
                fill
                className="object-contain"
                alt="Imagem"
            />
        </div>   
        {produto.name}            
        </Link>
    )
}