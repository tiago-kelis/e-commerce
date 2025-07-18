"use client"

import Pagina from '@/components/template/Pagina'
import { ProvedorCarrinho } from '@/data/contexts/ContextoCarrinho'
import { ProvedorPagamento } from '@/data/contexts/ContextoPagamento'
import { ProvedorProdutos } from '@/data/contexts/ContextoProdutos'
import { useEffect, useState } from 'react';

export default function Layout(props: any) {

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <ProvedorProdutos>
            <ProvedorCarrinho>
                <ProvedorPagamento>
                    <Pagina>{props.children}</Pagina>
                </ProvedorPagamento>
            </ProvedorCarrinho>
        </ProvedorProdutos>
    )
}
