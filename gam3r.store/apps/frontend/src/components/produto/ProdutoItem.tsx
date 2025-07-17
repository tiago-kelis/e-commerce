'use client'
import { Moeda, Produto } from "@gstore/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import NotaReview from "../shared/NotaReview"


export  interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {

    const {produto} = props

    return (
        <Link
        href={`/produto/${props.produto.id}`}
        className="flex flex-col bg-purple-950 border-white/10 rounded-sm relative max-w-[350px]"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5">
              <NotaReview nota={props.produto.nota}/>
            </div>       

        <div className="w-full h-48 relative">           

            <Image 
                src={produto.imagem}
                fill
                priority
                className="object-contain"
                alt="Imagem"
            />
        </div> 
          
        <div className="flex-1 flex flex-col gap-2 p-5 border-t border-white/10">
            <span className="text-lg font-semibold">{produto?.nome}</span>
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
                  bg-violet-400 hover:border-2 border-emerald-500 rounded-3xl
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