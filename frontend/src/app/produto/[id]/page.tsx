import { produtos } from "@/core"

export default function PaginaProdutos(props: any) {

    const id = +props.params.id
    const produto = produtos.find((produto) => produto.id === id)
    return(
        <div>
            <h1>Produto: {produto?.name}</h1>

        </div>
    )
}