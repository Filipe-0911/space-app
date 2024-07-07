import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GhandiSansBold' : 'GhandiSansRegular'};
    display: flex;
    align-items: center;
    gap: 1em;

    @media (max-width: 820px) {
        gap: 5px;
        font-size: 16px;
        width: 100%;

    }
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo === true ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    );
}

export default ItemNavegacao;