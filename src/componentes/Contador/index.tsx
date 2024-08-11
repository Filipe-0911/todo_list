import { Component } from "react";
import Botao from "../Botao";

interface ContadorProps {
    contador: number;
}
interface ContadorState {
    contador: number;
}

export default class Contador extends Component<ContadorProps, ContadorState> {
    constructor(props: ContadorProps) {
        super(props);
        this.state = { contador: 0 };
    }

    incrementarContador = () => {
        this.setState((prevState: ContadorState) => ({
            contador: prevState.contador += 1
        }));
    }

    render() {
        return (
            <div>
                <Botao onClick={this.incrementarContador}>
                    Incrementar Contador: {this.state.contador.toString()}
                </Botao>
            </div>
        )
    }
}