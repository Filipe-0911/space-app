import styled from "styled-components";

const TituloEstilizado = styled.h2`
    color: #7b78e6;
    font-size: 32px;
    text-align:${props => props.$alinhamento ? props.$alinhamento : 'left'};

    @media (max-width: 820px) {
        font-size: 22px;
        text-align: center;
    }
`;

export default TituloEstilizado;