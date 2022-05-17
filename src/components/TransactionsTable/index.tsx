import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data));
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento Website</td>
                        <td  className="deposit">R$5000,00</td>
                        <td>Desenvolvimento</td>
                        <td>07/04/22</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1000,00</td>
                        <td>Casa</td>
                        <td>12/04/22</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}