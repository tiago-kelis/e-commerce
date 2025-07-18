import { Produto } from '@gstore/core'
import Image from 'next/image'
import Especificacoes from './Especificacoes'

export interface InformacoesProdutoProps {
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props
    return produto ? (
        <div className="flex items-center bg-purple-950 rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-70">
                <Image
                    src={produto.imagem!}
                    fill
                    className="object-cover p-7"
                    alt="Imagem do Produto"
                />
            </div>
            <Especificacoes produto={produto!} />
        </div>
    ) : null
}
