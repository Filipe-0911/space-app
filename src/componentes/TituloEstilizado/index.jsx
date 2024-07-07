import styled from "styled-components";

const TituloEstilizado = styled.h2`
    color: #7b78e6;
    font-size: 32px;
    text-align:${props => props.$alinhamento ? props.$alinhamento : 'left'};

    @media (max-width: 744px) {
        font-size: 22px;
    }
`;

export default TituloEstilizado;