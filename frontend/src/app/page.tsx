import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";


export default function Home() {
  return (
    <div className="grid grid-cols-2 container gap-4">

      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
      
      
    </div>
  );
}
