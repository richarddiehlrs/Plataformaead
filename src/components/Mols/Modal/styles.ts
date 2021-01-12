import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;

    display: flex;

    width: 100vw;
    height: 100%;

    top:0;
    z-index: 4;

    .add-note-container{
        position: relative;

        margin-left: auto;
        margin-top: 38%;
        margin-right: 14%;

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

        width: 400px;
        height: 140px;

        padding: 12px 12px;

        border-radius: 4px;

        background: rgba(255,255,255,1);
    }

    .add-note-header{
        display: flex;
        width: 100%;
        height: 30%;

        font-size: 16px;

    }
    
    .add-note-body{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        margin-top: 12px;
        padding-bottom: 8px;

        width: 100%;

        input{
            width: 100%;
            height: 40px;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

`;
