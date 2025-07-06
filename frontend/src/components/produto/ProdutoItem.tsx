'use client'
import { Moeda, Produto } from "@/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import NotaReview from "../shared/NotaReviw"


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

            <div className="absolute flex justify-end top-2.5 right-2.5">
              <NotaReview nota={props.produto.nota}/>
            </div>

            <Image 
                src={produto.imagem}
                fill
                className="object-contain"
                alt="Imagem"
            />
        </div> 
          
        <div className="flex-1 flex flex-col gap-2 p-5 border-t border-white/10">
            <span className="text-lg font-semibold">{produto.name}</span>
            <div className="flex-1"></div>
            <div className="self-start  text-sm border-b border-dashed">
                {produto.especificacoes.destaques}
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">
                    de {Moeda.formatar(produto.precoBase)}
                </span>
                <span className="text-xl font-semibold text-emerald-400">
                    por {Moeda.formatar(produto.precoPromocional)}
                </span>
                <span className="">

                </span>

                <button 
                  className="flex justify-center items-center gap-2 h-8
                  bg-violet-400 hover:border-2 border-emerald-500 rounded-md
                  "
                  onClick={(e) => {
                    e.preventDefault()
                    // adicionarItem(props.produto)
                  }}
                  >
                  <IconShoppingCartPlus size={20}/>
                  <span>Adicionar</span>
                </button>

            </div>
        </div>
                  
        </Link>
    )
}