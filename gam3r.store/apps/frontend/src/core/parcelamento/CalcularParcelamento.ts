import {QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL} from "../constants";
import Parcelamento from "./Parcelamento";

export default class CalcularParcelamento {

    executar(
        valor: number,
        qtdParcelas: number = QTDE_MAX_PARCELAS,
        taxaJuros: number = TAXA_JUROS_MENSAL
    ): Parcelamento {

        if(qtdParcelas < 2 || qtdParcelas > QTDE_MAX_PARCELAS) {
            throw new  Error(`A quantidade de parcelas deve ser entre 2 e ${QTDE_MAX_PARCELAS}`);
        }

        const totalComJuros = this.calcularJurosConposto(valor, taxaJuros, qtdParcelas);

        return {
            valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdParcelas),
            valorTotal: this.comDuasCasasDecimais(totalComJuros),
            qtdParcelas,
            taxaJuros,
        }
    }

    private calcularJurosConposto(valorTotal: number , taxaMensal: number, qtdParcelas: number): number {
        return valorTotal * Math.pow(1 + taxaMensal, qtdParcelas);
    }

    private comDuasCasasDecimais(valor: number): number {
        return Math.round(valor * 100) / 100;
    }
}