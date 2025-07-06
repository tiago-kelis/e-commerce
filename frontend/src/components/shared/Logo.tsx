import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <Link href={"/"} className="flex items-center gap-3">
            <Image src="/logo.png" height={60} width={60} alt="Imagem" />
            <Image src="/logo-texto.png" height={60} width={60} alt="Logo texto "/>
        </Link>
    )
}